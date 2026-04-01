/**
 * nav.js  ·  Navigazione SPA tra le pagine
 */

/**
 * Mostra una pagina e nasconde le altre.
 * @param {string} name   - 'home' | 'project' | 'bio'
 * @param {string} [proj] - 'capanna' | 'lampada' | 'cuffie'
 */
function showPage(name, proj) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(name);
  if (page) page.classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'project' && proj) switchProject(proj);
  setTimeout(checkReveal, 100);
}

/**
 * Cambia il progetto visibile nella pagina project.
 * @param {string} name - 'capanna' | 'lampada' | 'cuffie'
 */
function switchProject(name) {
  ['capanna', 'lampada', 'cuffie'].forEach(n => {
    const el = document.getElementById('p-' + n);
    if (el) el.style.display = (n === name) ? 'block' : 'none';
  });
  document.querySelectorAll('.sw-btn').forEach((btn, i) => {
    btn.classList.toggle('active', ['capanna', 'lampada', 'cuffie'][i] === name);
  });
  initRevealWidget(name);
  setTimeout(checkReveal, 100);
}
