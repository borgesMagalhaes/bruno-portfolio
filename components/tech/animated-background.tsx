"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  growth: number;
  lineWidth: number;
  strong?: boolean;
};

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rippleCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const rippleCanvas = rippleCanvasRef.current;
    if (!canvas || !rippleCanvas) return;

    const ctx = canvas.getContext("2d");
    const rippleCtx = rippleCanvas.getContext("2d");
    if (!ctx || !rippleCtx) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedMotion = media.matches;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    const ripples: Ripple[] = [];
    let lastMoveAt = 0;

    const initDots = () => {
      const count = Math.max(24, Math.floor((width * height) / 42000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
    };

    const addRipple = (x: number, y: number, strong = false) => {
      ripples.push({
        x,
        y,
        radius: strong ? 8 : 3,
        alpha: strong ? 0.72 : 0.38,
        growth: strong ? 2.1 : 1.35,
        lineWidth: strong ? 2.4 : 1.4,
        strong,
      });
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      rippleCanvas.width = Math.floor(width * ratio);
      rippleCanvas.height = Math.floor(height * ratio);
      rippleCanvas.style.width = `${width}px`;
      rippleCanvas.style.height = `${height}px`;
      rippleCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
      initDots();
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      rippleCtx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i += 1) {
        const dot = dots[i];
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < -20) dot.x = width + 20;
        if (dot.x > width + 20) dot.x = -20;
        if (dot.y < -20) dot.y = height + 20;
        if (dot.y > height + 20) dot.y = -20;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(125, 211, 252, 0.36)";
        ctx.fill();
      }

      for (let i = 0; i < dots.length; i += 1) {
        const a = dots[i];
        for (let j = i + 1; j < dots.length; j += 1) {
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 100) {
            const alpha = 1 - distance / 100;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha * 0.2})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      for (let i = ripples.length - 1; i >= 0; i -= 1) {
        const ripple = ripples[i];
        ripple.radius += ripple.growth;
        ripple.alpha *= 0.965;
        if (ripple.alpha < 0.02) {
          ripples.splice(i, 1);
          continue;
        }

        const glow = rippleCtx.createRadialGradient(
          ripple.x,
          ripple.y,
          Math.max(1, ripple.radius * 0.15),
          ripple.x,
          ripple.y,
          ripple.radius * 2.2,
        );
        glow.addColorStop(0, `rgba(34, 211, 238, ${ripple.alpha * (ripple.strong ? 0.34 : 0.22)})`);
        glow.addColorStop(1, "rgba(34, 211, 238, 0)");
        rippleCtx.fillStyle = glow;
        rippleCtx.beginPath();
        rippleCtx.arc(ripple.x, ripple.y, ripple.radius * 2.2, 0, Math.PI * 2);
        rippleCtx.fill();

        // Outer wave
        rippleCtx.beginPath();
        rippleCtx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        rippleCtx.strokeStyle = `rgba(160, 247, 255, ${ripple.alpha})`;
        rippleCtx.lineWidth = ripple.lineWidth;
        rippleCtx.stroke();

        // Secondary ring to mimic water propagation
        rippleCtx.beginPath();
        rippleCtx.arc(ripple.x, ripple.y, ripple.radius * 0.68, 0, Math.PI * 2);
        rippleCtx.strokeStyle = `rgba(96, 232, 255, ${ripple.alpha * 0.72})`;
        rippleCtx.lineWidth = Math.max(1, ripple.lineWidth - 0.6);
        rippleCtx.stroke();
      }

      if (!reducedMotion) {
        raf = window.requestAnimationFrame(drawFrame);
      }
    };

    resize();
    drawFrame();

    const onResize = () => resize();
    const onMouseMove = (event: MouseEvent) => {
      const now = performance.now();
      if (now - lastMoveAt < 55) return;
      lastMoveAt = now;
      addRipple(event.clientX, event.clientY, false);
    };
    const onClick = (event: MouseEvent) => {
      addRipple(event.clientX, event.clientY, true);
      addRipple(event.clientX, event.clientY, true);
      addRipple(event.clientX, event.clientY, false);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden className="tech-canvas print:hidden" />
      <canvas ref={rippleCanvasRef} aria-hidden className="tech-ripple-canvas print:hidden" />
    </>
  );
}
