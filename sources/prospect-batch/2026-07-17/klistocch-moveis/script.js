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
