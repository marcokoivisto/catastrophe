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

export default Level3 = () => {
  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;

  return {
    LEVEL_ID: 2,
    NEXT_LEVEL_ID: 3,
    physics: { engine, world },
    obstacle1: Obstacle(world, { x: 0, y: 250 }, Math.PI, 150, "left"),
    obstacle2: Obstacle(world, { x: 0, y: 400 }, Math.PI, 250, "right"),
    obstacle3: Obstacle(world, { x: 0, y: 600 }, Math.PI, 350, "left"),
    obstacle4: Obstacle(world, { x: 0, y: 950 }, Math.PI, 150, "left"),
    obstacle5: Obstacle(world, { x: 0, y: 950 }, Math.PI, 200, "right"),
    obstacle6: Obstacle(world, { x: 0, y: 1300 }, Math.PI, 350, "right"),
    obstacle7: Obstacle(world, { x: 0, y: 1700 }, Math.PI, 150, "left"),
    obstacle8: Obstacle(world, { x: 0, y: 1700 }, Math.PI, 200, "right"),
    obstacle9: Obstacle(world, { x: 180, y: 2000 }, Math.PI, 110, "left"),
    obstacle10: Obstacle(world, { x: 0, y: 2300 }, Math.PI, 350, "right"),
    obstacle11: Obstacle(world, { x: 0, y: 2600 }, Math.PI, 150, "left"),
    obstacle12: Obstacle(world, { x: 0, y: 2850 }, Math.PI, 250, "right"),
    obstacle13: Obstacle(world, { x: 0, y: 3100 }, Math.PI, 350, "left"),
    obstacle14: Obstacle(world, { x: 180, y: 3300 }, Math.PI, 110, "right"),
    obstacle15: Obstacle(world, { x: 0, y: 3650 }, Math.PI, 150, "left"),
    obstacle16: Obstacle(world, { x: 0, y: 3650 }, Math.PI, 200, "right"),
    obstacle17: Obstacle(world, { x: 180, y: 3900 }, Math.PI, 110, "left"),
    obstacle18: Obstacle(world, { x: 0, y: 4100 }, Math.PI, 150, "left"),
    obstacle19: Obstacle(world, { x: 0, y: 4250 }, Math.PI, 350, "right"),
    obstacle20: Obstacle(world, { x: 0, y: 4500 }, Math.PI, 350, "left"),
    leftWall: Wall(
      world,
      { x: Constants.WALL_WIDTH / 2, y: Constants.SCREEN_HEIGHT / 2 },
      { width: Constants.WALL_WIDTH, height: Constants.SCREEN_HEIGHT * 15 }
    ),
    rightWall: Wall(
      world,
      {
        x: Constants.SCREEN_WIDTH - Constants.WALL_WIDTH / 2,
        y: Constants.SCREEN_HEIGHT / 2
      },
      { width: Constants.WALL_WIDTH, height: Constants.SCREEN_HEIGHT * 15 }
    ),
    floor: Floor(
      world,
      {
        x: Constants.SCREEN_WIDTH / 2,
        y: Constants.SCREEN_HEIGHT * 8 - Constants.WALL_WIDTH / 2
      },
      { width: Constants.SCREEN_WIDTH, height: Constants.WALL_WIDTH * 3 }
    ),
    clouds: Clouds(world, 2),
    cat: Cat(
      world,
      { x: Constants.SCREEN_WIDTH / 3, y: 0 },
      Constants.CAT_SIZE
    ),
    tuna1: Tuna(world, {
      x: 140,
      y: 200
    }),
    tuna2: Tuna(world, {
      x: 150,
      y: 350
    }),
    tuna3: Tuna(world, {
      x: 250,
      y: 500
    }),
    tuna4: Tuna(world, {
      x: 250,
      y: 650
    }),
    tuna5: Tuna(world, {
      x: 150,
      y: 800
    }),
    tuna6: Tuna(world, {
      x: 150,
      y: 950
    }),
    tuna7: Tuna(world, {
      x: 100,
      y: 1100
    }),
    tuna8: Tuna(world, {
      x: 190,
      y: 1250
    }),
    tuna9: Tuna(world, {
      x: 140,
      y: 1400
    }),
    tuna10: Tuna(world, {
      x: 150,
      y: 1550
    }),
    tuna11: Tuna(world, {
      x: 280,
      y: 2000
    }),
    tuna12: Tuna(world, {
      x: 220,
      y: 2150
    }),
    tuna13: Tuna(world, {
      x: 120,
      y: 2300
    }),
    tuna14: Tuna(world, {
      x: 150,
      y: 2450
    }),
    tuna15: Tuna(world, {
      x: 100,
      y: 2600
    }),
    tuna16: Tuna(world, {
      x: 120,
      y: 2750
    }),
    tuna17: Tuna(world, {
      x: 280,
      y: 2900
    }),
    tuna18: Tuna(world, {
      x: 190,
      y: 3050
    }),
    tuna19: Tuna(world, {
      x: 200,
      y: 3200
    }),
    tuna20: Tuna(world, {
      x: 280,
      y: 3350
    }),
    tuna21: Tuna(world, {
      x: 200,
      y: 3500
    }),
    tuna22: Tuna(world, {
      x: 280,
      y: 3650
    }),
    tuna22: Tuna(world, {
      x: 250,
      y: 3800
    }),
    camera: { offsetY: 0 }
  };
};
