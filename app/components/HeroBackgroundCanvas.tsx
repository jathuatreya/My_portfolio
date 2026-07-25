"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const CONNECTION_DIST = 150;
const MOUSE_REPEL_DIST = 130;
const SPEED = 0.5;
const PRIMARY = { r: 0, g: 119, b: 237 }; // #0077ED

/**
 * Animated hero background — floating particles connected by lines.
 * Particles gently drift and repel from the mouse / touch cursor.
 * Pure Canvas 2D — no WebGL required.
 */
export function HeroBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = () => window.innerWidth < 768;

    // Reduce particle count on mobile for performance
    const getParticleCount = () => (isMobile() ? 60 : 150);

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();

    let width = canvas.width;
    let height = canvas.height;
    let mouse = { x: width / 2, y: height / 2 };
    let rafId: number;

    // ── Build particles ──────────────────────────────────────────────
    let particles: Particle[] = Array.from(
      { length: getParticleCount() },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        radius: Math.random() * 1.5 + 1.0,
        opacity: Math.random() * 0.5 + 0.25,
      }),
    );

    // ── Helpers ──────────────────────────────────────────────────────
    const rgba = (a: number) =>
      `rgba(${PRIMARY.r},${PRIMARY.g},${PRIMARY.b},${a})`;

    // ── Render loop ──────────────────────────────────────────────────
    const draw = () => {
      width = canvas.width;
      height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Update & draw each particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse / touch repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_DIST && dist > 0) {
          const force = (MOUSE_REPEL_DIST - dist) / MOUSE_REPEL_DIST;
          p.vx += (dx / dist) * force * 1.4;
          p.vy += (dy / dist) * force * 1.4;
        }

        // Speed calculations
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);

        // Add subtle random wander (Brownian motion) so they never stop completely
        p.vx += (Math.random() - 0.5) * 0.06;
        p.vy += (Math.random() - 0.5) * 0.06;

        // Apply damping only if moving faster than base SPEED (e.g., after mouse repel)
        if (speed > SPEED) {
          p.vx *= 0.96;
          p.vy *= 0.96;
        }

        // Hard speed cap
        const maxSpeed = SPEED * 7;
        const currentSpeed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (currentSpeed > maxSpeed) {
          p.vx = (p.vx / currentSpeed) * maxSpeed;
          p.vy = (p.vy / currentSpeed) * maxSpeed;
        }

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = rgba(p.opacity);
        ctx.fill();

        // Draw connecting lines to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ex = p.x - q.x;
          const ey = p.y - q.y;
          const eDist = Math.sqrt(ex * ex + ey * ey);

          if (eDist < CONNECTION_DIST) {
            const lineOpacity = (1 - eDist / CONNECTION_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = rgba(lineOpacity);
            ctx.lineWidth = 2.5;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    // ── Event listeners ──────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
    };

    const onResize = () => {
      resize();
      width = canvas.width;
      height = canvas.height;
      mouse = { x: width / 2, y: height / 2 };

      // Rebuild particles on resize so they fill the new dimensions
      particles = Array.from({ length: getParticleCount() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        radius: Math.random() * 1.5 + 1.0,
        opacity: Math.random() * 0.5 + 0.25,
      }));
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-bg-canvas"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, display: "block" }}
    />
  );
}
