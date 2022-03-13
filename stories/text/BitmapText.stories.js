import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";
import { BitmapText } from "pixi.js";

export default {
  title: "Text/Text",
  argTypes: {
    text: { control: "text" },
    align: {
      options: ["left", "center", "right"],
      control: {
        type: "radio",
      },
    },
  },
};

export const BitmapFont = (args) => {
  const text = new BitmapText(args.text, {
    fontName: "Eurostile80",
    align: args.align,
  });
  text.position.x = viewport.screenWidth / 2;
  text.position.y = viewport.screenHeight / 2;
  viewport.addChild(text);

  return canvas;
};
BitmapFont.args = {
  text: "Hello\nWorld",
  align: "left",
};
