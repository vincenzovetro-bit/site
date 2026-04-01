/**
 * cursor.js  ·  Cursore custom con ring animato
 */
(function () {
  const cur  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });

  (function animateRing() {
    rx += (mx - rx) * .1;
    ry += (my - ry) * .1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  /* hover enlargement */
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .project-card, .bio-img, .proc-img, .sw-btn')) {
      cur.classList.add('big'); ring.classList.add('big');
    } else {
      cur.classList.remove('big'); ring.classList.remove('big');
    }
  });
})();
