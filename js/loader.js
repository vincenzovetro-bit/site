/**
 * loader.js  ·  Schermata di caricamento animata
 */
(function () {
  const bar    = document.getElementById('lbar');
  const pct    = document.getElementById('lpct');
  const loader = document.getElementById('loader');
  let progress = 0;

  const iv = setInterval(() => {
    progress += Math.random() * 6 + 3;
    if (progress >= 100) {
      progress = 100;
      clearInterval(iv);
      pct.textContent  = '100%';
      bar.style.width  = '100%';
      setTimeout(() => {
        loader.classList.add('done');
        setTimeout(() => loader.style.display = 'none', 700);
      }, 500);
    } else {
      pct.textContent = Math.floor(progress) + '%';
      bar.style.width = progress + '%';
    }
  }, 70);
})();
