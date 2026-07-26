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

  /* ---- Intersection observer for section reveals (fail-safe) ----
     Content is visible by default; JS only hides it when the
     observer is confirmed available. A backup timer forces every
     pending element visible shortly after load no matter what —
     so content never stays hidden if a scroll/resize/observer
     event fails to fire (slow devices, automated page captures,
     print/export tools, unusual browser quirks, etc.). */
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var revealElements = document.querySelectorAll('.founder, .portfolio__item, .stages__item, .intake');
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      el.classList.add('reveal-pending');
      observer.observe(el);
    });

    /* Fail-safe: guarantee reveal even if intersection never fires */
    setTimeout(function () {
      document.querySelectorAll('.reveal-pending:not(.is-revealed)').forEach(function (el) {
        el.classList.add('is-revealed');
      });
    }, 900);
  }

  /* ---- Project intake form: degrade to WhatsApp with a pre-filled
     message built from the visitor's answers. If JS is unavailable,
     the form's native action/enctype falls back to a mailto: draft,
     so submitting is never a dead end. ---- */
  var intakeForm = document.getElementById('intake-form');
  if (intakeForm) {
    intakeForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var get = function (name) {
        var field = intakeForm.querySelector('[name="' + name + '"]');
        return field ? field.value.trim() : '';
      };
      var projectTypeSelect = intakeForm.querySelector('[name="project-type"]');
      var projectTypeLabel = projectTypeSelect && projectTypeSelect.selectedIndex > 0
        ? projectTypeSelect.options[projectTypeSelect.selectedIndex].text
        : '';

      var lines = [
        'Olá, vim pelo site da Arte & Jardim e gostaria de falar sobre um projeto.',
        'Nome: ' + (get('name') || '-'),
        'Telefone: ' + (get('phone') || '-'),
        'E-mail: ' + (get('email') || '-')
      ];
      if (projectTypeLabel) { lines.push('Tipo de projeto: ' + projectTypeLabel); }
      if (get('message')) { lines.push('Ideia: ' + get('message')); }

      var whatsappUrl = 'https://wa.me/5541991025129?text=' + encodeURIComponent(lines.join('\n'));
      window.open(whatsappUrl, '_blank', 'noopener');
    });
  }
})();
