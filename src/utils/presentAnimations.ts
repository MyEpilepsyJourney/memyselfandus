// Present types with enhanced 4K-ready designs and more colors
const presentTypes = [
  {
    color: '#FF0000', // Bright Red
    ribbonColor: '#FFD700', // Gold
    patternColor: '#FF3333', // Lighter red for pattern
    size: 60,
    pattern: 'stripes'
  },
  {
    color: '#006400', // Dark Green
    ribbonColor: '#FFFFFF', // White
    patternColor: '#008000', // Lighter green for pattern
    size: 50,
    pattern: 'dots'
  },
  {
    color: '#000080', // Navy Blue
    ribbonColor: '#C0C0C0', // Silver
    patternColor: '#0000FF', // Bright blue for pattern
    size: 70,
    pattern: 'stars'
  },
  {
    color: '#800080', // Purple
    ribbonColor: '#FFD700', // Gold
    patternColor: '#9932CC', // Lighter purple for pattern
    size: 55,
    pattern: 'dots'
  },
  {
    color: '#FF69B4', // Hot Pink
    ribbonColor: '#FFFFFF', // White
    patternColor: '#FF1493', // Deep pink for pattern
    size: 45,
    pattern: 'stars'
  },
  {
    color: '#4B0082', // Indigo
    ribbonColor: '#C0C0C0', // Silver
    patternColor: '#6A5ACD', // Slate blue for pattern
    size: 65,
    pattern: 'stripes'
  },
  {
    color: '#FF8C00', // Dark Orange
    ribbonColor: '#FFD700', // Gold
    patternColor: '#FFA500', // Orange for pattern
    size: 50,
    pattern: 'stars'
  },
  {
    color: '#008080', // Teal
    ribbonColor: '#FFFFFF', // White
    patternColor: '#20B2AA', // Light sea green for pattern
    size: 55,
    pattern: 'dots'
  }
];

interface Present {
  x: number;
  y: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  type: typeof presentTypes[number];
}

export function createPresent(canvasWidth: number): Present {
  return {
    x: Math.random() * canvasWidth,
    y: -50,
    speed: Math.random() * 2 + 1,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 2,
    type: presentTypes[Math.floor(Math.random() * presentTypes.length)]
  };
}

export function drawPresent(ctx: CanvasRenderingContext2D, present: Present) {
  ctx.save();
  ctx.translate(present.x, present.y);
  ctx.rotate((present.rotation * Math.PI) / 180);

  const { size } = present.type;
  const halfSize = size / 2;

  // Draw main box
  ctx.fillStyle = present.type.color;
  ctx.fillRect(-halfSize, -halfSize, size, size);

  // Draw pattern
  ctx.fillStyle = present.type.patternColor;
  if (present.type.pattern === 'dots') {
    drawDots(ctx, size, halfSize);
  } else if (present.type.pattern === 'stars') {
    drawStars(ctx, size, halfSize);
  } else {
    drawStripes(ctx, size, halfSize);
  }

  // Draw ribbon
  ctx.fillStyle = present.type.ribbonColor;
  // Vertical ribbon
  ctx.fillRect(-size/6, -halfSize, size/3, size);
  // Horizontal ribbon
  ctx.fillRect(-halfSize, -size/6, size, size/3);
  
  // Draw bow
  drawBow(ctx, 0, 0, size/3, present.type.ribbonColor);

  ctx.restore();
}

function drawDots(ctx: CanvasRenderingContext2D, size: number, halfSize: number) {
  const dotSize = size / 10;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if ((i + j) % 2 === 0) {
        ctx.beginPath();
        ctx.arc(
          -halfSize + size/4 + (i * size/5),
          -halfSize + size/4 + (j * size/5),
          dotSize,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  }
}

function drawStars(ctx: CanvasRenderingContext2D, size: number, halfSize: number) {
  const starSize = size / 10;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      drawStar(
        ctx,
        -halfSize + size/3 + (i * size/3),
        -halfSize + size/3 + (j * size/3),
        5,
        starSize,
        starSize/2
      );
    }
  }
}

function drawStripes(ctx: CanvasRenderingContext2D, size: number, halfSize: number) {
  const stripeWidth = size / 8;
  for (let i = 0; i < size; i += stripeWidth * 2) {
    ctx.fillRect(-halfSize + i, -halfSize, stripeWidth, size);
  }
}

function drawStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  spikes: number,
  outerRadius: number,
  innerRadius: number
) {
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
}

function drawBow(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string
) {
  ctx.fillStyle = color;
  
  // Left loop
  ctx.beginPath();
  ctx.ellipse(x - size/2, y, size/2, size/3, Math.PI/4, 0, Math.PI * 2);
  ctx.fill();
  
  // Right loop
  ctx.beginPath();
  ctx.ellipse(x + size/2, y, size/2, size/3, -Math.PI/4, 0, Math.PI * 2);
  ctx.fill();
  
  // Center knot
  ctx.beginPath();
  ctx.ellipse(x, y, size/4, size/4, 0, 0, Math.PI * 2);
  ctx.fill();
}

export function updatePresent(present: Present, canvasHeight: number, canvasWidth: number) {
  present.y += present.speed;
  present.rotation += present.rotationSpeed;
  
  if (present.y > canvasHeight + present.type.size) {
    present.y = -present.type.size;
    present.x = Math.random() * canvasWidth;
  }
}

export function drawSparkle(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const size = 4;
  ctx.fillStyle = '#FFD700';
  
  // Draw a sparkle shape (cross with diagonal lines)
  ctx.beginPath();
  // Vertical line
  ctx.moveTo(x, y - size);
  ctx.lineTo(x, y + size);
  // Horizontal line
  ctx.moveTo(x - size, y);
  ctx.lineTo(x + size, y);
  // Diagonal lines
  ctx.moveTo(x - size/2, y - size/2);
  ctx.lineTo(x + size/2, y + size/2);
  ctx.moveTo(x - size/2, y + size/2);
  ctx.lineTo(x + size/2, y - size/2);
  
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 1;
  ctx.stroke();
}