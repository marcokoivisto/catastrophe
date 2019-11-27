import Matter from "matter-js";
import Constants from "../constants/Constants";

import {
  canStartRotating,
  startRotating,
  startLanding
} from "../utils/catActionTimers";

const MAX_VERTICAL_VELOCITY = 20;

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

  // Limit the maximum fall velocity
  if (cat.body.velocity.y >= MAX_VERTICAL_VELOCITY) {
    Matter.Body.setVelocity(cat.body, {
      x: cat.body.velocity.x,
      y: MAX_VERTICAL_VELOCITY
    });
  }

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

// previous touch x position
let previousTouch;

const handleMove = (cat, touch) => {
  // Tcurrent touch x position
  const { pageX } = touch.event;
  if (previousTouch == null) previousTouch = pageX;

  const boostReducer = 0.00001;
  const BASE_FORCE = 0.005;
  const distanceToCenter = Math.abs(pageX - Constants.SCREEN_WIDTH / 2);
  let force = BASE_FORCE + distanceToCenter * boostReducer;
  // get a force vector between the current and previous touch position
  force = force * -Math.sign(previousTouch - pageX);
  // Apply force
  Matter.Body.applyForce(cat.body, cat.body.position, {
    x: force,
    y: 0
  });

  previousTouch = pageX;
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
