import { Dimensions } from "react-native";

const Constants = {
  SCREEN_WIDTH: Dimensions.get("screen").width,
  SCREEN_HEIGHT: Dimensions.get("screen").height,
  WALL_WIDTH: 25,
  OBSTACLE_TYPE: {
    KILL: 0,
    BOUNCE: 1
  }
};

export default Constants;
