const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#menu');
function setMenuLabel(open){const label=toggle?.querySelector('.sr-only');if(label)label.textContent=open?'Fechar menu':'Abrir menu';}
function closeMenu(){toggle?.setAttribute('aria-expanded','false');setMenuLabel(false);menu?.classList.remove('open');document.body.classList.remove('menu-open');}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));setMenuLabel(!open);menu.classList.toggle('open',!open);document.body.classList.toggle('menu-open',!open);});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const filters=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('.course-card')];
function applyFilter(value){filters.forEach(b=>{const selected=b.dataset.filter===value;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});cards.forEach(c=>{c.hidden=value!=='todos'&&c.dataset.area!==value;});}
filters.forEach(b=>b.addEventListener('click',()=>applyFilter(b.dataset.filter)));
document.querySelectorAll('[data-set-filter]').forEach(a=>a.addEventListener('click',()=>applyFilter(a.dataset.setFilter)));
