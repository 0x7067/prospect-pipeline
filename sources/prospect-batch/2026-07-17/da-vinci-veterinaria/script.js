(function () {
  'use strict';

  var toggle = document.getElementById('navToggle');
  var closeBtn = document.getElementById('navClose');
  var nav = document.getElementById('mobileNav');
  if (!toggle || !nav || !closeBtn) return;

  var navLinks = nav.querySelectorAll('a, button');
  var lastFocused = null;

  function openNav() {
    lastFocused = document.activeElement;
    nav.setAttribute('data-open', 'true');
    nav.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
    document.addEventListener('keydown', onKeydown, true);
  }

  function closeNav(focusToggle) {
    nav.setAttribute('data-open', 'false');
    nav.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown, true);
    if (focusToggle !== false) {
      toggle.focus();
    }
  }

  function onKeydown(evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      closeNav(true);
      return;
    }
    // simple focus trap while nav is open
    if (evt.key === 'Tab' && nav.getAttribute('data-open') === 'true') {
      var focusable = nav.querySelectorAll('a, button');
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (evt.shiftKey && document.activeElement === first) {
        evt.preventDefault();
        last.focus();
      } else if (!evt.shiftKey && document.activeElement === last) {
        evt.preventDefault();
        first.focus();
      }
    }
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.getAttribute('data-open') === 'true';
    if (isOpen) {
      closeNav(true);
    } else {
      openNav();
    }
  });

  closeBtn.addEventListener('click', function () {
    closeNav(true);
  });

  // closing via any nav link (navigating to an in-page anchor)
  navLinks.forEach(function (el) {
    if (el === closeBtn) return;
    el.addEventListener('click', function () {
      closeNav(false);
    });
  });

  // click on the dark overlay area (outside the panel's visible content)
  nav.addEventListener('click', function (evt) {
    if (evt.target === nav) {
      closeNav(true);
    }
  });
})();
