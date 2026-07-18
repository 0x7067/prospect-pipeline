const { chromium } = require('/opt/data/lib/node_modules/agent-afk/node_modules/playwright');
const fs = require('fs');
const assert = require('assert');
const { spawn } = require('child_process');

(async () => {
  const server = spawn('python3', ['-m', 'http.server', '43903', '--bind', '127.0.0.1'], {cwd: require('path').resolve(__dirname, '..'), stdio:'ignore'});
  await new Promise(resolve => setTimeout(resolve, 700));
  const browser = await chromium.launch({ headless: true });
  const results = { runAt: new Date().toISOString(), baseUrl: 'http://127.0.0.1:43903', cases: [] };
  try {
    for (const size of [{name:'desktop',width:1440,height:900},{name:'mobile',width:390,height:844}]) {
      const page = await browser.newPage({ viewport: { width:size.width, height:size.height } });
      const consoleErrors=[], pageErrors=[], failed=[];
      page.on('console', m => { if (m.type()==='error') consoleErrors.push(m.text()); });
      page.on('pageerror', e => pageErrors.push(e.message));
      page.on('requestfailed', r => failed.push(`${r.method()} ${r.url()} ${r.failure()?.errorText}`));
      const response = await page.goto(results.baseUrl + '/index.html', {waitUntil:'networkidle'});
      await page.evaluate(async () => {
        for (let y=0; y<document.body.scrollHeight; y+=600) { window.scrollTo(0,y); await new Promise(r=>setTimeout(r,20)); }
        window.scrollTo(0,0);
      });
      await page.waitForTimeout(300);
      const data = await page.evaluate(() => ({
        title: document.title,
        h1: document.querySelector('h1')?.textContent.trim(),
        services: document.querySelectorAll('#tratamentos .service').length,
        members: document.querySelectorAll('#equipe .member').length,
        phoneLinks: document.querySelectorAll('a[href="tel:+554130222999"]').length,
        mailLinks: document.querySelectorAll('a[href="mailto:contato@archodontologia.com"]').length,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        brokenImages: [...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.getAttribute('src')),
        remoteImages: [...document.images].filter(i=>/^https?:/.test(i.getAttribute('src')||'')).map(i=>i.getAttribute('src')),
        missingAnchorTargets: [...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>h.length>1 && !document.querySelector(h)),
        mapLinks: document.querySelectorAll('a[href^="https://www.google.com/maps/"]').length
      }));
      assert.equal(response.status(),200); assert(data.title.includes('Arch Odontologia')); assert(data.h1.includes('Seu sorriso'));
      assert.equal(data.services,6); assert.equal(data.members,4); assert(data.phoneLinks>=1); assert.equal(data.mailLinks,1); assert.equal(data.mapLinks,1);
      assert(data.scrollWidth<=data.clientWidth,`horizontal overflow ${data.scrollWidth}/${data.clientWidth}`);
      assert.deepEqual(data.brokenImages,[]); assert.deepEqual(data.remoteImages,[]); assert.deepEqual(data.missingAnchorTargets,[]); assert.deepEqual(consoleErrors,[]); assert.deepEqual(pageErrors,[]); assert.deepEqual(failed,[]);
      results.cases.push({name:`production-${size.name}`,status:'PASS',httpStatus:response.status(),...data,consoleErrors,pageErrors,failedRequests:failed});
      await page.close();
    }
    const proposal = await browser.newPage({viewport:{width:390,height:844}});
    const response = await proposal.goto(results.baseUrl+'/proposal.html',{waitUntil:'networkidle'});
    const p = await proposal.evaluate(() => ({
      label: document.querySelector('.tag')?.textContent.trim(),
      linkToProduction: document.querySelectorAll('a[href="index.html"]').length,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    }));
    assert.equal(response.status(),200); assert(p.label.includes('Proposta estratégica')); assert.equal(p.linkToProduction,1); assert(p.scrollWidth<=p.clientWidth);
    results.cases.push({name:'proposal-mobile',status:'PASS',httpStatus:response.status(),...p});
    await proposal.close();
    results.status='PASS';
  } catch (error) {
    results.status='FAIL'; results.error=error.stack; process.exitCode=1;
  } finally {
    await browser.close();
    server.kill('SIGTERM');
    fs.writeFileSync('evidence/proposed/verification-results.json', JSON.stringify(results,null,2)+'\n');
    console.log(JSON.stringify(results,null,2));
  }
})();
