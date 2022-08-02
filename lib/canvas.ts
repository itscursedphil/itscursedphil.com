export const initialize = (): CanvasRenderingContext2D => {
  const canvas = document.getElementById('background') as HTMLCanvasElement;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext('2d');

  if (!ctx) throw new Error('Canvas context could not be found in DOM');

  return ctx;
};

const drawRandomPixel = (ctx: CanvasRenderingContext2D) => {
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;

  const posX = Math.floor(Math.random() * (winWidth / 6)) * 6;
  const posY = Math.floor(Math.random() * (winHeight / 6)) * 6;

  const shade = Math.random() > 0.5 ? 255 : 0;

  ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
  ctx.fillRect(posX, posY, 6, 6);
};

export const draw = (ctx: CanvasRenderingContext2D, init = false) => {
  const amount = Math.floor(Math.random() * 8) - 2;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < amount; i++) {
    drawRandomPixel(ctx);
  }

  requestAnimationFrame(() => draw(ctx));
};
