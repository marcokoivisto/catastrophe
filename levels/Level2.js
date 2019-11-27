import Matter from "matter-js";

// Constants
import Constants from "../constants/Constants";

// Components
import Obstacle from "../components/Obstacle";
import Cat from "../components/Cat";
import Wall from "../components/Wall";
import Floor from "../components/Floor";
import Clouds from "../components/Clouds";
import Tuna from "../components/Tuna";

export default Level2 = () => {
  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;

  return {
    physics: { engine, world },
    obstacle1: Obstacle(world, { x: 0, y: 100 }, Math.PI, 150, "left"),
    obstacle2: Obstacle(world, { x: 0, y: 400 }, Math.PI, 200, "right"),
    obstacle3: Obstacle(world, { x: 0, y: 700 }, Math.PI, 250, "left"),
    obstacle4: Obstacle(world, { x: 0, y: 1000 }, Math.PI, 300, "right"),
    obstacle5: Obstacle(world, { x: 0, y: 1300 }, Math.PI, 150, "left"),
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
    floor: Floor(
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
      Constants.CAT_SIZE
    ),
    tuna1: Tuna(world, {
      x: 100,
      y: 100
    }),
    tuna2: Tuna(world, {
      x: 120,
      y: 200
    }),
    tuna3: Tuna(world, {
      x: 130,
      y: 300
    }),
    tuna4: Tuna(world, {
      x: 150,
      y: 400
    }),
    tuna5: Tuna(world, {
      x: 180,
      y: 700
    }),
    tuna6: Tuna(world, {
      x: 200,
      y: 800
    }),
    tuna7: Tuna(world, {
      x: 200,
      y: 1000
    }),
    tuna8: Tuna(world, {
      x: 200,
      y: 1000
    }),
    tuna9: Tuna(world, {
      x: 200,
      y: 1000
    }),
    tuna10: Tuna(world, {
      x: 200,
      y: 1000
    }),
    camera: { offsetY: 0 }
  };
};
