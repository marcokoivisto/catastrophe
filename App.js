import React, { Component } from "react";
import { StyleSheet, StatusBar, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GameEngine } from "react-native-game-engine";
import { NativeRouter, Route } from "react-router-native";

// Utils
import CameraRenderer from "./CameraRenderer";

// Systems
import Camera from "./systems/Camera";
import Obstacles from "./systems/Obstacles";
import Cat from "./systems/Cat";
import Tuna from "./systems/Tuna";

// Menus
import GameOver from "./menus/GameOver";

// Levels
import Level1 from "./levels/Level1";
import MainMenu from "./screens/MainMenu";
import LevelMap from "./screens/LevelMap";
import About from "./screens/About";
import Constants from "./constants/Constants";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: true,
      score: 0
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
        break;
      case "tuna-collected": {
        const { score } = this.state;
        this.setState({
          score: score + 1
        });
        break;
      }
    }
  };

  reset = () => {
    this.entities = Level1(); // rebuild entities
    this.gameEngine.swap(this.entities); // load new entities
    this.setState({
      score: 0,
      running: true
    });
  };

  render() {
    const { score } = this.state;
    return (
      <NativeRouter>
        <Route exact path="/" component={MainMenu} />
        <Route path="/levels" component={LevelMap} />
        <Route path="/about" component={About} />
        <Route
          path="/play"
          component={() => (
            <>
              <Text
                style={{
                  position: "absolute",
                  right: 40,
                  top: 30,
                  zIndex: 1,
                  fontSize: 24,
                  fontWeight: "900",
                  color: "#fff",
                  textShadowColor: "#333",
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 1
                }}
              >
                SCORE {score}
              </Text>
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
                  systems={[Camera, Obstacles, Cat, Tuna]}
                  entities={this.entities}
                >
                  <StatusBar hidden={true} />
                </GameEngine>
                {!this.state.running && <GameOver onReset={this.reset} />}
              </LinearGradient>
            </>
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
