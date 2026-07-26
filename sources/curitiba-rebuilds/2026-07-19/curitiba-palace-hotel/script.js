/* Curitiba Palace Hotel — interaction layer
   Menu mobile, painel de verificação de disponibilidade e revelações de scroll.
   Sem dependências; tudo degrada graciosamente sem JS. */

(function () {
  "use strict";

  /* ---------- menu móvel ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mobile-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
      menu.setAttribute("data-open", String(!open));
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
        menu.setAttribute("data-open", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
        menu.setAttribute("data-open", "false");
        toggle.focus();
      }
    });
  }

  /* ---------- painel de disponibilidade ----------
     Valida as datas e encaminha o hóspede ao canal oficial de reservas
     do hotel. Nenhum dado é enviado a terceiros ou armazenado. */
  var form = document.querySelector(".booking");

  if (form) {
    var checkin = form.querySelector("#checkin");
    var checkout = form.querySelector("#checkout");

    var isoToday = new Date().toISOString().slice(0, 10);
    if (checkin) checkin.min = isoToday;
    if (checkout) checkout.min = isoToday;

    if (checkin && checkout) {
      checkin.addEventListener("change", function () {
        if (checkin.value) checkout.min = checkin.value;
        if (checkout.value && checkout.value < checkin.value) {
          checkout.value = checkin.value;
        }
      });
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!checkin.value || !checkout.value) {
        (checkin.value ? checkout : checkin).focus();
        return;
      }
      window.open("https://www.curitibapalacehotel.com.br/", "_blank", "noopener");
    });
  }

  /* ---------- revelações de scroll ----------
     Realçam um padrão já visível: sem JS, todo o conteúdo aparece normalmente.
     Um cronômetro de segurança garante que nenhuma seção fique invisível
     para sempre (leitores de tela lentos, ferramentas de captura de tela,
     impressão/PDF ou qualquer navegador que nunca dispare o observer). */
  var revealItems = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function revealAll() {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  if (revealItems.length && !reduceMotion && "IntersectionObserver" in window) {
    revealItems.forEach(function (item) {
      item.classList.add("reveal-armed");
    });
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealItems.forEach(function (item) {
      observer.observe(item);
    });
    // Rede de segurança: nada permanece escondido além de 1s.
    window.setTimeout(function () {
      observer.disconnect();
      revealAll();
    }, 1000);
  } else {
    revealAll();
  }
})();
