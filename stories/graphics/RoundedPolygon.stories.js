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
    radius: { control: { type: "range", min: 1, max: 100, step: 1 } },
    sides: { control: { type: "range", min: 3, max: 25, step: 1 } },
    corner: { control: { type: "range", min: 1, max: 50, step: 1 } },
    rotation: { control: { type: "range", min: 0, max: 360, step: 1 } },
  },
};

export const RoundedPolygon = ({
  stroke,
  color,
  fill,
  radius,
  sides,
  corner,
  rotation,
}) => {
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(stroke, parseColor(color));
  graphics.beginFill(parseColor(fill));

  graphics.drawRoundedPolygon(
    viewport.screenWidth / 2,
    viewport.screenHeight / 2,
    radius,
    sides,
    corner,
    GeometryUtils.deg2rad(rotation)
  );

  viewport.addChild(graphics);

  return canvas;
};
RoundedPolygon.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  radius: 50,
  sides: 5,
  corner: 10,
  rotation: 0,
};
