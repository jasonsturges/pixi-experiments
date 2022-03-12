import * as PIXI from "pixi.js";
import "@pixi/graphics-extras";
import { canvas, viewport } from "../Scene";
import { parseColor } from "../../src/utils/ColorUtils";

export default {
  title: "Drawing/Shapes",
  argTypes: {
    stroke: { control: "number" },
    color: { control: "color" },
    fill: { control: "color" },
    innerRadius: { control: "number" },
    outerRadius: { control: "number" },
    startArc: { control: "number" },
    endArc: { control: "number" },
  },
};

export const Torus = ({
  stroke,
  color,
  fill,
  innerRadius,
  outerRadius,
  startArc,
  endArc,
}) => {
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(stroke, parseColor(color));
  graphics.beginFill(parseColor(fill));

  graphics.drawTorus(
    viewport.screenWidth / 2,
    viewport.screenHeight / 2,
    innerRadius,
    outerRadius,
    startArc,
    endArc
  );

  viewport.addChild(graphics);

  return canvas;
};
Torus.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  innerRadius: 25,
  outerRadius: 50,
  startArc: 0,
  endArc: 360,
};
