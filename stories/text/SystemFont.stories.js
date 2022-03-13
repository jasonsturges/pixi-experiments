import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";

export default {
  title: "Text/Bitmap Text",
  argTypes: {
    text: { control: "text" },
    font: { control: "text" },
    align: {
      options: ["left", "center", "right"],
      control: {
        type: "radio",
      },
    },
  },
};

/**
 * Generate Bitmap Font from Times system
 */
export const SystemFont = (args) => {
  PIXI.BitmapFont.from("TimesSystem", {
    fontFamily: args.font,
    fontSize: 72,
    strokeThickness: 1,
    fill: "0xefefef",
  });

  const text = new PIXI.BitmapText(args.text, {
    fontName: "TimesSystem",
    align: args.align,
  });

  text.position.x = viewport.screenWidth / 2;
  text.position.y = viewport.screenHeight / 2;
  viewport.addChild(text);

  return canvas;
};
SystemFont.args = {
  text: "Hello\nWorld",
  font: "Times",
  align: "left",
};
