import Matter from "matter-js";

export const rotate = (entity, radians) => {
  if (entity.rotation == null)
    throw Error("Entity doesn't implement the [rotation] parameter!");
  Matter.Body.rotate(entity.body, radians);
  entity.rotation = radians;
};

export const remove = (id, entities) => {
  if (entities[id].body)
    Matter.Composite.remove(entities.physics.world, entities[id].body);

  delete entities[id];
};
