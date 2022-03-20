import * as PIXI from "pixi.js";
import "@pixi/graphics-extras";
import { canvas, viewport } from "../Scene";
import { GeometryUtils } from "../../src/utils/GeometryUtils";
import { parseColor } from "../../src/utils/ColorUtils";

export default {
  title: "Graphics/Shapes",
  argTypes: {
    stroke: { control: { type: "range", min: 0, max: 5, step: 0.1 } },
    color: { control: "color" },
    fill: { control: "color" },
    innerRadius: { control: { type: "range", min: 1, max: 100, step: 1 } },
    outerRadius: { control: { type: "range", min: 1, max: 100, step: 1 } },
    startArc: { control: { type: "range", min: 0, max: 360, step: 1 } },
    endArc: { control: { type: "range", min: 0, max: 360, step: 1 } },
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
    GeometryUtils.deg2rad(startArc),
    GeometryUtils.deg2rad(endArc)
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
