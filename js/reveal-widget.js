/**
 * reveal-widget.js  ·  Drag per confrontare wireframe e render
 */

function initRevealWidget(name) {
  const wrap = document.getElementById('rw-' + name);
  if (!wrap || wrap._init) return;
  wrap._init = true;

  const topImg  = document.getElementById('rt-' + name);
  const divider = document.getElementById('rd-' + name);
  let dragging  = false;

  function setPosition(clientX) {
    const rect = wrap.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(2, Math.min(98, pct));
    topImg.style.clipPath  = `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)`;
    divider.style.left     = pct + '%';
  }

  /* Mouse */
  wrap.addEventListener('mousedown',  e => { dragging = true; setPosition(e.clientX); });
  window.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });
  window.addEventListener('mouseup',   ()  => dragging = false);

  /* Touch */
  wrap.addEventListener('touchstart',  e => { dragging = true; setPosition(e.touches[0].clientX); });
  wrap.addEventListener('touchmove',   e => { setPosition(e.touches[0].clientX); e.preventDefault(); }, { passive: false });
  window.addEventListener('touchend',  ()  => dragging = false);
}

/* Pre-inizializza tutti e tre */
['capanna', 'lampada', 'cuffie'].forEach(initRevealWidget);
