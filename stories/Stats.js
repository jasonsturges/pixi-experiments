import StatsJS from "stats.js";
import { app } from "./Scene";

export const stats = new StatsJS();
let isShown = false;

const onTicker = () => {
  stats.update();
};

export const showStats = () => {
  if (isShown) return;
  isShown = true;
  document.body.appendChild(stats.dom);
  app.ticker.add(onTicker);
};

export const hideStats = () => {
  if (!isShown) return;
  isShown = false;
  document.body.removeChild(stats.dom);
  app.ticker.remove(onTicker);
};

export const toggleStats = () => {
  isShown ? hideStats() : showStats();
};

window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyP":
      toggleStats();
      break;
  }
});
