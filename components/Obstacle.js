import React, { PureComponent } from "react";
import { Image } from "react-native";
import Matter from "matter-js";
import Constants from "../constants/Constants";

export class ObstacleRenderer extends PureComponent {
  render() {
    const { body, size } = this.props;
    const { position, angle } = body;
    const { width, height } = size;
    const x = position.x - width / 2;
    const y = position.y - height / 2;

    return (
      <Image
        resizeMode="repeat"
        source={require("../assets/brick.png")}
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: width,
          height: height,
          overflow: "hidden",
          flexDirection: "row",
          transform: [{ rotateZ: angle + "rad" }],
          backgroundColor: "#fff"
        }}
      />
    );
  }
}

export default (world, position, angle, width, side) => {
  if (side != "right" && side != "left")
    throw Error("invalid side argument, use 'right' or 'left'");

  if (side === "right") {
    angle = -angle;
    position.x = Constants.SCREEN_WIDTH - position.x;
  }

  const height = 20;
  const body = Matter.Bodies.rectangle(position.x, position.y, width, height, {
    isStatic: true,
    angle: angle,
    friction: 0,
    collisionFilter: {
      mask: Constants.COLLISIONS.default
    },
    restitution: 0.5
  });

  const vertices = [
    { x: position.x - width / 2, y: position.y - height / 2 },
    { x: position.x + width / 2, y: position.y - height / 2 },
    { x: position.x - width / 2, y: position.y + height / 2 },
    { x: position.x + width / 2, y: position.y + height / 2 }
  ];

  Matter.Vertices.rotate(vertices, body.angle, body.position);

  Matter.World.add(world, [body]);

  return {
    body,
    type: Constants.OBJECT_TYPE.OBSTACLE_KILL,
    size: { width, height },
    side,
    renderer: <ObstacleRenderer />
  };
};
