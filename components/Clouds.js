import React, { Component } from "react";
import { View, Image } from "react-native";
import Constants from "../Constants";

export default class Clouds extends Component {
  render() {
    return (
      <View
        style={{
          paddingLeft: Constants.WALL_WIDTH,
          paddingRight: Constants.WALL_WIDTH
        }}
      >
        <Image
          resizeMode="contain"
          style={{
            width: Constants.SCREEN_WIDTH - Constants.WALL_WIDTH * 2,
            height: 400
          }}
          source={require("../assets/clouds.png")}
        />
        <Image
          resizeMode="contain"
          style={{
            width: Constants.SCREEN_WIDTH - Constants.WALL_WIDTH * 2,
            height: 400
          }}
          source={require("../assets/clouds.png")}
        />
      </View>
    );
  }
}
