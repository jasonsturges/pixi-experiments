import * as PIXI from "pixi.js";
import { canvas, viewport } from "../Scene";
import { drawBurst } from "../../src/graphics/Burst";
import { parseColor } from "../../src/utils/ColorUtils";
import { RandomUtils } from "../../src/utils/RandomUtils";
import { showStats } from "../Stats";

export default {
  title: "Performance/Stress Test",
  argTypes: {},
};

export const x1000 = ({}) => {
  showStats();

  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 25; j++) {
      const stroke = Math.random() * 5;
      const color = RandomUtils.color();
      const fill = RandomUtils.color();
      const graphics = new PIXI.Graphics();
      graphics.lineStyle(stroke, parseColor(color));
      graphics.beginFill(parseColor(fill));
      graphics.x = i * 100;
      graphics.y = j * 100;

      drawBurst(
        graphics,
        viewport.screenWidth / 2,
        viewport.screenHeight / 2,
        RandomUtils.integer(3, 25),
        RandomUtils.integer(1, 50),
        RandomUtils.integer(1, 50),
        RandomUtils.integer(0, 360)
      );

      viewport.addChild(graphics);
    }
  }

  return canvas;
};
x1000.args = {};
