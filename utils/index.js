import Matter from "matter-js";

export const rotate = (entity, radians) => {
  if (entity.radians != null)
    throw Error("Entity doesn't implement the [rotation] parameter!");
  Matter.Body.rotate(entity.body, radians);
  entity.rotation = radians;
};
