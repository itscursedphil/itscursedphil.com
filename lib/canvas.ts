import drawWeaver from './generators/weaver';

export const initialize = (): CanvasRenderingContext2D => {
  const canvas = document.getElementById('background') as HTMLCanvasElement;
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  const ctx = canvas.getContext('2d');

  if (!ctx) throw new Error('Canvas context could not be found in DOM');

  return ctx;
};

export const resize = (ctx: CanvasRenderingContext2D): void => {
  const { canvas } = ctx;
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

export const draw = (ctx: CanvasRenderingContext2D): void => {
  drawWeaver(ctx);

  requestAnimationFrame(() => draw(ctx));
};
