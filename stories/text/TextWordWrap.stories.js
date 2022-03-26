import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";
import { parseColor } from "pixi-graphpaper";

export default {
  title: "Text/Text",
  argTypes: {
    text: { control: "text" },
    fontFamily: { control: "text" },
    fontSize: { control: { type: "range", min: 1, max: 124, step: 1 } },
    lineHeight: { control: { type: "range", min: 1, max: 124, step: 1 } },
    resolution: { control: { type: "range", min: 1, max: 8, step: 1 } },
    color: { control: "color" },
    wordWrap: { control: "boolean" },
    wordWrapWidth: { control: { type: "range", min: 1, max: 512, step: 1 } },
    align: {
      options: ["left", "center", "right"],
      control: {
        type: "radio",
      },
    },
  },
};

export const WordWrap = (args) => {
  const textStyle = new PIXI.TextStyle({
    fontFamily: args.fontFamily,
    fontSize: args.fontSize,
    lineHeight: args.lineHeight,
    fill: parseColor(args.color),
    wordWrap: args.wordWrap,
    wordWrapWidth: args.wordWrapWidth,
    align: args.align,
  });

  const text = new PIXI.Text(args.text, textStyle);
  text.resolution = args.resolution;
  text.anchor.set(0.5);
  text.x = viewport.screenWidth / 2;
  text.y = viewport.screenHeight / 2;

  viewport.addChild(text);

  return canvas;
};
WordWrap.args = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  fontFamily: "Arial",
  fontSize: 24,
  lineHeight: 28,
  resolution: 8,
  color: "#ffffff",
  wordWrap: true,
  wordWrapWidth: 256,
  align: "center",
};
