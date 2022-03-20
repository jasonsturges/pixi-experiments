import * as PIXI from "pixi.js";
import { SCALE_MODES } from "pixi.js";
import { canvas, viewport } from "../Scene";

export default {
  title: "Texture/Scale Modes",
  argTypes: {
    scaleMode: {
      options: SCALE_MODES,
      control: {
        type: "radio",
      },
    },
  },
};

export const ScaleMode = ({ scaleMode }) => {
  const bunny = PIXI.Sprite.from("images/bunny.png");
  bunny.x = viewport.screenWidth / 2;
  bunny.y = viewport.screenHeight / 2;
  viewport.addChild(bunny);

  bunny.texture.baseTexture.scaleMode = scaleMode;

  return canvas;
};
ScaleMode.args = {
  scaleMode: SCALE_MODES.NEAREST,
};
