import React, { Component } from "react";
import { StyleSheet, StatusBar, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";

import CameraRenderer from "./CameraRenderer";

// Systems
import Physics from "./Physics";
import Camera from "./Camera";

// Components
import Obstacle from "./components/Obstacle";
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
    const engine = Matter.Engine.create({ enableSleeping: false });
    const world = engine.world;

    const clouds = Matter.Bodies.rectangle(0, 0, 0, 0, {
      isStatic: true
    });

    return {
      physics: { engine, world },
      obstacle1: Obstacle(world, { x: 0, y: 100 }, 0.4, 400, "left"),
      obstacle2: Obstacle(world, { x: 0, y: 400 }, 0.4, 400, "right"),
      obstacle3: Obstacle(world, { x: 0, y: 700 }, 0.4, 400, "left"),
      obstacle4: Obstacle(world, { x: 0, y: 1000 }, 0.4, 400, "right"),
      obstacle5: Obstacle(world, { x: 0, y: 1300 }, 0.4, 400, "left"),
      leftWall: Wall(
        world,
        { x: Constants.WALL_WIDTH / 2, y: Constants.SCREEN_HEIGHT / 2 },
        { width: Constants.WALL_WIDTH, height: Constants.SCREEN_HEIGHT * 3 }
      ),
      rightWall: Wall(
        world,
        {
          x: Constants.SCREEN_WIDTH - Constants.WALL_WIDTH / 2,
          y: Constants.SCREEN_HEIGHT / 2
        },
        { width: Constants.WALL_WIDTH, height: Constants.SCREEN_HEIGHT * 3 }
      ),
      floor: Wall(
        world,
        {
          x: Constants.SCREEN_WIDTH / 2,
          y: Constants.SCREEN_HEIGHT * 2 - Constants.WALL_WIDTH / 2
        },
        { width: Constants.SCREEN_WIDTH, height: Constants.WALL_WIDTH * 4 }
      ),
      clouds: { body: clouds, renderer: Clouds },
      cat: Cat(
        world,
        { x: Constants.SCREEN_WIDTH / 2, y: 0 },
        { width: 70, height: 70 }
      ),
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
