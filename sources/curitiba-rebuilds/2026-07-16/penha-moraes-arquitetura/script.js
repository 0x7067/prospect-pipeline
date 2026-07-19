/*
  Penha Moraes Arquitetura — evidence-bounded redesign concept
  Progressive-enhancement interactions only. No tracking, no network calls,
  no third-party scripts. Every feature below degrades to a working,
  visible default if JavaScript fails to load.
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
     Inert demo contact form — validates client-side, never sends
     data anywhere. Explicit about its own demo status.
     ------------------------------------------------------------ */
  function initContactForm() {
    var form = doc.getElementById("briefing-form");
    var status = doc.getElementById("form-status");
    var demoSubmit = form ? form.querySelector("[data-demo-submit]") : null;
    if (!form || !status || !demoSubmit) return;

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

    function validateDemo() {
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
        showStatus("error", "Revise os campos destacados antes de continuar.");
        return;
      }

      // Explicitly inert: no network request, persistence, or navigation.
      form.reset();
      requiredFields.forEach(function (field) { setFieldValidity(field, true); });
      showStatus(
        "success",
        "Formulário de demonstração — nenhum dado foi enviado ou armazenado. " +
          "Em produção, esse envio chegaria a um único endereço no domínio oficial."
      );
    }

    demoSubmit.addEventListener("click", validateDemo);
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
