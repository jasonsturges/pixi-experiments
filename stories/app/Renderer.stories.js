import * as PIXI from "pixi.js";
import { app, canvas, viewport } from "../Scene";
import { parseColor } from "../../src/utils/ColorUtils";

export default {
  title: "App/Renderer",
  argTypes: {
    color: { control: "color" },
  },
};

export const BackgroundColor = ({ color }) => {
  app.renderer.backgroundColor = parseColor(color);

  const logo = PIXI.Sprite.from("images/logo.svg");
  logo.anchor.set(0.5, 0.5);
  logo.x = viewport.screenWidth / 2;
  logo.y = viewport.screenHeight / 2;
  viewport.addChild(logo);

  return canvas;
};
BackgroundColor.args = {
  color: "#131313",
};
