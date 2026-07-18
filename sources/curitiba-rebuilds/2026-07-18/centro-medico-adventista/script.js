(function () {
  "use strict";

  /**
   * Specialty list — every entry independently re-verified on 2026-07-18 against
   * https://curitiba.clinicaadventista.org.br/especialidades/ (page 1) and
   * https://curitiba.clinicaadventista.org.br/profissionais/ (full roster).
   * This is a confirmed floor, not a claim of completeness: the especialidades
   * index is paginated (3 pages) and only page 1 plus the professionals roster
   * were fetched. See SOURCE_MANIFEST.md for the full accounting. The site's
   * own aggregate claim ("mais de 30 especialidades médicas") is presented
   * separately in the hero and is not contradicted by this partial list.
   */
  var SPECIALTIES = [
    "Alergia e Imunologia",
    "Análises Clínicas",
    "Angiologia",
    "Cardiologia",
    "Cirurgia Geral",
    "Cirurgia Plástica",
    "Cirurgia Vascular",
    "Clínica Médica",
    "Coloproctologia",
    "Dermatologia",
    "Ecocardiografia",
    "Endocrinologia e Metabologia",
    "Fonoaudiologia",
    "Gastroenterologia",
    "Geriatria",
    "Ginecologia e Obstetrícia",
    "Infectologia",
    "Mastologia",
    "Nefrologia",
    "Neurologia",
    "Nutrição",
    "Oftalmologia",
    "Oncologia",
    "Pediatria",
    "Psicologia",
    "Psiquiatria",
    "Reumatologia",
    "Urologia"
  ];

  function normalize(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function groupByLetter(items) {
    var groups = {};
    items.forEach(function (name) {
      var letter = normalize(name.charAt(0)).toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(name);
    });
    return groups;
  }

  function buildWaLink(specialty) {
    var message = "Olá! Gostaria de agendar um atendimento em " + specialty + ".";
    return "https://api.whatsapp.com/send?phone=554132402900&text=" + encodeURIComponent(message);
  }

  function renderIndex(container, items) {
    container.innerHTML = "";
    if (items.length === 0) {
      var empty = document.createElement("p");
      empty.className = "specialty-empty";
      empty.textContent = "Nenhuma especialidade encontrada com esse termo. Fale com a equipe pelo WhatsApp para confirmar.";
      container.appendChild(empty);
      return;
    }
    var sorted = items.slice().sort(function (a, b) { return a.localeCompare(b, "pt-BR"); });
    var groups = groupByLetter(sorted);
    var letters = Object.keys(groups).sort();
    letters.forEach(function (letter) {
      var group = document.createElement("div");
      group.className = "specialty-group";

      var heading = document.createElement("h3");
      heading.className = "specialty-letter";
      heading.textContent = letter;
      group.appendChild(heading);

      var list = document.createElement("ul");
      list.className = "specialty-list";
      groups[letter].forEach(function (name) {
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.href = buildWaLink(name);
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = name;
        li.appendChild(link);
        list.appendChild(li);
      });
      group.appendChild(list);
      container.appendChild(group);
    });
  }

  function initSpecialtyIndex() {
    var container = document.querySelector("[data-specialty-index]");
    var input = document.querySelector("[data-specialty-search]");
    var count = document.querySelector("[data-specialty-count]");
    if (!container || !input) return;

    function update() {
      var query = normalize(input.value.trim());
      var filtered = query
        ? SPECIALTIES.filter(function (name) { return normalize(name).indexOf(query) !== -1; })
        : SPECIALTIES;
      renderIndex(container, filtered);
      if (count) {
        count.textContent = query
          ? filtered.length + " de " + SPECIALTIES.length + " especialidades"
          : SPECIALTIES.length + " especialidades nesta lista";
      }
    }

    input.addEventListener("input", update);
    update();
  }

  function initMobileNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav-mobile]");
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.classList.toggle("is-open", open);
      if (open) {
        nav.hidden = false;
        requestAnimationFrame(function () { nav.classList.add("is-open"); });
      } else {
        nav.classList.remove("is-open");
        window.setTimeout(function () {
          if (!nav.classList.contains("is-open")) nav.hidden = true;
        }, 220);
      }
    }

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  function initFooterYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function initStickyNavShadow() {
    var nav = document.querySelector(".site-nav");
    if (!nav) return;
    function onScroll() {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initSpecialtyIndex();
    initMobileNav();
    initFooterYear();
    initStickyNavShadow();
  });
})();
