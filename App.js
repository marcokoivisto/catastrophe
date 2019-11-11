import React, { Component } from "react";
import { Dimensions, StyleSheet, View, StatusBar } from "react-native";

import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";

import Physics from "./Physics";
import Cat from "./Cat";

const Constants = {
  MAX_WIDTH: Dimensions.get("screen").width,
  MAX_HEIGHT: Dimensions.get("screen").height,
  GAP_SIZE: 200, // gap between the two parts of the pipe
  PIPE_WIDTH: 100 // width of the pipe
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: true
    };

    this.gameEngine = null;

    this.entities = this.setupWorld();
  }

  setupWorld = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;

    let cat = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 4,
      Constants.MAX_HEIGHT / 2,
      50,
      50
    );

    Matter.World.add(world, [cat]);

    return {
      physics: { engine: engine, world: world },
      cat: { body: cat, size: [80, 80], color: "red", renderer: Cat }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <GameEngine
          ref={ref => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          running={this.state.running}
          systems={[Physics]}
          entities={this.entities}
        >
          <StatusBar hidden={true} />
        </GameEngine>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
