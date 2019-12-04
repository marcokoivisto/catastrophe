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
    LEVEL_ID: 1,
    NEXT_LEVEL_ID: 2,
    physics: { engine, world },
    obstacle1: Obstacle(world, { x: 0, y: 200 }, Math.PI, 200, "right"),
    obstacle2: Obstacle(world, { x: 0, y: 300 }, Math.PI, 300, "right"),
    obstacle3: Obstacle(world, { x: 0, y: 400 }, Math.PI, 400, "right"),
    obstacle4: Obstacle(world, { x: 0, y: 500 }, Math.PI, 500, "right"),
    obstacle5: Obstacle(world, { x: 0, y: 800 }, Math.PI, 200, "left"),
    obstacle6: Obstacle(world, { x: 0, y: 900 }, Math.PI, 300, "left"),
    obstacle7: Obstacle(world, { x: 0, y: 1000 }, Math.PI, 400, "left"),
    obstacle8: Obstacle(world, { x: 0, y: 1100 }, Math.PI, 500, "left"),
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
      y: 150
    }),

    tuna2: Tuna(world, {
      x: 80,
      y: 250
    }),

    tuna3: Tuna(world, {
      x: 70,
      y: 350
    }),

    tuna4: Tuna(world, {
      x: 70,
      y: 450
    }),

    tuna5: Tuna(world, {
      x: 90,
      y: 550
    }),
    tuna6: Tuna(world, {
      x: 110,
      y: 650
    }),
    tuna7: Tuna(world, {
      x: 160,
      y: 750
    }),
    tuna8: Tuna(world, {
      x: 210,
      y: 850
    }),
    tuna9: Tuna(world, {
      x: 260,
      y: 950
    }),
    tuna10: Tuna(world, {
      x: 290,
      y: 1050
    }),

    camera: { offsetY: 0 }
  };
};
