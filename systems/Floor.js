import Matter from "matter-js";
import Constants from "../constants/Constants";
import { Vibration } from "react-native";
import { obstacleSound } from "../utils/sound";

import { startHurting, startSuccess } from "../utils/catActionTimers";

const Floor = (entities, { dispatch }) => {
  const cat = entities.cat;

  const bodies = Object.keys(entities).reduce((bodies, key) => {
    if (entities[key].type === Constants.OBJECT_TYPE.FLOOR)
      bodies.push(entities[key].body);
    return bodies;
  }, []);

  const collisions = Matter.Query.collides(cat.body, bodies);

  if (collisions.length) {
    const side =
      cat.body.position.x > Constants.SCREEN_WIDTH / 2 ? "right" : "left";
    cat.direction = side;

    // Apply force
    Matter.Body.applyForce(cat.body, cat.body.position, {
      x: side === "right" ? -0.01 : 0.01,
      y: -0.1
    });

    if (cat.action !== "landing") {
      hurtCat(cat, dispatch);
    } else {
      completeLevel(cat, dispatch);
    }
  }

  return entities;
};

const completeLevel = (cat, dispatch) => {
  startSuccess(() => (cat.action = "success")).then(() => {
    dispatch({ type: "landed-successfully" });
  });

  // play level completed sound
  Vibration.vibrate(500);
};

const hurtCat = (cat, dispatch) => {
  cat.body.collisionFilter.mask = Constants.COLLISIONS.dead;

  startHurting(() => (cat.action = "hurting")).then(() => {
    dispatch({ type: "game-over" });
  });

  obstacleSound.replayAsync();
  Vibration.vibrate(500);
};

export default Floor;
