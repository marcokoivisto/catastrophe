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

export default Level4 = () => {
  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;

  return {
    LEVEL_ID: 3,
    NEXT_LEVEL_ID: 0,
    physics: { engine, world },
    obstacle1: Obstacle(world, { x: 0, y: 100 }, Math.PI, 150, "left"),
    obstacle2: Obstacle(world, { x: 0, y: 280 }, Math.PI, 300, "left"),
    obstacle3: Obstacle(world, { x: 0, y: 450 }, Math.PI, 300, "right"),
    obstacle4: Obstacle(world, { x: 0, y: 650 }, Math.PI, 300, "left"),
    obstacle5: Obstacle(world, { x: 180, y: 950 }, Math.PI, 110, "left"),
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
      x: 170,
      y: 150
    }),
    tuna2: Tuna(world, {
      x: 220,
      y: 300
    }),
    tuna3: Tuna(world, {
      x: 130,
      y: 450
    }),
    tuna4: Tuna(world, {
      x: 150,
      y: 600
    }),
    tuna5: Tuna(world, {
      x: 250,
      y: 750
    }),
    tuna6: Tuna(world, {
      x: 250,
      y: 900
    }),
    tuna7: Tuna(world, {
      x: 150,
      y: 1050
    }),
    tuna8: Tuna(world, {
      x: 100,
      y: 1200
    }),
    tuna9: Tuna(world, {
      x: 120,
      y: 1350
    }),
    tuna10: Tuna(world, {
      x: 150,
      y: 1500
    }),
    camera: { offsetY: 0 }
  };
};
