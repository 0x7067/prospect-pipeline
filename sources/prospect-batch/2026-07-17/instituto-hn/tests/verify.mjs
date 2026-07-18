import { chromium } from 'playwright';
import fs from 'node:fs';
import { spawn } from 'node:child_process';
const port = process.env.PORT || '4174';
const base = `http://127.0.0.1:${port}`;
fs.mkdirSync('evidence', { recursive: true });
const server = spawn('python3', ['-m', 'http.server', port, '--bind', '127.0.0.1'], {stdio:'ignore'});
for (let attempt=0; attempt<40; attempt++) {
  try { const response = await fetch(`${base}/index.html`); if (response.ok) break; } catch {}
  await new Promise(resolve => setTimeout(resolve, 100));
  if (attempt === 39) throw new Error('Servidor local não iniciou');
}
const browser = await chromium.launch({headless:true});
const results=[];
async function check(url, name, viewport, shot, fullPage=false, requiredClean=true) {
  const page = await browser.newPage({ viewport });
  const consoleErrors=[]; const failed=[];
  page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', e => consoleErrors.push(e.message));
  page.on('requestfailed', r => failed.push(`${r.url()} :: ${r.failure()?.errorText}`));
  const response = await page.goto(url, {waitUntil:'networkidle'});
  const status = response?.status() ?? 0;
  await page.screenshot({path:shot, fullPage});
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  const lang = await page.locator('html').getAttribute('lang');
  results.push({name,viewport,status,overflow,lang,consoleErrors,failed,requiredClean});
  return page;
}
await check(`${base}/index.html`, 'produção-desktop', {width:1440,height:900}, 'evidence/proposed-desktop.png', true);
await check(`${base}/index.html`, 'produção-mobile', {width:390,height:844}, 'evidence/proposed-mobile.png', true);
await check('https://institutohn.com.br/', 'atual-desktop', {width:1440,height:900}, 'evidence/current-home-desktop.png', true, false);
await check('https://institutohn.com.br/', 'atual-mobile', {width:390,height:844}, 'evidence/current-home-mobile.png', true, false);
const proposal = await check(`${base}/proposal.html`, 'proposta-desktop', {width:1440,height:900}, 'evidence/proposal-desktop.png', true);
await check(`${base}/proposal.html`, 'proposta-mobile', {width:390,height:844}, 'evidence/proposal-mobile.png', true);
const proposalRobots = await proposal.locator('meta[name=robots]').getAttribute('content');
results.push({proposalRobots});
const page = await browser.newPage({viewport:{width:390,height:844}});
await page.goto(`${base}/index.html`, {waitUntil:'networkidle'});
const menu = page.locator('#menu-principal');
const toggle = page.locator('.menu-toggle');
await toggle.focus();
await page.keyboard.press('Enter');
const opened = await menu.evaluate(el => el.classList.contains('is-open'));
const expanded = await toggle.getAttribute('aria-expanded');
await page.keyboard.press('Escape');
const closed = !(await menu.evaluate(el => el.classList.contains('is-open')));
results.push({menu:{opened,expanded,closed}});
const localAudit = await page.evaluate(() => {
  const ids = new Set([...document.querySelectorAll('[id]')].map(el => el.id));
  const brokenAnchors = [...document.querySelectorAll('a[href^="#"]')].map(a => a.getAttribute('href')).filter(href => href !== '#' && !ids.has(href.slice(1)));
  const proposalLeak = /proposta|redesign|conceito independente|não representa/i.test(document.body.innerText) || !!document.querySelector('a[href*="proposal"]');
  return {brokenAnchors, proposalLeak};
});
results.push({localAudit});
await browser.close();
server.kill('SIGTERM');
fs.writeFileSync('evidence/test-results.json', `${JSON.stringify(results,null,2)}\n`);
console.log(JSON.stringify(results,null,2));
if (results.some(r => r.requiredClean && (r.status !== 200 || r.overflow || r.consoleErrors?.length || r.failed?.length)) || !results.find(r=>r.menu)?.menu.closed || localAudit.brokenAnchors.length || localAudit.proposalLeak) process.exit(1);
