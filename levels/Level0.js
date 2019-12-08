import Matter from "matter-js";

// Constants
import Constants from "../constants/Constants";

// Components
import Cat from "../components/Cat";
import Wall from "../components/Wall";
import Floor from "../components/Floor";

export default Level0 = () => {
  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;

  return {
    LEVEL_ID: 999,
    NEXT_LEVEL_ID: 999,
    MAX_SCORE: 0,
    physics: { engine, world },
    leftWall: Wall(
      world,
      { x: Constants.WALL_WIDTH / 2, y: Constants.SCREEN_HEIGHT / 2 },
      { width: Constants.WALL_WIDTH, height: Constants.SCREEN_HEIGHT * 9 }
    ),
    rightWall: Wall(
      world,
      {
        x: Constants.SCREEN_WIDTH - Constants.WALL_WIDTH / 2,
        y: Constants.SCREEN_HEIGHT / 2
      },
      { width: Constants.WALL_WIDTH, height: Constants.SCREEN_HEIGHT * 9 }
    ),
    floor: Floor(
      world,
      {
        x: Constants.SCREEN_WIDTH / 2,
        y: Constants.SCREEN_HEIGHT * 5 - Constants.WALL_WIDTH / 2
      },
      { width: Constants.SCREEN_WIDTH, height: Constants.WALL_WIDTH * 5 }
    ),
    cat: Cat(
      world,
      { x: Constants.SCREEN_WIDTH / 3, y: 0 },
      Constants.CAT_SIZE
    ),
    camera: { offsetY: 0 }
  };
};
