import React, { Component } from "react";
import { StyleSheet, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GameEngine } from "react-native-game-engine";

// Utils
import CameraRenderer from "../CameraRenderer";
import { levelSound, backgroundSound } from "../utils/sound";

// Systems
import Systems from "../systems";

// Menus
import GameOver from "../menus/GameOver";

// Levels
import Level1 from "../levels/Level1";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: true,
      score: 0,
      lifes: 9
    };

    this.gameEngine = null;
    this.entities = Level1();

    // backgroundSound.stopAsync();
    // levelSound.playAsync();
  }

  handleEvent = e => {
    switch (e.type) {
      case "game-over":
        this.setState({
          running: false
        });
        break;
      case "tuna-collected": {
        let { score } = this.state;
        score += 1;
        this.setState({
          score
        });
        break;
      }
      case "lost-life": {
        let { lifes } = this.state;
        lifes -= 1;
        this.setState({
          lifes
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
    const { score, lifes } = this.state;
    return (
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
        <Text
          style={{
            position: "absolute",
            left: 40,
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
          LIFES x{lifes}
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
            systems={Systems}
            entities={this.entities}
          >
            <StatusBar hidden={true} />
          </GameEngine>
          {!this.state.running && <GameOver onReset={this.reset} />}
        </LinearGradient>
      </>
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
