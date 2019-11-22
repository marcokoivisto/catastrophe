import { Dimensions } from "react-native";

const Constants = {
  SCREEN_WIDTH: Dimensions.get("screen").width,
  SCREEN_HEIGHT: Dimensions.get("screen").height,
  WALL_WIDTH: 25,
  CAT_SIZE: {
    HEIGHT: 70,
    WIDTH: 70
  },
  OBSTACLE_TYPE: {
    KILL: 0,
    BOUNCE: 1
  },
  DOUBLE_PRESS_DELAY: 200
};

export default Constants;
