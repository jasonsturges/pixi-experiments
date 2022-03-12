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
  const logo = PIXI.Sprite.from("images/logo.svg");
  logo.anchor.set(0.5, 0.5);
  logo.x = viewport.screenWidth / 2;
  logo.y = viewport.screenHeight / 2;
  viewport.addChild(logo);

  logo.texture.baseTexture.scaleMode = scaleMode;

  return canvas;
};
ScaleMode.args = {
  scaleMode: SCALE_MODES.LINEAR,
};
