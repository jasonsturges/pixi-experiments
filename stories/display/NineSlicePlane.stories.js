import { canvas, viewport } from "../Scene";
import { NineSlicePlane, Texture } from "pixi.js";

export default {
  title: "Display/9-Slice Plane",
  argTypes: {
    width: { control: { type: "range", min: 1, max: 1024, step: 1 } },
    height: { control: { type: "range", min: 1, max: 1024, step: 1 } },
    leftWidth: { control: { type: "range", min: 1, max: 256, step: 1 } },
    topHeight: { control: { type: "range", min: 1, max: 256, step: 1 } },
    rightWidth: { control: { type: "range", min: 1, max: 256, step: 1 } },
    bottomHeight: { control: { type: "range", min: 1, max: 256, step: 1 } },
  },
};

export const Plane = ({
  width,
  height,
  leftWidth,
  rightWidth,
  topHeight,
  bottomHeight,
}) => {
  const plane = new NineSlicePlane(
    Texture.from("images/checkerboard.png"),
    leftWidth,
    topHeight,
    rightWidth,
    bottomHeight
  );
  plane.width = width;
  plane.height = height;
  viewport.addChild(plane);

  return canvas;
};
Plane.args = {
  width: 1024,
  height: 1024,
  leftWidth: 128,
  topHeight: 128,
  rightWidth: 128,
  bottomHeight: 128,
};
