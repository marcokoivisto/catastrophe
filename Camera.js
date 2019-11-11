import Constants from "./Constants";

export default (entities, { screen }) => {
  let cat = entities.cat;
  let camera = entities.camera;

  camera.offsetY = Constants.SCREEN_HEIGHT / 2 - cat.body.position.y;

  return entities;
};
