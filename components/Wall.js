import React, { Component } from "react";
import { View, Image } from "react-native";
import Constants from "../Constants";

export default class Wall extends Component {
  render() {
    const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
    const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

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
