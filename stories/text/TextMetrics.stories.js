import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";
import { GraphPaper, GraphStyle, parseColor } from "pixi-graphpaper";

export default {
  title: "Text/Metrics",
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

export const Measure = (args) => {
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

  const metrics = PIXI.TextMetrics.measureText(args.text, text.style);
  const paper = new GraphPaper(GraphStyle.BLUEPRINT);
  paper.graphWidth = metrics.width;
  paper.graphHeight = metrics.height;
  paper.x = (viewport.screenWidth - metrics.width) / 2;
  paper.y = (viewport.screenHeight - metrics.height) / 2;

  viewport.addChild(paper);
  viewport.addChild(text);

  return canvas;
};
Measure.args = {
  text: "ABC",
  fontFamily: "Arial",
  fontSize: 110,
  lineHeight: 128,
  resolution: 8,
  color: "#ffffff",
  wordWrap: false,
  wordWrapWidth: 512,
  align: "center",
};
