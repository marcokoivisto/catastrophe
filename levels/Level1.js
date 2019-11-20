import Matter from "matter-js";

// Constants
import Constants from "../Constants";

// Components
import Obstacle from "../components/Obstacle";
import Cat from "../components/Cat";
import Wall from "../components/Wall";
import Clouds from "../components/Clouds";

export default Level1 = () => {
  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;

  return {
    physics: { engine, world },
    obstacle1: Obstacle(world, { x: 0, y: 100 }, 0.4, 150, "left"),
    obstacle2: Obstacle(world, { x: 0, y: 400 }, 0.4, 200, "right"),
    obstacle3: Obstacle(world, { x: 0, y: 700 }, 0.4, 250, "left"),
    obstacle4: Obstacle(world, { x: 0, y: 1000 }, 0.4, 300, "right"),
    obstacle5: Obstacle(world, { x: 0, y: 1300 }, 0.4, 150, "left"),
    leftWall: Wall(
      world,
      { x: Constants.WALL_WIDTH / 2, y: Constants.SCREEN_HEIGHT / 2 },
      { width: Constants.WALL_WIDTH, height: Constants.SCREEN_HEIGHT * 3 }
    ),
    rightWall: Wall(
      world,
      {
        x: Constants.SCREEN_WIDTH - Constants.WALL_WIDTH / 2,
        y: Constants.SCREEN_HEIGHT / 2
      },
      { width: Constants.WALL_WIDTH, height: Constants.SCREEN_HEIGHT * 3 }
    ),
    floor: Wall(
      world,
      {
        x: Constants.SCREEN_WIDTH / 2,
        y: Constants.SCREEN_HEIGHT * 2 - Constants.WALL_WIDTH / 2
      },
      { width: Constants.SCREEN_WIDTH, height: Constants.WALL_WIDTH * 4 }
    ),
    clouds: Clouds(world, 2),
    cat: Cat(
      world,
      { x: Constants.SCREEN_WIDTH / 3, y: 0 },
      { width: Constants.CAT_SIZE.WIDTH, height: Constants.CAT_SIZE.HEIGHT }
    ),
    camera: { offsetY: 0 }
  };
};
