// Helper function to draw Santa's sleigh and reindeer
export function drawSanta(ctx: CanvasRenderingContext2D, x: number, y: number) {
  // Save context state
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(-1, 1); // Flip horizontally to move right to left

  // Draw reindeer team
  const reindeerCount = 8; // Increased number of reindeer
  for (let i = 0; i < reindeerCount; i++) {
    const isRudolph = i === 0;
    drawReindeer(ctx, i * 80, -i * 5, isRudolph);
  }

  // Draw sleigh behind last reindeer
  drawSleigh(ctx, reindeerCount * 80 - 20, 10);

  // Restore context state
  ctx.restore();
}

function drawReindeer(ctx: CanvasRenderingContext2D, x: number, y: number, isRudolph: boolean) {
  // Body
  ctx.fillStyle = '#4A2F1B';
  ctx.beginPath();
  ctx.ellipse(x + 30, y + 15, 30, 18, 0, 0, Math.PI * 2);
  ctx.fill();

  // Legs with hooves
  const legPositions = [[15, 25], [45, 25], [20, 30], [40, 30]];
  ctx.lineWidth = 3;
  legPositions.forEach(([legX, legY]) => {
    // Leg
    ctx.strokeStyle = '#4A2F1B';
    ctx.beginPath();
    ctx.moveTo(x + legX, y + legY);
    ctx.lineTo(x + legX, y + legY + 12);
    ctx.stroke();

    // Hoof
    ctx.fillStyle = '#2A1810';
    ctx.beginPath();
    ctx.ellipse(x + legX, y + legY + 14, 4, 3, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  // Head
  ctx.beginPath();
  ctx.ellipse(x + 60, y + 5, 14, 10, Math.PI / 6, 0, Math.PI * 2);
  ctx.fill();

  // Detailed antlers
  drawDetailedAntlers(ctx, x + 60, y);

  // Harness
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 10, y + 15);
  ctx.lineTo(x + 50, y + 15);
  ctx.stroke();

  // Rudolph's nose
  if (isRudolph) {
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(x + 70, y + 8, 4, 0, Math.PI * 2);
    ctx.fill();

    // Nose glow effect
    const gradient = ctx.createRadialGradient(x + 70, y + 8, 0, x + 70, y + 8, 8);
    gradient.addColorStop(0, 'rgba(255, 0, 0, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x + 70, y + 8, 8, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawDetailedAntlers(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.strokeStyle = '#2A1810';
  ctx.lineWidth = 2;

  // Left antler
  ctx.beginPath();
  ctx.moveTo(x, y - 5);
  ctx.lineTo(x - 5, y - 15);
  ctx.lineTo(x - 10, y - 10);
  ctx.moveTo(x - 5, y - 15);
  ctx.lineTo(x, y - 20);
  ctx.stroke();

  // Right antler
  ctx.beginPath();
  ctx.moveTo(x + 5, y - 5);
  ctx.lineTo(x + 10, y - 15);
  ctx.lineTo(x + 15, y - 10);
  ctx.moveTo(x + 10, y - 15);
  ctx.lineTo(x + 5, y - 20);
  ctx.stroke();
}

function drawSleigh(ctx: CanvasRenderingContext2D, x: number, y: number) {
  // Sleigh body with ornate design
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.moveTo(x, y + 20);
  ctx.bezierCurveTo(x + 20, y + 15, x + 40, y + 15, x + 60, y + 20);
  ctx.lineTo(x + 50, y + 45);
  ctx.lineTo(x - 10, y + 45);
  ctx.closePath();
  ctx.fill();

  // Gold trim
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x - 5, y + 25);
  ctx.bezierCurveTo(x + 15, y + 20, x + 35, y + 20, x + 55, y + 25);
  ctx.stroke();

  // Decorative scrollwork
  drawScrollwork(ctx, x + 25, y + 30);

  // Sleigh runners
  ctx.strokeStyle = '#4A4A4A';
  ctx.lineWidth = 3;
  drawRunner(ctx, x - 10, y + 45);
  drawRunner(ctx, x + 50, y + 45);

  // Draw Santa
  drawSantaFigure(ctx, x + 25, y + 15);
}

function drawScrollwork(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 1;
  
  // Spiral pattern
  ctx.beginPath();
  for (let i = 0; i < Math.PI * 2; i += 0.5) {
    const radius = 5 - i / 2;
    ctx.lineTo(
      x + Math.cos(i) * radius,
      y + Math.sin(i) * radius
    );
  }
  ctx.stroke();
}

function drawRunner(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.quadraticCurveTo(x - 5, y + 5, x, y + 10);
  ctx.quadraticCurveTo(x + 5, y + 5, x, y);
  ctx.stroke();
}

function drawSantaFigure(ctx: CanvasRenderingContext2D, x: number, y: number) {
  // Body in red coat
  ctx.fillStyle = '#FF0000';
  ctx.beginPath();
  ctx.ellipse(x, y, 15, 20, 0, 0, Math.PI * 2);
  ctx.fill();

  // White fur trim
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(x, y - 5, 15, Math.PI * 1.8, Math.PI * 0.2);
  ctx.fill();

  // Belt
  ctx.fillStyle = '#000000';
  ctx.fillRect(x - 10, y + 5, 20, 3);
  
  // Belt buckle
  ctx.fillStyle = '#FFD700';
  ctx.fillRect(x - 3, y + 4, 6, 5);

  // Hat
  ctx.fillStyle = '#FF0000';
  ctx.beginPath();
  ctx.moveTo(x - 10, y - 15);
  ctx.lineTo(x, y - 30);
  ctx.lineTo(x + 10, y - 15);
  ctx.closePath();
  ctx.fill();

  // Hat fur trim
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.ellipse(x, y - 15, 10, 3, 0, 0, Math.PI * 2);
  ctx.fill();

  // Hat pom-pom
  ctx.beginPath();
  ctx.arc(x, y - 30, 4, 0, Math.PI * 2);
  ctx.fill();
}

// Helper function to draw and update snow particles
export function drawSnow(
  ctx: CanvasRenderingContext2D,
  particles: Array<{
    x: number;
    y: number;
    radius: number;
    speed: number;
    wind: number;
  }>,
  width: number,
  height: number
) {
  ctx.shadowBlur = 2;
  ctx.shadowColor = 'white';

  particles.forEach(particle => {
    // Draw snowflake
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();

    // Update position
    particle.y += particle.speed;
    particle.x += particle.wind;

    // Reset particle if it goes off screen
    if (particle.y > height) {
      particle.y = -10;
      particle.x = Math.random() * width;
    }
    if (particle.x > width) {
      particle.x = 0;
    } else if (particle.x < 0) {
      particle.x = width;
    }
  });

  ctx.shadowBlur = 0;
}