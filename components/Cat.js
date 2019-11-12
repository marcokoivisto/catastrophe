import React, { Component } from "react";
import { Image } from "react-native";

import Matter from "matter-js";

export class CatRenderer extends Component {
  render() {
    const { body, size } = this.props;
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
          height: height
        }}
      />
    );
  }
}

export default (world, position, size) => {
  const body = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    {
      restitution: 0.5
    }
  );

  Matter.World.add(world, [body]);

  return {
    body,
    size,
    renderer: <CatRenderer />
  };
};
