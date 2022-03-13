import * as PIXI from "pixi.js";
import "@pixi/graphics-extras";
import { canvas, viewport } from "../Scene";
import { GeometryUtils } from "../../src/utils/GeometryUtils";
import { parseColor } from "../../src/utils/ColorUtils";

export default {
  title: "Graphics/Shapes",
  argTypes: {
    stroke: { control: "number" },
    color: { control: "color" },
    fill: { control: "color" },
    radius: { control: "number" },
    sides: { control: "number" },
    rotation: { control: "number" },
  },
};

export const RegularPolygon = ({
  stroke,
  color,
  fill,
  radius,
  sides,
  rotation,
}) => {
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(stroke, parseColor(color));
  graphics.beginFill(parseColor(fill));

  graphics.drawRegularPolygon(
    viewport.screenWidth / 2,
    viewport.screenHeight / 2,
    radius,
    sides,
    GeometryUtils.deg2rad(rotation)
  );

  viewport.addChild(graphics);

  return canvas;
};
RegularPolygon.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  radius: 50,
  sides: 5,
  rotation: 0,
};
