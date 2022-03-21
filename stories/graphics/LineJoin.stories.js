import { canvas, viewport } from "../Scene";
import "@pixi/graphics-extras";
import { Graphics, LINE_JOIN, Point, Text } from "pixi.js";
import { GeometryUtils } from "../../src/utils/GeometryUtils";
import { parseColor } from "pixi-graphpaper";

export default {
  title: "Graphics/Lines",
  argTypes: {
    alignment: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    angle: { control: { type: "range", min: 0, max: 360, step: 1 } },
    color: { control: "color" },
    miterLimit: { control: { type: "range", min: 0, max: 120, step: 0.11 } },
    stroke: { control: { type: "range", min: 0.1, max: 20, step: 0.1 } },
  },
};

const drawSymbol = (graphics, x, y, angle, cap) => {
  const radius = 50;
  const p = new Point(x, y + 135);
  const p1 = new Point(
    p.x + radius * Math.cos(GeometryUtils.deg2rad(angle / 2 - 90)),
    p.y + radius * Math.sin(GeometryUtils.deg2rad(angle / 2 - 90))
  );

  const p2 = new Point(
    p.x + radius * Math.cos(GeometryUtils.deg2rad(-angle / 2 - 90)),
    p.y + radius * Math.sin(GeometryUtils.deg2rad(-angle / 2 - 90))
  );

  graphics.moveTo(p1.x, p1.y);
  graphics.lineTo(p.x, p.y);
  graphics.lineTo(p2.x, p2.y);

  graphics.drawRegularPolygon(x, y, 25, 3);

  const text = new Text(cap, {
    fontFamily: "Arial",
    fontSize: 18,
    fill: 0xffffff,
    align: "center",
  });
  text.resolution = 8;
  text.anchor.set(0.5);
  text.x = x;
  text.y = y + 50;
  viewport.addChild(text);
};

export const Join = ({ alignment, angle, color, miterLimit, stroke }) => {
  const graphics = new Graphics();
  viewport.addChild(graphics);

  graphics.lineStyle({
    width: stroke,
    alignment: alignment,
    color: parseColor(color),
    miterLimit: miterLimit,
    join: LINE_JOIN.BEVEL,
  });
  drawSymbol(graphics, 100, 100, angle, "Bevel");

  graphics.lineStyle({
    width: stroke,
    alignment: alignment,
    color: parseColor(color),
    miterLimit: miterLimit,
    join: LINE_JOIN.MITER,
  });
  drawSymbol(graphics, 200, 100, angle, "Miter");

  graphics.lineStyle({
    width: stroke,
    alignment: alignment,
    color: parseColor(color),
    miterLimit: miterLimit,
    join: LINE_JOIN.ROUND,
  });
  drawSymbol(graphics, 300, 100, angle, "Round");

  return canvas;
};
Join.args = {
  color: "#ffffff",
  stroke: 5,
  alignment: 0.5,
  angle: 45,
  miterLimit: 10,
};
