import React, { Component } from "react";
import { StyleSheet, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GameEngine } from "react-native-game-engine";
import { NativeRouter, Route } from "react-router-native";

// Utils
import CameraRenderer from "./CameraRenderer";

// Systems
import Camera from "./systems/Camera";
import Obstacles from "./systems/Obstacles";
import Cat from "./systems/Cat";

// Menus
import GameOver from "./menus/GameOver";

// Levels
import Level1 from "./levels/Level1";
import MainMenu from "./screens/MainMenu";
import LevelMap from "./screens/LevelMap";
import About from "./screens/About";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: true
    };

    this.gameEngine = null;

    this.entities = Level1();
  }

  handleEvent = e => {
    switch (e.type) {
      case "game-over":
        this.setState({
          running: false
        });
    }
  };

  reset = () => {
    this.gameEngine.swap(Level1());
    this.setState({
      running: true
    });
  };

  render() {
    return (
      <NativeRouter>
        <Route exact path="/" component={MainMenu} />
        <Route path="/levels" component={LevelMap} />
        <Route path="/about" component={About} />
        <Route
          path="/play"
          component={() => (
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
                ref={ref => (this.gameEngine = ref)}
                renderer={CameraRenderer}
                style={styles.gameContainer}
                running={this.state.running}
                onEvent={this.handleEvent}
                systems={[Camera, Obstacles, Cat]}
                entities={this.entities}
              >
                <StatusBar hidden={true} />
              </GameEngine>
              {!this.state.running && <GameOver onReset={this.reset} />}
            </LinearGradient>
          )}
        />
      </NativeRouter>
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
