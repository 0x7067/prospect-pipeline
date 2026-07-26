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
    if (window.innerWidth <= 760) document.body.style.overflow = 'hidden';
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

  document.querySelectorAll('.depoimento-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      var quote = button.closest('.depoimento');
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      button.textContent = expanded ? 'Ler depoimento completo' : 'Mostrar menos';
      if (quote) quote.classList.toggle('is-expanded', !expanded);
    });
  });
})();
document.addEventListener('DOMContentLoaded',function(){const title=document.querySelector('.hero-panel h1');if(title){title.innerHTML=title.innerHTML.replace('planejados','<mark class="word-highlight">planejados</mark>').replace('para você','<span class="word-circle">para você</span>')}const slides=[...document.querySelectorAll('.hero-slide')],dots=[...document.querySelectorAll('.hero-dot')];let i=0;function show(n){i=n;slides.forEach((s,k)=>s.classList.toggle('is-active',k===n));dots.forEach((d,k)=>d.classList.toggle('is-active',k===n))}dots.forEach((d,k)=>d.addEventListener('click',()=>show(k)));if(slides.length>1)setInterval(()=>show((i+1)%slides.length),5000);const targets=[...document.querySelectorAll('section:not(.hero),.ambiente-card,.processo-item')];const revealAll=()=>targets.forEach(e=>e.classList.add('is-visible'));try{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('is-visible')),{rootMargin:'400px',threshold:0});targets.forEach(e=>{e.dataset.reveal='';io.observe(e);const r=e.getBoundingClientRect();if(r.top<window.innerHeight+400)e.classList.add('is-visible')});window.setTimeout(revealAll,900)}catch(err){revealAll()}});
