import { canvas, viewport } from "../Scene";
import { Graphics } from "pixi.js";
import { GraphPaper, GraphStyle } from "pixi-graphpaper";

export default {
  title: "Interaction/Pointer",
};

export const Drag = ({ color }) => {
  // Background grid for reference
  const paper = new GraphPaper(GraphStyle.BLUEPRINT);
  viewport.addChild(paper);

  // Drag target
  const box = new Graphics();
  box.interactive = true;
  box.beginFill(0xfff8dc, 0.85);
  box.drawCircle(0, 0, 50);
  box.position.set(viewport.screenWidth / 2, viewport.screenHeight / 2);
  viewport.addChild(box);

  let dragPoint;

  const onDragStart = (event) => {
    event.stopPropagation();
    dragPoint = event.data.getLocalPosition(box.parent);
    dragPoint.x -= box.x;
    dragPoint.y -= box.y;
    box.parent.on("pointermove", onDragMove);
  };

  const onDragMove = (event) => {
    const newPoint = event.data.getLocalPosition(box.parent);
    box.x = newPoint.x - dragPoint.x;
    box.y = newPoint.y - dragPoint.y;
  };

  const onDragEnd = (event) => {
    event.stopPropagation();
    box.parent.off("pointermove", onDragMove);
  };

  box.on("pointerdown", onDragStart);
  box.on("pointerup", onDragEnd);
  box.on("pointerupoutside", onDragEnd);

  return canvas;
};
