import React, { useEffect, useRef } from 'react';

export default function AutumnTheme() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const leaves: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      rotation: number;
      rotationSpeed: number;
      color: string;
    }> = [];

    const colors = ['#FF6B6B', '#FFB347', '#D4A017', '#8B4513'];

    for (let i = 0; i < 50; i++) {
      leaves.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 2 - 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    function drawLeaf(x: number, y: number, size: number, rotation: number, color: string) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.fillStyle = color;
      
      ctx.beginPath();
      ctx.moveTo(0, -size/2);
      ctx.quadraticCurveTo(size/2, -size/4, size/2, 0);
      ctx.quadraticCurveTo(size/2, size/4, 0, size/2);
      ctx.quadraticCurveTo(-size/2, size/4, -size/2, 0);
      ctx.quadraticCurveTo(-size/2, -size/4, 0, -size/2);
      ctx.fill();
      
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      leaves.forEach(leaf => {
        drawLeaf(leaf.x, leaf.y, leaf.size, leaf.rotation, leaf.color);
        
        leaf.y += leaf.speed;
        leaf.x += Math.sin(leaf.y / 50) * 0.5;
        leaf.rotation += leaf.rotationSpeed;
        
        if (leaf.y > canvas.height + leaf.size) {
          leaf.y = -leaf.size;
          leaf.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}