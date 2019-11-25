import React, { Component } from "react";
import { Image } from "react-native";

import Matter from "matter-js";
import Constants from "../constants/Constants";

export class CatRenderer extends Component {
  render() {
    const { body, size, rotation } = this.props;
    const { width, height } = size;
    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;

    return (
      <Image
        source={require("../assets/cat.gif")}
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: width,
          height: height,
          transform: [{ rotateZ: rotation + "rad" }]
        }}
      />
    );
  }
}

export default (world, position, size, rotation = 0) => {
  const body = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    {
      restitution: 0.5,
      collisionFilter: {
        mask: Constants.COLLISIONS.default
      }
    }
  );

  Matter.World.add(world, [body]);

  return {
    body,
    size,
    rotation,
    renderer: <CatRenderer />
  };
};
