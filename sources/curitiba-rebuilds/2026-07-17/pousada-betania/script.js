/* Pousada Betânia — Refúgio Legível
   Mobile nav, header scroll behavior, smooth anchor scrolling
*/

document.addEventListener('DOMContentLoaded', () => {
  /* ── Header scroll state ────────────────────────── */
  const header = document.querySelector('.site-header');
  if (header) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── Mobile nav toggle ──────────────────────────── */
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(toggle => {
    const targetId = toggle.getAttribute('aria-controls');
    const target = document.getElementById(targetId);
    if (!target) return;

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      target.classList.toggle('open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    /* Close on link click */
    target.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        target.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    /* Close on Escape */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        target.classList.remove('open');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  });

  /* ── Smooth anchor scrolling ────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });

      /* Move focus for accessibility */
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  /* ── Intersection observer for reveal (fail-safe) ──
     Content is visible by default; JS only hides it when the
     observer is confirmed available, so a misfire never
     leaves the page blank. */
  if ('IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const sections = document.querySelectorAll('.section, .paths, .hero');
    if (sections.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      sections.forEach(section => {
        section.classList.add('reveal-pending');
        observer.observe(section);
      });
    }
  }
});
