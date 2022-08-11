const canvas = document.querySelector<HTMLCanvasElement>('#canvas1')!;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

// By default the canvas is set to 300X500px
const CANVAS_WIDTH: number = (canvas.width = 600);
const CANVAS_Height: number = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = './shadow_dog.png';
let x = 0;

/**
 * When the animation function is called
 * The canvas is cleared (reset)
 */
const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_Height);
  ctx.fillRect(x, 50, 100, 100);
  x++;
  requestAnimationFrame(animate);
};

animate();
