const drawLine = (mult: number, ctx: CanvasRenderingContext2D) => {
  const time = Date.now() * 0.0000333;
  const canvasWidth = ctx.canvas.clientWidth;
  const canvasHeight = ctx.canvas.clientHeight;

  const innerRadius = 160;
  const innerX1 = Math.sin(time * (1 + mult * 0.2) + 200 * mult) * innerRadius;
  const innerY1 = Math.cos(time * (1 + mult * 0.2) + 200 * mult) * innerRadius;
  const innerX2 = Math.sin(time * (2 + mult * 0.2) + 400 * mult) * innerRadius;
  const innerY2 = Math.cos(time * (2 + mult * 0.2) + 400 * mult) * innerRadius;

  const a = canvasWidth * 0.5;
  const b = canvasHeight * 0.5;
  const outerRadius = Math.hypot(a, b);
  const outerX1 =
    Math.sin(time * (2 + mult * 0.2)) * (outerRadius + innerRadius);
  const outerY1 =
    Math.cos(time * (2 + mult * 0.2)) * (outerRadius + innerRadius);
  const outerX2 = Math.sin(time + 800 * mult) * (outerRadius + innerRadius);
  const outerY2 = Math.cos(time + 800 * mult) * (outerRadius + innerRadius);

  const x1 = outerX1 + innerX1;
  const y1 = outerY1 + innerY1;
  const x2 = outerX2 + innerX2;
  const y2 = outerY2 + innerY2;

  ctx.beginPath();
  ctx.moveTo(canvasWidth / 2 + x1, canvasHeight / 2 + y1);
  ctx.lineTo(canvasWidth / 2 + x2 * -1.0, canvasHeight / 2 + y2 * -1.0);
  ctx.closePath();
  ctx.stroke();
};

const draw = (ctx: CanvasRenderingContext2D): void => {
  const canvasWidth = ctx.canvas.clientWidth;
  const canvasHeight = ctx.canvas.clientHeight;

  ctx.strokeStyle = 'rgb(255,255,255)';
  ctx.fillStyle = 'rgba(0,0,0,1)';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  for (let i = 0; i < 20; i += 1) {
    drawLine(i, ctx);
  }
};

export default draw;
