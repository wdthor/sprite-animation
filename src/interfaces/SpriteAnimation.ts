import { Frame } from './Frame';

export interface SpriteAnimation {
  bite: Frame;
  dizzy: Frame;
  fall: Frame;
  getHit: Frame;
  idle: Frame;
  jump: Frame;
  ko: Frame;
  roll: Frame;
  run: Frame;
  sit: Frame;
}
