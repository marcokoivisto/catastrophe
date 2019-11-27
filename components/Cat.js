import React, { Component } from "react";
import { Image } from "react-native";
import Matter from "matter-js";

import CatFalling from "../assets/cat.gif";
import CatHurting from "../assets/cat_hit.gif";
import CatRotating from "../assets/clouds.png";
import CatLanding from "../assets/cat_standing.gif";
import CatJumping from "../assets/cat_jump.gif";
import CatSuccess from "../assets/cat_standing.gif";

import Constants from "../constants/Constants";

const CAT_ACTIONS = {
  falling: Image.resolveAssetSource(CatFalling),
  hurting: Image.resolveAssetSource(CatHurting),
  rotating: Image.resolveAssetSource(CatRotating),
  landing: Image.resolveAssetSource(CatLanding),
  jumping: Image.resolveAssetSource(CatJumping),
  success: Image.resolveAssetSource(CatSuccess)
};

export class CatRenderer extends Component {
  render() {
    const { action, body, size, direction, rotation } = this.props;
    const { width, height } = size;
    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;
    const source = CAT_ACTIONS[action];

    return (
      <Image
        source={source}
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: width,
          height: height,
          zIndex: 1,
          transform: [
            { rotateZ: rotation + "rad" },
            { rotateY: (direction === "right" ? 180 : 0) + "deg" }
          ]
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
    action: "falling",
    direction: "right",
    renderer: <CatRenderer />
  };
};
