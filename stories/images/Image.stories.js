import { canvas, viewport } from "../Scene";
import { Sprite } from "pixi.js";

export default {
  title: "Images/Types",
};

export const PNG = () => {
  const png = Sprite.from("images/checkerboard.png");
  png.anchor.set(0.5, 0.5);
  png.x = viewport.screenWidth / 2;
  png.y = viewport.screenHeight / 2;
  viewport.addChild(png);

  return canvas;
};

export const SVG = () => {
  const svg = Sprite.from("images/logo.svg");
  svg.anchor.set(0.5, 0.5);
  svg.x = viewport.screenWidth / 2;
  svg.y = viewport.screenHeight / 2;
  viewport.addChild(svg);

  return canvas;
};
