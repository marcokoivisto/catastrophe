import { Dimensions } from "react-native";

const Constants = {
  SCREEN_WIDTH: Dimensions.get("screen").width,
  SCREEN_HEIGHT: Dimensions.get("screen").height,
  WALL_WIDTH: 25,
  CAT_SIZE: {
    height: 70,
    width: 70
  },
  TUNA_SIZE: {
    height: 30,
    width: 30
  },
  OBJECT_TYPE: {
    OBSTACLE_KILL: 0,
    OBSTACLE_BOUNCE: 1,
    TUNA: 2
  },
  DOUBLE_PRESS_DELAY: 200,
  COLLISIONS: {
    default: 0x0001,
    tuna: 0x0010
  }
};

export default Constants;
