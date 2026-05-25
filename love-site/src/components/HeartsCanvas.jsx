import { useEffect, useRef } from "react";

function makeHeart(canvas) {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: 6 + Math.random() * 14,
    speed: 0.25 + Math.random() * 0.55,
    opacity: 0,
    maxOpacity: 0.07 + Math.random() * 0.11,
    drift: (Math.random() - 0.5) * 0.35,
  };
}

export default function HeartsCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const hearts = Array.from({ length: 24 }, () => makeHeart(canvas));
    hearts.forEach((h) => { h.y = Math.random() * canvas.height; });

    let raf;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach((h) => {
        h.y -= h.speed;
        h.x += h.drift;
        h.opacity = Math.min(h.maxOpacity, h.opacity + 0.0015);
        if (h.y < -20) Object.assign(h, makeHeart(canvas));

        const s = h.size;
        ctx.save();
        ctx.globalAlpha = h.opacity;
        ctx.translate(h.x, h.y);
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.4);
        ctx.bezierCurveTo(s * 0.5, -s, s, -s * 0.3, 0, s * 0.5);
        ctx.bezierCurveTo(-s, -s * 0.3, -s * 0.5, -s, 0, -s * 0.4);
        ctx.fillStyle = "#e8436a";
        ctx.fill();
        ctx.restore();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 pointer-events-none z-0" />;
}