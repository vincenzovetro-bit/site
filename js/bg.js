/**
 * bg.js  ·  Animated canvas: particelle + orb luminosi
 */
(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H, pts = [], t = 0;

  function init() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    pts = [];
    for (let i = 0; i < 120; i++) {
      pts.push({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - .5) * .5,
        vy:    (Math.random() - .5) * .5,
        r:     Math.random() * 2 + .5,
        alpha: Math.random() * .7 + .2,
        color: Math.random() > .85 ? [255, 45, 120]
             : Math.random() > .7   ? [10, 74, 255]
             :                        [0, 255, 231],
      });
    }
  }

  function draw() {
    t += .004;
    ctx.clearRect(0, 0, W, H);

    /* ---- animated orbs ---- */
    [
      { x: W*.15 + Math.sin(t*.7)*W*.08, y: H*.3 + Math.cos(t*.5)*H*.06, r: W*.35, c: '0,255,231',  a: .12 },
      { x: W*.8  + Math.sin(t*.4+1)*W*.1, y: H*.6 + Math.cos(t*.6+2)*H*.08, r: W*.30, c: '10,74,255', a: .10 },
      { x: W*.5  + Math.sin(t*.3+3)*W*.15,y: H*.8 + Math.cos(t*.4+1)*H*.05, r: W*.22, c: '255,45,120',a: .07 },
    ].forEach(o => {
      const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      g.addColorStop(0, `rgba(${o.c},${o.a})`);
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    });

    /* ---- particles + connections ---- */
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      for (let j = i + 1; j < pts.length; j++) {
        const q  = pts[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0,255,231,${(1 - d/120) * .35})`;
          ctx.lineWidth   = .4;
          ctx.stroke();
        }
      }

      const [r, g, b] = p.color;
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
      grd.addColorStop(0, `rgba(${r},${g},${b},${p.alpha})`);
      grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fillStyle = grd; ctx.fill();

      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', init);
  init();
  draw();
})();
