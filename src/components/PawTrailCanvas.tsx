'use client';

import React, { useEffect, useRef } from 'react';

const PAW_PATH =
  'M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z';

interface TrailItem {
  x: number;
  y: number;
  angle: number;
  born: number;
  scale?: number;
  isClick?: boolean;
}

export default function PawTrailCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only run on devices that support hover / fine pointer (desktop mouse)
    if (
      typeof window === 'undefined' ||
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let pawPath: Path2D;
    try {
      pawPath = new Path2D(PAW_PATH);
    } catch {
      return;
    }

    const trail: TrailItem[] = [];
    let dpr = 1;
    let animId = 0;
    let isRunning = false;
    let lastX = NaN;
    let lastY = NaN;
    let distanceTraveled = 0;
    let side = 1; // Alternating left and right paw: 1 or -1

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };
    resize();

    const drawFrame = (now: number) => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = trail.length - 1; i >= 0; i--) {
        const item = trail[i];
        const age = now - item.born;
        const maxDuration = item.isClick ? 1200 : 1000;

        if (age > maxDuration) {
          trail.splice(i, 1);
          continue;
        }

        // Smooth fade out
        const fade = age < 550 ? 1 : 1 - (age - 550) / (maxDuration - 550);
        const alpha = (item.isClick ? 0.8 : 0.45) * fade * fade;
        const scaleVal = item.isClick
          ? (0.32 + 0.04 * Math.sin(Math.min(age / 200, 1) * Math.PI)) * dpr
          : (item.scale || 0.27) * dpr;

        ctx.globalAlpha = alpha;
        ctx.setTransform(scaleVal, 0, 0, scaleVal, item.x * dpr, item.y * dpr);
        ctx.rotate(item.angle);
        ctx.translate(-32, -34);
        ctx.fillStyle = item.isClick ? '#2a170e' : '#c2622b';
        ctx.fill(pawPath);
      }

      if (trail.length > 0) {
        animId = requestAnimationFrame(drawFrame);
      } else {
        isRunning = false;
      }
    };

    // Movement handler: stamps walking puppy paws alternating left/right
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;

      if (Number.isNaN(lastX)) {
        lastX = e.clientX;
        lastY = e.clientY;
        return;
      }

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      distanceTraveled += Math.hypot(dx, dy);

      // Every 46px of cursor travel, step a new paw footprint
      if (distanceTraveled >= 46) {
        distanceTraveled = 0;
        const angle = Math.atan2(dy, dx) + Math.PI / 2;
        const lateralOffset = 7 * (side = -side);

        trail.push({
          x: e.clientX + Math.cos(angle) * lateralOffset + 14,
          y: e.clientY + Math.sin(angle) * lateralOffset + 16,
          angle,
          born: performance.now(),
          isClick: false,
        });

        if (trail.length > 18) {
          trail.shift();
        }

        if (!isRunning) {
          isRunning = true;
          animId = requestAnimationFrame(drawFrame);
        }
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    // Click handler: stamps a puppy paw at the mouse click location with a pop animation
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;

      trail.push({
        x: e.clientX + 9,
        y: e.clientY + 6,
        angle: (Math.random() - 0.5) * 0.3,
        born: performance.now(),
        isClick: true,
      });

      if (trail.length > 22) {
        trail.shift();
      }

      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(drawFrame);
      }

      // Spawn floating hearts or tiny paw burst on click
      spawnClickBurst(e.clientX, e.clientY);
    };

    const spawnClickBurst = (clientX: number, clientY: number) => {
      const container = document.body;
      if (!container) return;

      for (let r = 0; r < 4; r++) {
        const heart = document.createElement('span');
        heart.className = 'pup-heart';
        heart.textContent = r % 2 === 0 ? '🐾' : '♥';
        heart.style.position = 'fixed';
        heart.style.left = `${clientX}px`;
        heart.style.top = `${clientY}px`;
        heart.style.zIndex = '90';
        heart.style.pointerEvents = 'none';
        heart.style.userSelect = 'none';
        heart.style.fontSize = r % 2 === 0 ? '1rem' : '1.25rem';
        heart.style.color = '#c2622b';
        container.appendChild(heart);

        const offsetX = (Math.random() - 0.5) * 70;
        const offsetY = -40 - 50 * Math.random();

        heart
          .animate(
            [
              { transform: 'translate(-50%, -50%) scale(0.3)', opacity: 0 },
              { opacity: 0.9, offset: 0.2 },
              {
                transform: `translate(calc(-50% + ${offsetX.toFixed(
                  0
                )}px), ${offsetY.toFixed(0)}px) scale(1.15)`,
                opacity: 0,
              },
            ],
            {
              duration: 800 + 80 * r,
              delay: 40 * r,
              easing: 'cubic-bezier(.2, .7, .3, 1)',
              fill: 'forwards',
            }
          )
          .finished.then(() => heart.remove(), () => heart.remove());
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] size-full"
    />
  );
}

