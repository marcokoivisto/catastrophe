import Matter from "matter-js";
import Constants from "../constants/Constants";
import { rotate } from "../utils";

let lastPress = null;

const Physics = (entities, { touches, time }) => {
  const engine = entities.physics.engine;
  const cat = entities.cat;

  touches.filter(touch => {
    if (touch.type === "press") {
      HandlePress(cat);
    } else if (touch.type === "move") {
      HandleMove(cat, touch);
    }
  })

  Matter.Engine.update(engine, time.delta);

  return entities;
};

const HandlePress = (cat) => {
  const now = new Date().getTime();
  if (lastPress && now - lastPress < Constants.DOUBLE_PRESS_DELAY) {
    // Rotate physics model and visuals
    // Cat should rotate back after a set amount of time, this is for demo purposes
    rotate(cat, cat.rotation + Math.PI);
    lastPress = null;
  } else {
    lastPress = now;
  }
}

const HandleMove = (cat, touch) => {
  // TODO Needs fine tuning
  const { pageX } = touch.event;
  const maxForce = 0.0015;
  const boostReducer = 0.00001;
  const x = cat.body.position.x;         // Move based on cat position
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
}

export default Physics;
