(function () {
  'use strict';

  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = mainNav ? mainNav.querySelectorAll('a') : [];
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  function toggleMenu(force) {
    const isOpen = force !== undefined ? force : !mainNav.classList.contains('open');
    mainNav.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      toggleMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mainNav.classList.contains('open')) {
        toggleMenu(false);
        menuToggle.focus();
      }
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (mainNav.classList.contains('open')) {
          toggleMenu(false);
        }
      });
    });
  }

  // Header shadow on scroll
  if (header) {
    window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > 10) {
        header.style.boxShadow = '0 1px 0 rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // Anchor links with fixed header offset
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });
})();
