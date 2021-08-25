export const initialize = (): CanvasRenderingContext2D => {
  const canvas = document.getElementById("background") as HTMLCanvasElement;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext("2d");

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
  if (init) {
    const predraw = Math.floor((window.innerWidth * window.innerHeight) / 800);

    console.log(predraw);

    for (var i = 0; i < predraw; i++) {
      drawRandomPixel(ctx);
    }
  }

  drawRandomPixel(ctx);

  requestAnimationFrame(() => draw(ctx));
};
