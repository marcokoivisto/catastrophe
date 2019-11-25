import Matter from "matter-js";
import Constants from "../constants/Constants";

import { remove } from "../utils";

const Tuna = (entities, { dispatch }) => {
  const cat = entities.cat;

  const tunaKeys = Object.keys(entities).filter(
    key => entities[key].type === Constants.OBJECT_TYPE.TUNA
  );

  tunaKeys.forEach(key => {
    const b = entities[key];
    const start = topLeft(cat);
    const end = topRight(cat);
    const collisions = Matter.Query.ray([cat.body, b.body], start, end);
    // const collisions = Matter.Query.collides(cat.body, [b.body]);

    if (collisions.length) {
      remove(key, entities);
      dispatch({ type: "tuna-collected" });
    }
  });

  return entities;
};

const height = ({ body: { bounds } }) => bounds.max.y - bounds.min.y;

const width = ({ body: { bounds } }) => bounds.max.x - bounds.min.x;

const topLeft = ({ body }) => ({
  x: body.position.x - width({ body }) / 2,
  y: body.position.y + height({ body }) / 2
});

const topRight = ({ body }) => ({
  x: body.position.x + width({ body }) / 2,
  y: body.position.y + height({ body }) / 2
});

export default Tuna;
