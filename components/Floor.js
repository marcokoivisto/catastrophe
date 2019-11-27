import React, { PureComponent } from "react";
import { Image } from "react-native";
import Matter from "matter-js";
import Constants from "../constants/Constants";

export class FloorRenderer extends PureComponent {
  render() {
    const { body, size } = this.props;
    const { width, height } = size;

    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;

    return (
      <Image
        resizeMode="repeat"
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: width,
          height: height,
          overflow: "hidden",
          flexDirection: "row"
        }}
        source={require("../assets/brick_grass.png")}
      />
    );
  }
}

export default (world, position, size) => {
  const body = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height - 40, // -40 Allows the cat to "bounce in the grass"
    {
      restitution: 0,
      isStatic: true
    }
  );

  Matter.World.add(world, [body]);

  return {
    body,
    size,
    type: Constants.OBJECT_TYPE.FLOOR,
    renderer: <FloorRenderer />
  };
};
