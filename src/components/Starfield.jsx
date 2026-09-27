import { useEffect, useRef } from "react";

const TINTS = ["255 255 255", "255 255 255", "255 255 255", "186 230 253", "221 214 254"];

// Full-screen canvas of twinkling stars with depth parallax on scroll and the
// occasional shooting star. Static when the user prefers reduced motion.
export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    let width = 0;
    let height = 0;
    let stars = [];
    let frame = 0;
    let shooting = null;
    let nextShootAt = performance.now() + 3500;
    let isDark = root.classList.contains("dark");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(Math.round((width * height) / 4200), 380);
      stars = Array.from({ length: count }, () => {
        const depth = Math.random() ** 2 * 0.9 + 0.1;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          depth,
          radius: depth * 1.25 + 0.2,
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 1.6,
          tint: TINTS[Math.floor(Math.random() * TINTS.length)],
        };
      });
    };

    const drawShootingStar = (now) => {
      if (!shooting && now > nextShootAt && isDark) {
        const angle = (200 + Math.random() * 25) * (Math.PI / 180);
        shooting = {
          x: width * (0.35 + Math.random() * 0.65),
          y: height * Math.random() * 0.35,
          dx: Math.cos(angle),
          dy: -Math.sin(angle),
          born: now,
          life: 900 + Math.random() * 500,
        };
      }
      if (!shooting) return;

      const age = (now - shooting.born) / shooting.life;
      if (age >= 1) {
        shooting = null;
        nextShootAt = now + 5000 + Math.random() * 7000;
        return;
      }
      const travelled = age * 520;
      const headX = shooting.x + shooting.dx * travelled;
      const headY = shooting.y + shooting.dy * travelled;
      const tail = 140 * Math.sin(age * Math.PI);
      const gradient = ctx.createLinearGradient(
        headX,
        headY,
        headX - shooting.dx * tail,
        headY - shooting.dy * tail
      );
      const alpha = Math.sin(age * Math.PI);
      gradient.addColorStop(0, `rgb(255 255 255 / ${alpha})`);
      gradient.addColorStop(1, "rgb(186 230 253 / 0)");
      ctx.globalAlpha = 1;
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.4;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(headX, headY);
      ctx.lineTo(headX - shooting.dx * tail, headY - shooting.dy * tail);
      ctx.stroke();
    };

    const draw = (now = 0) => {
      ctx.clearRect(0, 0, width, height);
      const scroll = reduced ? 0 : window.scrollY;
      const baseAlpha = isDark ? 1 : 0.22;

      for (const star of stars) {
        const y = (((star.y - scroll * star.depth * 0.18) % height) + height) % height;
        const twinkle = reduced ? 0.85 : 0.55 + 0.45 * Math.sin((now / 1000) * star.speed + star.phase);
        ctx.globalAlpha = (0.2 + star.depth * 0.8) * twinkle * baseAlpha;
        ctx.fillStyle = isDark ? `rgb(${star.tint})` : "rgb(3 7 18)";
        ctx.beginPath();
        ctx.arc(star.x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) {
        drawShootingStar(now);
        frame = requestAnimationFrame(draw);
      }
    };

    const themeObserver = new MutationObserver(() => {
      isDark = root.classList.contains("dark");
      if (reduced) draw();
    });
    themeObserver.observe(root, { attributes: true, attributeFilter: ["class"] });

    const onResize = () => {
      resize();
      if (reduced) draw();
    };

    resize();
    draw();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
