const drawRandomPixel = (ctx: CanvasRenderingContext2D) => {
  const canvasWidth = ctx.canvas.clientWidth;
  const canvasHeight = ctx.canvas.clientHeight;

  const posX = Math.floor(Math.random() * (canvasWidth / 6)) * 6;
  const posY = Math.floor(Math.random() * (canvasHeight / 6)) * 6;

  const shade = Math.random() > 0.5 ? 255 : 0;

  ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
  ctx.fillRect(posX, posY, 6, 6);
};

const draw = (ctx: CanvasRenderingContext2D): void => {
  const amount = Math.floor(Math.random() * 8) - 2;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < amount; i++) {
    drawRandomPixel(ctx);
  }
};

export default draw;
