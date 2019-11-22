import Constants from "../constants/Constants";
import { rotate } from "../utils";

let lastPress = null;

const Physics = (entities, { touches, time }) => {
  const cat = entities.cat;
  const now = new Date().getTime();

  touches.filter(t => {
    if (t.type !== "press") return;
    if (lastPress && now - lastPress < Constants.DOUBLE_PRESS_DELAY) {
      // Rotate physics model and visuals
      // Cat should rotate back after a set amount of time, this is for demo purposes
      rotate(cat, cat.rotation + Math.PI);
      lastPress = null;
    } else {
      lastPress = now;
    }
  });

  return entities;
};

export default Physics;
