import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";

import Physics from "./Physics";
import Cat from "./components/Cat";
import Wall from "./components/Wall";
import Constants from "./Constants";

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
      Constants.SCREEN_WIDTH / 2,
      Constants.SCREEN_HEIGHT / 3,
      50,
      50
    );

    let leftWall = Matter.Bodies.rectangle(
      Constants.WALL_WIDTH / 2,
      Constants.SCREEN_HEIGHT / 2,
      Constants.WALL_WIDTH,
      Constants.SCREEN_HEIGHT,
      {
        isStatic: true
      }
    );

    let rightWall = Matter.Bodies.rectangle(
      Constants.SCREEN_WIDTH - Constants.WALL_WIDTH / 2,
      Constants.SCREEN_HEIGHT / 2,
      Constants.WALL_WIDTH,
      Constants.SCREEN_HEIGHT,
      {
        isStatic: true
      }
    );

    let floor = Matter.Bodies.rectangle(
      Constants.SCREEN_WIDTH / 2,
      Constants.SCREEN_HEIGHT - Constants.WALL_WIDTH / 2,
      Constants.SCREEN_WIDTH,
      Constants.WALL_WIDTH,
      {
        isStatic: true
      }
    );

    let ceiling = Matter.Bodies.rectangle(
      Constants.SCREEN_WIDTH / 2,
      0 - Constants.WALL_WIDTH / 2,
      Constants.SCREEN_WIDTH,
      Constants.WALL_WIDTH,
      {
        isStatic: true
      }
    );

    Matter.World.add(world, [cat, leftWall, rightWall, floor, ceiling]);

    return {
      physics: { engine, world },
      leftWall: { body: leftWall, renderer: Wall },
      rightWall: { body: rightWall, renderer: Wall },
      floor: { body: floor, renderer: Wall },
      ceiling: { body: ceiling, renderer: Wall },
      cat: { body: cat, size: [70, 70], renderer: Cat }
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
