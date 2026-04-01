/**
 * reveal.js  ·  Scroll reveal + parallax hero
 */

function checkReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * .88)
      el.classList.add('visible');
  });
}

window.addEventListener('scroll', () => {
  checkReveal();
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) heroBg.style.transform = `scale(1.1) translateY(${window.scrollY * .22}px)`;
});

checkReveal();
