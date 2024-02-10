// Set current year
const yearEl = document.querySelector(".copyright-year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////
// Make mobile navigation work

btnMobileNavEl = document.querySelector(".btn-mobile-nav");

const btnNavEl = document.querySelector(".btn-mobile-nav");
const navEl = document.querySelector(".nav");

btnMobileNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (
      link.classList.contains("nav__link") ||
      link.classList.contains("btn-cta--hero")
    ) {
      if (navEl.classList.contains("nav-open")) {
        navEl.classList.toggle("nav-open");
      }
    }
  });
});
