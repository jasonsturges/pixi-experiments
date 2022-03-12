import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";
import { drawPolygon } from "../../src/components/Polygon";
import { parseColor } from "../../src/utils/ColorUtils";

export default {
  title: "Drawing/Shapes/Polygon",
  argTypes: {
    stroke: { control: "number" },
    color: { control: "color" },
    fill: { control: "color" },
    sides: { control: "number" },
    radius: { control: "number" },
    angle: { control: "number" },
  },
};

export const Polygon = ({ stroke, color, fill, sides, radius, angle }) => {
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(stroke, parseColor(color));
  graphics.beginFill(parseColor(fill));
  drawPolygon(
    graphics,
    viewport.screenWidth / 2,
    viewport.screenHeight / 2,
    sides,
    radius,
    angle
  );

  viewport.addChild(graphics);

  return canvas;
};
Polygon.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 10,
  radius: 50,
  angle: 0,
};

const Template = ({ stroke, color, fill, sides, radius, angle }) => {
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(stroke, parseColor(color));
  graphics.beginFill(parseColor(fill));
  drawPolygon(
    graphics,
    viewport.screenWidth / 2,
    viewport.screenHeight / 2,
    sides,
    radius,
    angle
  );

  viewport.addChild(graphics);

  return canvas;
};

export const Triangle = Template.bind({});
Triangle.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 3,
  radius: 50,
  angle: 0,
};

export const Square = Template.bind({});
Square.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 4,
  radius: 50,
  angle: 0,
};

export const Pentagon = Template.bind({});
Pentagon.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 5,
  radius: 50,
  angle: 0,
};

export const Hexagon = Template.bind({});
Hexagon.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 6,
  radius: 50,
  angle: 0,
};

export const Heptagon = Template.bind({});
Heptagon.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 7,
  radius: 50,
  angle: 0,
};

export const Octagon = Template.bind({});
Octagon.args = {
  stroke: 2,
  color: "#cfefff",
  fill: "#036191",
  sides: 8,
  radius: 50,
  angle: 0,
};
