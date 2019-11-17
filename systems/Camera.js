import Constants from "../Constants";

export default (entities, { screen }) => {
  let cat = entities.cat;
  let floor = entities.floor;
  let camera = entities.camera;

  if (
    cat.body.position.y > Constants.SCREEN_HEIGHT / 2 &&
    floor.body.position.y + Constants.WALL_WIDTH * 2 - cat.body.position.y >
      Constants.SCREEN_HEIGHT / 2
  ) {
    camera.offsetY = Constants.SCREEN_HEIGHT / 2 - cat.body.position.y;
  }

  return entities;
};
