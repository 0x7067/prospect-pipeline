(function () {
  'use strict';

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu-list');
  const links = menu ? menu.querySelectorAll('a') : [];
  const yearSpan = document.getElementById('year');

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function openMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
    menu.classList.add('is-open');
  }

  function toggleMenu() {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu(); else openMenu();
  }

  if (toggle && menu) {
    toggle.addEventListener('click', toggleMenu);

    links.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 760) closeMenu();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // Update footer year to current year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
})();
document.addEventListener('DOMContentLoaded',function(){const title=document.querySelector('.hero-panel h1');if(title){title.innerHTML=title.innerHTML.replace('planejados','<mark class="word-highlight">planejados</mark>').replace('para você','<span class="word-circle">para você</span>')}const slides=[...document.querySelectorAll('.hero-slide')],dots=[...document.querySelectorAll('.hero-dot')];let i=0;function show(n){i=n;slides.forEach((s,k)=>s.classList.toggle('is-active',k===n));dots.forEach((d,k)=>d.classList.toggle('is-active',k===n))}dots.forEach((d,k)=>d.addEventListener('click',()=>show(k)));if(slides.length>1)setInterval(()=>show((i+1)%slides.length),5000);
  // Scroll-reveal: only ever hides content once JS has confirmed it can also show it again.
  // Guards against elements staying permanently invisible when IntersectionObserver never
  // fires (full-page screenshots/PDF export, crawlers that don't scroll, prefers-reduced-motion).
  const revealEls=document.querySelectorAll('section:not(.hero),.ambiente-card,.processo-item');
  if('IntersectionObserver' in window){
    document.documentElement.classList.add('js-reveal');
    revealEls.forEach(e=>{e.dataset.reveal=''});
    const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('is-visible')),{threshold:.12});
    revealEls.forEach(e=>io.observe(e));
    // Safety net: reveal anything still hidden shortly after load, so content
    // below the fold is never permanently invisible without a real scroll.
    setTimeout(()=>{revealEls.forEach(e=>e.classList.add('is-visible'))},1200);
  }
});
