const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.site-nav a');

toggle?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

navLinks.forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const revealItems = document.querySelectorAll('.reveal');
const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' }) : null;

revealItems.forEach(item => observer ? observer.observe(item) : item.classList.add("visible"));
window.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    header?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
