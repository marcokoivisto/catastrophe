import Matter from "matter-js";
import Constants from "../constants/Constants";
import { Vibration } from "react-native";
import { obstacleSound } from "../utils/sound";

import { startHurting, startJumping } from "../utils/catActionTimers";

const Obstacles = (entities, { dispatch }) => {
  const cat = entities.cat;

  // Filtering obstacle entities and getting their [body] attributes

  // const bodies = Object.keys(entities)
  //   .filter(key => entities[key].type === Constants.OBSTACLE_TYPE.KILL)
  //   .map(key => entities[key].body);

  // I think [reduce] + [push] is O(n) and [filter] + [map] is O(n^2) so this should be faster but not sure
  const bodies = Object.keys(entities).reduce((bodies, key) => {
    if (entities[key].type === Constants.OBJECT_TYPE.OBSTACLE_KILL)
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
      hurt(cat, dispatch);
    } else {
      jump(cat);
    }
  }

  return entities;
};

export const jump = cat => {
  startJumping(() => (cat.action = "jumping")).then(
    () => (cat.action = "falling")
  );

  obstacleSound.replayAsync(); // this should be another sound
  Vibration.vibrate(500);
};

const hurt = (cat, dispatch) => {
  startHurting(() => (cat.action = "hurting")).then(() => {
    dispatch({ type: "game-over" });
  });

  obstacleSound.replayAsync();
  Vibration.vibrate(500);
};

export default Obstacles;