import React, { Component } from "react";
import { StyleSheet, StatusBar, Text, View } from "react-native";
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
import Score from "../components/Score";
import Lives from "../components/Lives";

export default class App extends Component {
  constructor(props) {
    super(props);

    const { level } = props;

    this.state = {
      running: true,
      completed: false,
      score: 0
    };

    this.gameEngine = null;
    this.entities = level();

    backgroundSound.stopAsync();
    levelSound.playAsync();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.level && nextProps.level !== this.props.level) {
      this.entities = nextProps.level(); // rebuild entities
      this.gameEngine.swap(this.entities); // load new entities
    }
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
        this.setState({
          running: false,
          completed: false
        });
        this.props.lostLife();
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

  reset = (forceSwap = false) => {
    if (forceSwap) {
      const { level } = this.props;

      this.entities = level(); // rebuild entities
      this.gameEngine.swap(this.entities); // load new entities
    }

    this.setState({
      score: 0,
      running: true,
      completed: false
    });
  };

  render() {
    const { score, running, completed } = this.state;
    const { lives, onSetLevel, onBuyLives } = this.props;
    return (
      <>
        <View
          style={{
            position: "absolute",
            top: -10,
            zIndex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingLeft: 45,
            paddingRight: 45
          }}
        >
          <Lives small lives={lives} />
          {running && <Score small score={score} maxScore={10} />}
        </View>
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
          {!running && !completed && (
            <GameOver
              onReset={this.reset}
              score={score}
              maxScore={10}
              lives={lives}
              onBuyLives={onBuyLives}
            />
          )}
          {!running && completed && (
            <LevelCompleted
              onReset={this.reset}
              score={score}
              maxScore={10}
              onGoToNextLevel={() => onSetLevel(this.entities.NEXT_LEVEL_ID)}
            />
          )}
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
