/* Arte & Jardim — Interactive behavior */
(function () {
  'use strict';

  /* ---- Mobile navigation toggle ---- */
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      links.classList.toggle('nav__links--open');
    });

    /* Close mobile menu when a link is clicked */
    links.querySelectorAll('.nav__link, .nav__cta').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('nav__links--open');
      });
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('nav__links--open');
        toggle.focus();
      }
    });
  }

  /* ---- Nav scroll shadow ---- */
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 10) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Smooth scroll for anchor links (fallback for Safari) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = nav ? nav.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
        /* Update URL without jump */
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  /* ---- Intersection observer for section reveals ---- */
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var revealElements = document.querySelectorAll('.founder, .portfolio__item, .stages__item, .intake');
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      observer.observe(el);
    });
  }
})();
