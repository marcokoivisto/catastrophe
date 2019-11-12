import React, { Component } from "react";
import { StyleSheet, StatusBar, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";

import CameraRenderer from "./CameraRenderer";
import Obstacle from "./components/Obstacle";

// Systems
import Physics from "./Physics";
import Camera from "./Camera";

import Cat from "./components/Cat";
import Wall from "./components/Wall";
import Constants from "./Constants";
import Clouds from "./components/Clouds";

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

    let cat = Matter.Bodies.rectangle(Constants.SCREEN_WIDTH / 2, 0, 70, 70, {
      restitution: 0.5
    });

    let leftWall = Matter.Bodies.rectangle(
      Constants.WALL_WIDTH / 2,
      Constants.SCREEN_HEIGHT / 2,
      Constants.WALL_WIDTH,
      Constants.SCREEN_HEIGHT * 3,
      {
        isStatic: true
      }
    );

    let rightWall = Matter.Bodies.rectangle(
      Constants.SCREEN_WIDTH - Constants.WALL_WIDTH / 2,
      Constants.SCREEN_HEIGHT / 2,
      Constants.WALL_WIDTH,
      Constants.SCREEN_HEIGHT * 3,
      {
        isStatic: true
      }
    );

    let floor = Matter.Bodies.rectangle(
      Constants.SCREEN_WIDTH / 2,
      Constants.SCREEN_HEIGHT * 2 - Constants.WALL_WIDTH / 2,
      Constants.SCREEN_WIDTH,
      Constants.WALL_WIDTH * 4,
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
      obstacle1: Obstacle(world, { x: 0, y: 100 }, 0.4, 300, "left"),
      obstacle2: Obstacle(world, { x: 0, y: 400 }, 0.4, 200, "right"),
      obstacle3: Obstacle(world, { x: 0, y: 700 }, 0.4, 150, "left"),
      obstacle4: Obstacle(world, { x: 0, y: 1000 }, 0.4, 300, "right"),
      obstacle5: Obstacle(world, { x: 0, y: 1300 }, 0.4, 200, "left"),
      leftWall: { body: leftWall, renderer: Wall },
      rightWall: { body: rightWall, renderer: Wall },
      floor: { body: floor, renderer: Wall },
      clouds: Clouds(world, 2),
      cat: { body: cat, size: [70, 70], renderer: Cat },
      camera: { offsetY: 0 }
    };
  };

  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={[
          "#BCC3DB",
          "#BCC3DB",
          "#BCC3DB",
          "#D6B7C5",
          "#D6B7C5",
          "#D6B7C5"
        ]}
      >
        <GameEngine
          ref={ref => {
            this.gameEngine = ref;
          }}
          renderer={CameraRenderer}
          style={styles.gameContainer}
          running={this.state.running}
          systems={[Camera, Physics]}
          entities={this.entities}
        >
          <StatusBar hidden={true} />
        </GameEngine>
      </LinearGradient>
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
