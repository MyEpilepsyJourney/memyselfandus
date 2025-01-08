import React, { useEffect, useRef } from 'react';
import { createPresent, drawPresent, updatePresent, drawSparkle } from '../../../utils/presentAnimations';

export default function ChristmasTheme() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create presents
    const presents = Array.from({ length: 15 }, () => createPresent(canvas.width));

    // Create sparkles
    const sparkles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      alpha: Math.random(),
      alphaSpeed: Math.random() * 0.02 + 0.01
    }));

    let animationFrame: number;
    let lastTime = 0;
    const fps = 60;
    const frameInterval = 1000 / fps;

    function animate(currentTime: number) {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw and update sparkles
        sparkles.forEach(sparkle => {
          ctx.globalAlpha = Math.abs(Math.sin(sparkle.alpha));
          drawSparkle(ctx, sparkle.x, sparkle.y);
          sparkle.alpha += sparkle.alphaSpeed;
        });

        // Reset alpha for presents
        ctx.globalAlpha = 0.6; // Make presents slightly transparent

        // Draw and update presents
        presents.forEach(present => {
          drawPresent(ctx, present);
          updatePresent(present, canvas.height, canvas.width);
        });

        lastTime = currentTime;
      }

      animationFrame = requestAnimationFrame(animate);
    }

    animate(0);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 1,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        WebkitFontSmoothing: 'antialiased'
      }}
    />
  );
}