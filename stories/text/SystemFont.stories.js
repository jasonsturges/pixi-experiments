import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";
import { parseColor } from "pixi-graphpaper";

export default {
  title: "Text/Bitmap Text",
  argTypes: {
    text: { control: "text" },
    font: { control: "text" },
    fontSize: { control: { type: "range", min: 1, max: 128, step: 1 } },
    lineHeight: { control: { type: "range", min: 1, max: 128, step: 1 } },
    color: { control: "color" },
    strokeThickness: { control: { type: "range", min: 0, max: 24, step: 1 } },
    strokeColor: { control: "color" },
    align: {
      options: ["left", "center", "right"],
      control: {
        type: "radio",
      },
    },
    fontStyle: {
      options: ["normal", "italic", "oblique"],
      control: {
        type: "radio",
      },
    },
    fontVariant: {
      options: ["normal", "small-caps"],
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
  PIXI.BitmapFont.from("System-Font", {
    fontFamily: args.font,
    fontSize: args.fontSize,
    fontStyle: args.fontStyle,
    fontVariant: args.fontVariant,
    lineHeight: args.lineHeight,
    stroke: parseColor(args.strokeColor),
    strokeThickness: args.strokeThickness,
    fill: parseColor(args.color),
  });

  const text = new PIXI.BitmapText(args.text, {
    fontName: "System-Font",
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
  fontSize: 72,
  lineHeight: 80,
  color: "#efefef",
  strokeThickness: 1,
  strokeColor: "#8c8c8c",
  align: "center",
  fontStyle: "normal",
  fontVariant: "normal",
};
