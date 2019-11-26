import Matter from "matter-js";
import Constants from "../constants/Constants";

import {
  canStartRotating,
  startRotating,
  startLanding
} from "../utils/catActionTimers";

let lastPress = null;

const Cat = (entities, { touches, time }) => {
  const engine = entities.physics.engine;
  const cat = entities.cat;

  touches.filter(touch => {
    if (touch.type === "press") {
      handlePress(cat);
    } else if (touch.type === "move") {
      handleMove(cat, touch);
    }
  });

  Matter.Engine.update(engine, time.delta);

  return entities;
};

const handlePress = cat => {
  const now = new Date().getTime();

  if (
    canStartRotating() &&
    lastPress &&
    now - lastPress < Constants.DOUBLE_PRESS_DELAY
  ) {
    turnAround(cat);
    lastPress = null;
  } else {
    lastPress = now;
  }
};

const handleMove = (cat, touch) => {
  // TODO Needs fine tuning
  const { pageX } = touch.event;
  const maxForce = 0.0015;
  const boostReducer = 0.00001;
  const x = cat.body.position.x; // Move based on cat position
  // const x = Constants.SCREEN_WIDTH / 2;  // Move based on screen width
  let force = 0.00001;

  // TODO Zero force if moving in opposite direction
  // Calculate force based on position of finger on screen
  if (pageX < x) {
    force += (x / 2 - pageX) * boostReducer;
    force = Math.max(-force, -maxForce);
  } else {
    force += (pageX - x / 2) * boostReducer;
    force = Math.min(force, maxForce);
  }

  // Apply force
  Matter.Body.applyForce(cat.body, cat.body.position, {
    x: force,
    y: 0
  });
};

const turnAround = cat => {
  startRotating(() => (cat.action = "rotating")).then(() =>
    startLanding(() => (cat.action = "landing")).then(() =>
      startRotating(() => (cat.action = "rotating")).then(
        () => (cat.action = "falling")
      )
    )
  );
};

export default Cat;
