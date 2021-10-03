import drawWeaver from './generators/weaver';

export const initialize = (): CanvasRenderingContext2D => {
  const canvas = document.getElementById('background') as HTMLCanvasElement;
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  return ctx;
};

export const resizeCanvas = (ctx: CanvasRenderingContext2D): void => {
  const { canvas } = ctx;
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

export const draw = (
  ctx: CanvasRenderingContext2D,
  prevImage?: ImageData
): void => {
  drawWeaver(ctx, prevImage);
  const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);

  requestAnimationFrame(() => draw(ctx, img));
};
