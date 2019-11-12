import React, { Component } from "react";
import { Text, Image } from "react-native";

export default class Cat extends Component {
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <Image
        source={{
          uri: "https://animated.name/uploads/posts/2016-08/1471201938_602.gif"
        }}
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
