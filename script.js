const htmlEl = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('.theme-icon');

function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
  localStorage.setItem('theme', theme);
}

applyTheme(localStorage.getItem('theme') || 'dark');

themeBtn.addEventListener('click', () => {
  applyTheme(htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.zoomable').forEach((img) => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
