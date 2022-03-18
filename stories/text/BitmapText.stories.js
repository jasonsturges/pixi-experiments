import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";
import { parseColor } from "pixi-graphpaper";

export default {
  title: "Text/Bitmap Text",
  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
    align: {
      options: ["left", "center", "right"],
      control: {
        type: "radio",
      },
    },
  },
};

/**
 * Use custom "Eurostile" font (loaded from Scene loader)
 */
export const BitmapFont = (args) => {
  const text = new PIXI.BitmapText(args.text, {
    fontName: "Eurostile80",
    align: args.align,
    strokeThickness: 8,
  });
  text.tint = parseColor(args.color);
  text.position.x = viewport.screenWidth / 2;
  text.position.y = viewport.screenHeight / 2;
  viewport.addChild(text);

  return canvas;
};
BitmapFont.args = {
  text: "Hello\nWorld",
  color: "#ffffff",
  align: "left",
};
