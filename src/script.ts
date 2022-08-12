import { animationStates } from './data/animationState';
import { Frame } from './interfaces/Frame';
import { Position } from './interfaces/Position';
import { SpriteAnimation } from './interfaces/SpriteAnimation';

let playerState = 'idle';
const dropdown = document.querySelector<HTMLSelectElement>('#animations')!;
const canvas = document.querySelector<HTMLCanvasElement>('#canvas1')!;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

dropdown.addEventListener('change', e => {
  const target = e.target as HTMLSelectElement;
  playerState = target.value;
});
// By default the canvas is set to 300X500px
const CANVAS_WIDTH: number = (canvas.width = 600);
const CANVAS_HEIGHT: number = (canvas.height = 600);

/**
 * Sprite image width is 6876px and 12 columns
 * Sprite width 6876/12 = 573px ~575px with the margin
 * Sprite image height is 5230px and 10 columns
 * Sprite height 5230/10 = 523px
 */
const playerImage = new Image();
playerImage.src = './src/assets/images/shadow_dog.png';
const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;

let gameFrame = 0;
let staggerFrame = 5; // Set the sprite animation speed

const spriteAnimations: SpriteAnimation[] = [];

// Get frames positions
animationStates.forEach((state, index) => {
  let frames: Frame = {
    location: []
  };

  for (let i = 0; i < state.frames; i++) {
    let positionX = i * SPRITE_WIDTH;
    let positionY = index * SPRITE_HEIGHT;
    let position: Position = { x: positionX, y: positionY };

    frames.location.push(position);
    spriteAnimations[state.name] = frames;
  }
});

const animateSprite = () => {
  // The canvas is cleared after each frame
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position =
    Math.floor(gameFrame / staggerFrame) %
    spriteAnimations[playerState].location.length;
  let frameX = spriteAnimations[playerState].location[position].x;
  let frameY = spriteAnimations[playerState].location[position].y;

  // ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    SPRITE_WIDTH,
    SPRITE_HEIGHT,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );

  gameFrame++;
  requestAnimationFrame(animateSprite);
};

animateSprite();
