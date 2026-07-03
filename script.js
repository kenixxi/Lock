const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav-links]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const currentPage = document.body.dataset.page;
document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.dataset.nav === currentPage) {
    link.classList.add("active");
  }
});

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}
