import React, { PureComponent } from "react";
import { Image } from "react-native";
import Matter from "matter-js";

export class WallRenderer extends PureComponent {
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
        source={require("../assets/brick.png")}
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
      isStatic: true
    }
  );
  Matter.World.add(world, [body]);

  return {
    body,
    size,
    renderer: <WallRenderer />
  };
};
