import React, { Component } from "react";
import { StyleSheet, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GameEngine } from "react-native-game-engine";
import Icon from "@expo/vector-icons/FontAwesome5";

// Utils
import CameraRenderer from "../CameraRenderer";
import { levelSound, backgroundSound } from "../utils/sound";

// Systems
import Systems from "../systems";

// Menus
import GameOver from "../menus/GameOver";
import LevelCompleted from "../menus/LevelCompleted";

// Levels
import Level1 from "../levels/Level1";

export default class App extends Component {
  constructor(props) {
    super(props);

    const { level } = props.location.state;

    this.state = {
      running: true,
      completed: false,
      score: 0,
      lives: 9 // this cannot live here, it should be a prop
    };

    this.gameEngine = null;
    this.entities = level();

    // backgroundSound.stopAsync();
    // levelSound.playAsync();
  }

  handleEvent = e => {
    switch (e.type) {
      case "landed-successfully":
        this.setState({
          running: false,
          completed: true
        });
        break;
      case "game-over":
        let { lives } = this.state;
        lives = lives > 0 ? (lives -= 1) : 0;
        this.setState({
          running: false,
          lives
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
    }
  };

  reset = () => {
    const { level } = this.props.location.state;

    this.entities = level(); // rebuild entities
    this.gameEngine.swap(this.entities); // load new entities
    this.setState({
      score: 0,
      running: true,
      completed: false
    });
  };

  render() {
    const { score, lives, running, completed } = this.state;
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
          <Icon name="cat" size={28} color="#fff" solid /> x {lives}
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
            running={running}
            onEvent={this.handleEvent}
            systems={Systems}
            entities={this.entities}
          >
            <StatusBar hidden={true} />
          </GameEngine>
          {!running && !completed && <GameOver onReset={this.reset} />}
          {!running && completed && <LevelCompleted onReset={this.reset} />}
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
