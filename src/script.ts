const canvas = document.querySelector<HTMLCanvasElement>('#canvas1')!;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

// By default the canvas is set to 300X500px
const CANVAS_WIDTH: number = (canvas.width = 600);
const CANVAS_HEIGHT: number = (canvas.height = 600);

/**
 * Image width is 6876px and 12 columns
 * Sprite width 6876/12 = 573px ~575px with the margin
 * Image height is 5230px and 10 columns
 * Sprite height 5230/10 = 523px
 */
const playerImage = new Image();
playerImage.src = './src/assets/images/shadow_dog.png';
const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;

let frameX = 1;
let frameY = 1;

/**
 * When the animation function is called
 * The canvas is cleared (reset)
 */
const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.fillRect(50, 50, 100, 100);
  // ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.drawImage(
    playerImage,
    frameX * SPRITE_WIDTH,
    frameY * SPRITE_HEIGHT,
    SPRITE_WIDTH,
    SPRITE_HEIGHT,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
  requestAnimationFrame(animate);
};

animate();
