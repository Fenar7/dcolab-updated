const header = document.querySelector('.sticky-header');
const hero = document.querySelector('.hero');

function toggleHeader() {
  const heroBottom = hero.getBoundingClientRect().bottom;

  if (heroBottom <= 0) {
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
  }
}
window.addEventListener('scroll', toggleHeader);

