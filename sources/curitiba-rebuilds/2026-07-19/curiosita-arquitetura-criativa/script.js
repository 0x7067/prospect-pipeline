/* Curiosità — revelação discreta ao rolar.
   Aprimora uma página já visível: nada depende de JS para aparecer. */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduzMovimento || !('IntersectionObserver' in window)) {
    return;
  }

  var alvos = document.querySelectorAll(
    '.hero-titleblock, .hero-fig, .hero-titleblock-meta, .station, .principio-fig, .principio-texto, .conversa-inner'
  );

  alvos.forEach(function (el) {
    el.classList.add('reveal');
  });

  var observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('revelado');
          observador.unobserve(entrada.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  alvos.forEach(function (el) {
    observador.observe(el);
  });
})();
