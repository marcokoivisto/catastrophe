import React, { Component } from "react";
import { View, Image } from "react-native";
import Matter from "matter-js";
import Constants from "../Constants";

export class CloudsRenderer extends Component {
  render() {
    const { numberOfCloudSets } = this.props;
    return (
      <View
        style={{
          paddingLeft: Constants.WALL_WIDTH,
          paddingRight: Constants.WALL_WIDTH
        }}
      >
        {Array.from(Array(numberOfCloudSets).keys()).map(key => (
          <Image
            key={key}
            resizeMode="contain"
            style={{
              width: Constants.SCREEN_WIDTH - Constants.WALL_WIDTH * 2,
              height: 400
            }}
            source={require("../assets/clouds.png")}
          />
        ))}
      </View>
    );
  }
}

export default (world, numberOfCloudSets) => {
  let body = Matter.Bodies.rectangle(0, 0, 0, 0, {
    isStatic: true
  });

  Matter.World.add(world, [body]);

  return {
    body,
    renderer: <CloudsRenderer />,
    numberOfCloudSets
  };
};
