import { canvas, viewport } from "../Scene";
import { Anchor } from "../../src/display/Anchor";
import { Graphics } from "pixi.js";
import { parseColor } from "pixi-graphpaper";

export default {
  title: "Graphics/Lines",
  argTypes: {
    alignment: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    color: { control: "color" },
    cx1: { control: { type: "range", min: 0, max: 200, step: 1 } },
    cx2: { control: { type: "range", min: 0, max: 200, step: 1 } },
    cy1: { control: { type: "range", min: 0, max: 200, step: 1 } },
    cy2: { control: { type: "range", min: 0, max: 200, step: 1 } },
    x1: { control: { type: "range", min: 0, max: 200, step: 1 } },
    x2: { control: { type: "range", min: 0, max: 200, step: 1 } },
    y1: { control: { type: "range", min: 0, max: 200, step: 1 } },
    y2: { control: { type: "range", min: 0, max: 200, step: 1 } },
    stroke: { control: { type: "range", min: 0.1, max: 20, step: 0.1 } },
  },
};

function addAnchor(x, y) {
  const anchor = new Anchor();
  anchor.position.set(x, y);
  anchor.text = `${x}, ${y}`;
  viewport.addChild(anchor);
}

export const BezierCurve = ({
  alignment,
  color,
  stroke,
  cx1,
  cy1,
  cx2,
  cy2,
  x1,
  x2,
  y1,
  y2,
}) => {
  const graphics = new Graphics();
  viewport.addChild(graphics);

  graphics.lineStyle({
    width: stroke,
    alignment: alignment,
    color: parseColor(color),
  });

  graphics.moveTo(x1, y1);
  graphics.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);

  addAnchor(x1, y1);
  addAnchor(cx1, cy1);
  addAnchor(cx2, cy2);
  addAnchor(x2, y2);

  return canvas;
};
BezierCurve.args = {
  color: "#ffffff",
  stroke: 5,
  alignment: 0.5,
  x1: 0,
  y1: 0,
  cx1: 100,
  cy1: 0,
  cx2: 200,
  cy2: 100,
  x2: 200,
  y2: 200,
};
