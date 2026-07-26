const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
if(toggle&&nav){
  const label=toggle.querySelector('b');
  const setMenuState=open=>{
    nav.classList.toggle('is-open',open);
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
    document.body.classList.toggle('menu-open',open);
    if(label)label.textContent=open?'Fechar':'Menu';
  };
  toggle.addEventListener('click',()=>setMenuState(toggle.getAttribute('aria-expanded')!=='true'));
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenuState(false)));
  document.addEventListener('click',event=>{
    if(toggle.getAttribute('aria-expanded')==='true'&&!nav.contains(event.target)&&!toggle.contains(event.target))setMenuState(false);
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){
      setMenuState(false);toggle.focus();
    }
  },true);
}
