import * as PIXI from "pixi.js";
import "@pixi/graphics-extras";
import { canvas, viewport } from "../Scene";
import { parseColor } from "../../src/utils/ColorUtils";

export default {
  title: "Graphics/Shapes",
  argTypes: {
    stroke: { control: { type: "range", min: 0, max: 5, step: 0.1 } },
    color: { control: "color" },
    fill: { control: "color" },
    width: { control: { type: "range", min: 1, max: 100, step: 1 } },
    height: { control: { type: "range", min: 1, max: 100, step: 1 } },
    radius: { control: { type: "range", min: 1, max: 50, step: 1 } },
  },
};

export const RoundedRect = ({ stroke, color, fill, width, height, radius }) => {
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(stroke, parseColor(color));
  graphics.beginFill(parseColor(fill));

  graphics.drawRoundedRect(
    viewport.screenWidth / 2 - width / 2,
    viewport.screenHeight / 2 - height / 2,
    width,
    height,
    radius
  );

  viewport.addChild(graphics);

  return canvas;
};
RoundedRect.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  width: 100,
  height: 100,
  radius: 15,
};
