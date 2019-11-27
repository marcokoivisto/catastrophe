import React, { Component } from "react";
import { Image } from "react-native";
import Matter from "matter-js";
import Constants from "../constants/Constants";

class TunaRenderer extends Component {
  render() {
    const { body } = this.props;
    const { height, width } = Constants.TUNA_SIZE;
    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;

    return (
      <Image
        source={require("../assets/tuna.png")}
        style={{
          position: "absolute",
          left: x,
          top: y,
          width,
          height,
          borderRadius: Constants.TUNA_SIZE.width / 2
        }}
      />
    );
  }
}

export default (world, position) => {
  const body = Matter.Bodies.rectangle(
    position.x,
    position.y,
    Constants.TUNA_SIZE.width,
    Constants.TUNA_SIZE.height,
    {
      isStatic: true,
      collisionFilter: {
        mask: Constants.COLLISIONS.tuna
      }
    }
  );

  Matter.World.add(world, [body]);

  return {
    body,
    type: Constants.OBJECT_TYPE.TUNA,
    renderer: <TunaRenderer />
  };
};
