import * as PIXI from "pixi.js";
import "@pixi/graphics-extras";
import { canvas, viewport } from "../Scene";
import { parseColor } from "../../src/utils/ColorUtils";

export default {
  title: "Graphics/Shapes",
  argTypes: {
    stroke: { control: "number" },
    color: { control: "color" },
    fill: { control: "color" },
    radius: { control: "number" },
    sides: { control: "number" },
    corner: { control: "number" },
    rotation: { control: "number" },
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
    rotation
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