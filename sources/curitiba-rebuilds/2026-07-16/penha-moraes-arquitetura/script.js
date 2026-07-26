/*
  Penha Moraes Arquitetura — evidence-bounded redesign concept
  Progressive-enhancement interactions only. No tracking, no analytics
  calls, no third-party scripts. Every feature below degrades to a
  working, visible default if JavaScript fails to load (the contact
  form's native mailto action, in particular, works without this file).
*/
(function () {
  "use strict";

  var doc = document;
  var prefersReducedMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : { matches: false };

  /* ------------------------------------------------------------
     Mobile navigation toggle
     ------------------------------------------------------------ */
  function initNavToggle() {
    var toggle = doc.querySelector(".nav-toggle");
    var menu = doc.getElementById("mobile-nav");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      if (isOpen) {
        menu.setAttribute("hidden", "");
      } else {
        menu.removeAttribute("hidden");
      }
    });

    // Close the mobile menu after choosing a link, and on Escape.
    menu.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        menu.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    doc.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !menu.hasAttribute("hidden")) {
        menu.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ------------------------------------------------------------
     Portfolio typology filter — the exact interaction the current
     site is missing (the "Ver todos os projetos" link points to #).
     ------------------------------------------------------------ */
  function initPortfolioFilter() {
    var controls = doc.querySelector(".portfolio-controls");
    var grid = doc.getElementById("portfolio-grid");
    var emptyState = doc.getElementById("portfolio-empty");
    if (!controls || !grid) return;

    var chips = Array.prototype.slice.call(controls.querySelectorAll(".filter-chip"));
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".portfolio-card"));

    function applyFilter(filter) {
      var visibleCount = 0;
      cards.forEach(function (card) {
        var matches = filter === "todos" || card.getAttribute("data-category") === filter;
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });
      if (emptyState) emptyState.hidden = visibleCount !== 0;
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (other) {
          other.setAttribute("aria-pressed", String(other === chip));
        });
        applyFilter(chip.getAttribute("data-filter"));
      });
    });
  }

  /* ------------------------------------------------------------
     Contact form — validates client-side, then hands off to a
     mailto: link built from the visitor's own answers. No network
     request, no storage, no third-party endpoint. If JavaScript
     fails to load, the form's native action="mailto:..." method="get"
     still lets the browser attempt the same hand-off.
     ------------------------------------------------------------ */
  function initContactForm() {
    var form = doc.getElementById("briefing-form");
    var status = doc.getElementById("form-status");
    var submitBtn = form ? form.querySelector("[data-mailto-submit]") : null;
    if (!form || !status || !submitBtn) return;

    function setFieldValidity(field, isValid) {
      var wrapper = field.closest(".field");
      if (!wrapper) return;
      wrapper.classList.toggle("is-invalid", !isValid);
    }

    function showStatus(kind, message) {
      status.hidden = false;
      status.textContent = message;
      status.className = "form-status form-status--" + kind;
      status.setAttribute("role", kind === "error" ? "alert" : "status");
    }

    function buildMailto() {
      var nome = (form.nome.value || "").trim();
      var email = (form.email.value || "").trim();
      var tipo = (form.tipo.value || "").trim();
      var mensagem = (form.mensagem.value || "").trim();

      var subject = "Novo contato pelo site" + (tipo ? " — " + tipo : "");
      var bodyLines = [
        "Nome: " + nome,
        "E-mail: " + email,
        "Interesse: " + (tipo || "Não informado"),
        "",
        "Mensagem:",
        mensagem
      ];

      return (
        "mailto:contato@penhamoraes.arq.br?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(bodyLines.join("\n"))
      );
    }

    form.addEventListener("submit", function (event) {
      var requiredFields = Array.prototype.slice.call(
        form.querySelectorAll("[required]")
      );
      var allValid = true;

      requiredFields.forEach(function (field) {
        var value = (field.value || "").trim();
        var valid = value.length > 0;
        if (field.type === "email" && valid) {
          valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        }
        if (!valid) allValid = false;
        setFieldValidity(field, valid);
      });

      if (!allValid) {
        event.preventDefault();
        showStatus("error", "Revise os campos destacados antes de continuar.");
        return;
      }

      // JavaScript enhances the native mailto action with a real subject
      // and body built from the visitor's own answers. Still no network
      // request, persistence, or third-party endpoint.
      event.preventDefault();
      requiredFields.forEach(function (field) { setFieldValidity(field, true); });
      window.location.href = buildMailto();
      showStatus(
        "success",
        "Seu aplicativo de e-mail deve abrir com a mensagem pronta para contato@penhamoraes.arq.br. " +
          "Nenhum dado é enviado a um servidor — o e-mail parte diretamente do seu dispositivo."
      );
    });
  }

  /* ------------------------------------------------------------
     Reveal-on-scroll — progressive enhancement only. Content is
     fully visible without JavaScript (see .reveal in styles.css);
     this adds a restrained entrance once elements are already in
     view, and does nothing when reduced motion is requested.
     ------------------------------------------------------------ */
  function initReveal() {
    if (prefersReducedMotion.matches) return;
    var targets = Array.prototype.slice.call(doc.querySelectorAll(".reveal"));
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    doc.documentElement.classList.add("js-motion");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    targets.forEach(function (el) { observer.observe(el); });
  }

  function init() {
    initNavToggle();
    initPortfolioFilter();
    initContactForm();
    initReveal();
  }

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
