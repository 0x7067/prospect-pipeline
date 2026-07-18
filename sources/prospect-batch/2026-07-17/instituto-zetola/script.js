(function () {
  'use strict';

  var toggle = document.getElementById('menuToggle');
  var closeBtn = document.getElementById('menuClose');
  var nav = document.getElementById('mobileNav');
  var scrim = nav ? nav.querySelector('[data-nav-scrim]') : null;
  var navLinks = nav ? nav.querySelectorAll('[data-nav-link]') : [];

  if (!toggle || !nav) return;

  function openMenu() {
    nav.setAttribute('data-open', 'true');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
    document.body.style.overflow = 'hidden';
    var panel = nav.querySelector('.mobile-nav__panel');
    var firstLink = panel ? panel.querySelector('a, button') : null;
    if (firstLink) firstLink.focus();
  }

  function closeMenu(returnFocus) {
    nav.setAttribute('data-open', 'false');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    document.body.style.overflow = '';
    if (returnFocus !== false) toggle.focus();
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.getAttribute('data-open') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () { closeMenu(); });
  }

  if (scrim) {
    scrim.addEventListener('click', function () { closeMenu(); });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () { closeMenu(false); });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.getAttribute('data-open') === 'true') {
      closeMenu();
    }
  });

  // Simple focus trap while the off-canvas menu is open.
  nav.addEventListener('keydown', function (event) {
    if (event.key !== 'Tab') return;
    if (nav.getAttribute('data-open') !== 'true') return;

    var focusable = nav.querySelectorAll('a[href], button:not([disabled])');
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // Close mobile menu automatically if the viewport grows into desktop nav.
  var desktopQuery = window.matchMedia('(min-width: 1024px)');
  function handleViewportChange(mql) {
    if (mql.matches && nav.getAttribute('data-open') === 'true') {
      closeMenu(false);
    }
  }
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener('change', handleViewportChange);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(handleViewportChange);
  }
})();
