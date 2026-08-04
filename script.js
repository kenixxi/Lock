const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

const directDownloadUrl =
  "https://github.com/kenixxi/Lock/releases/latest/download/Lock.zip";

document
  .querySelectorAll('a[href="https://github.com/kenixxi/Lock/releases/latest"]')
  .forEach((link) => {
    link.href = directDownloadUrl;
    link.setAttribute("download", "Lock.zip");
  });

document.querySelectorAll(".brand").forEach((brand) => {
  brand.innerHTML = '<img src="assets/lock-logo.svg" alt="Lock — in your best">';
});

const navDownload = document.querySelector(".nav-download");
if (navDownload) {
  const creatorLink = document.createElement("a");
  creatorLink.href = "#creator";
  creatorLink.textContent = "Creator";
  navDownload.before(creatorLink);
}

const finalCta = document.querySelector(".final-cta");
if (finalCta) {
  const creatorSection = document.createElement("section");
  creatorSection.className = "creator-section section reveal";
  creatorSection.id = "creator";
  creatorSection.innerHTML = `
    <div class="creator-copy">
      <p class="kicker">BEHIND LOCK</p>
      <h2>Created and owned<br><em>by KeniX.</em></h2>
      <p>Lock, its website, and the original champion-pool focus concept are independently designed and developed by KeniX.</p>
    </div>
    <div class="creator-card">
      <span class="creator-mark">KX</span>
      <div>
        <small>CREATOR &amp; OWNER</small>
        <h3>KeniX</h3>
        <p>Questions, feedback, bug reports, partnerships, or update ideas:</p>
        <a href="mailto:kenixio777@gmail.com">kenixio777@gmail.com <b>↗</b></a>
        <a class="creator-github" href="https://github.com/kenixxi">GitHub · @kenixxi</a>
      </div>
    </div>`;
  finalCta.before(creatorSection);
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "×" : "☰";
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
