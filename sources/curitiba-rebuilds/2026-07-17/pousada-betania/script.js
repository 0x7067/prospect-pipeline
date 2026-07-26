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
     leaves the page blank.

     Belt-and-suspenders against three known failure modes:
     1. Sections already in view at load time may not receive an
        observer callback before paint on some engines, so each
        section's own bounding box is checked synchronously right
        after it is marked pending and revealed immediately if it
        already qualifies.
     2. Non-interactive renders (screenshot tools, print-to-PDF,
        prerendering) never fire the scroll/resize events a real
        user would, so the observer alone may never trigger for
        below-the-fold sections. A global timeout force-reveals any
        section still pending after a short delay, regardless of
        scroll state.
     3. If IntersectionObserver throws or is unavailable, the
        try/catch below falls through and nothing is ever hidden. */
  if ('IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    try {
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

          /* Reveal immediately if already in (or near) the viewport
             at setup time, instead of waiting on the observer's
             first async callback. */
          const rect = section.getBoundingClientRect();
          const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
          if (rect.top < viewportHeight && rect.bottom > 0) {
            section.classList.add('is-revealed');
          } else {
            observer.observe(section);
          }
        });

        /* Fail-safe: guarantee every section is visible shortly
           after load even if no scroll/resize ever happens (e.g.
           automated screenshots, print views, or a stalled
           observer). */
        window.setTimeout(() => {
          document.querySelectorAll('.reveal-pending:not(.is-revealed)').forEach(section => {
            section.classList.add('is-revealed');
          });
        }, 1200);
      }
    } catch (err) {
      /* Any failure here must never leave content hidden. */
      document.querySelectorAll('.reveal-pending').forEach(section => {
        section.classList.add('is-revealed');
      });
    }
  }
});
