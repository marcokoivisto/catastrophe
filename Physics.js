import Matter from "matter-js";
import Constants from "./Constants";

const Physics = (entities, { touches, time }) => {
  let engine = entities.physics.engine;
  let cat = entities.cat.body;

  touches
    .filter(t => t.type === "press")
    .forEach(t => {
      const { pageX } = t.event;
      if (pageX < Constants.SCREEN_WIDTH / 2) {
        Matter.Body.applyForce(cat, cat.position, { x: -0.03, y: 0 });
      } else {
        Matter.Body.applyForce(cat, cat.position, { x: 0.03, y: 0 });
      }
    });

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
