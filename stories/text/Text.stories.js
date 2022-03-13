import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";

export default {
  title: "Text/Text",
  argTypes: {
    text: { control: "text" },
    fontFamily: { control: "text" },
    fontSize: { control: "number" },
    resolution: { control: "number" },
    align: {
      options: ["left", "center", "right"],
      control: {
        type: "radio",
      },
    },
  },
};

export const TextStyle = (args) => {
  const textStyle = new PIXI.TextStyle({
    fontFamily: args.fontFamily,
    fontSize: args.fontSize,
    fill: 0xffffff,
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
TextStyle.args = {
  text: "Hello, World\n😀",
  fontFamily: "Arial",
  fontSize: 24,
  resolution: 8,
  align: "center",
};
