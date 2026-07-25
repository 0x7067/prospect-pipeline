/* =========================================================
   Trevi Hotel & Business — Interactive behavior
   Mobile nav toggle, reservation date defaults, smooth scroll
   ========================================================= */

(function () {
  'use strict';

  /* --- Mobile navigation toggle --- */
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    function openNav() {
      mainNav.classList.add('is-open');
      overlay.classList.add('is-visible');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      mainNav.classList.remove('is-open');
      overlay.classList.remove('is-visible');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.contains('is-open');
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    overlay.addEventListener('click', closeNav);

    // Close nav on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        closeNav();
        navToggle.focus();
      }
    });

    // Close nav when a link is clicked
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  /* --- Set default dates for reservation form --- */
  var checkinInput = document.getElementById('checkin');
  var checkoutInput = document.getElementById('checkout');

  if (checkinInput && checkoutInput) {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    function formatDate(date) {
      var y = date.getFullYear();
      var m = String(date.getMonth() + 1).padStart(2, '0');
      var d = String(date.getDate()).padStart(2, '0');
      return y + '-' + m + '-' + d;
    }

    checkinInput.setAttribute('min', formatDate(today));
    checkinInput.value = formatDate(today);
    checkoutInput.setAttribute('min', formatDate(tomorrow));
    checkoutInput.value = formatDate(tomorrow);

    // Update checkout min when checkin changes
    checkinInput.addEventListener('change', function () {
      var selectedDate = new Date(checkinInput.value);
      var newMin = new Date(selectedDate);
      newMin.setDate(newMin.getDate() + 1);
      checkoutInput.setAttribute('min', formatDate(newMin));

      // If checkout is before or equal to new checkin, set checkout to next day
      if (checkoutInput.value <= checkinInput.value) {
        checkoutInput.value = formatDate(newMin);
      }
    });
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = document.querySelector('.site-header')
          ? document.querySelector('.site-header').offsetHeight
          : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* --- Header background on scroll (subtle shadow) --- */
  var siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    var scrollThreshold = 10;
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > scrollThreshold) {
        siteHeader.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)';
      } else {
        siteHeader.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

})();
