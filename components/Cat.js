import React, { Component } from "react";
import { Text } from "react-native";

export default class Cat extends Component {
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <Text
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: width,
          height: height,
          fontSize: width - 6
        }}
      >
        🐈
      </Text>
    );
  }
}
