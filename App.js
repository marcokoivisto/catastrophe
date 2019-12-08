import React, { Component } from "react";
import { NativeRouter, Route } from "react-router-native";
import { ImageBackground } from "react-native";

// Utils
import { loadSounds, toggleSounds } from "./utils/sound";

// Screens
import MainMenu from "./screens/MainMenu";
import LevelMap from "./screens/LevelMap";
import Store from "./screens/Store";
import Play from "./screens/Play";
import Settings from "./screens/Settings";

import Levels from "./levels";
import storage from "./utils/storage";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lives: 9,
      level: Levels[0],
      // enabledLevels: [0, 1, 2, 3] uncomment this and comment L26 if you wanna enable all levels for debugging
      enabledLevels: [0]
    };

    this.init();
  }

  init = async () => {
    const { backgroundSound } = await loadSounds();
    const isMuted = (await storage.get("is_muted")) || false;
    backgroundSound.playAsync();
    toggleSounds(isMuted);
  };

  lostLife = () => {
    let { lives } = this.state;
    lives = lives > 0 ? (lives -= 1) : 0;
    this.setState({
      running: false,
      lives
    });
  };

  setLevel = levelId => {
    this.setState({
      level: Levels[levelId]
    });
  };

  buyLives = () => {
    let { lives } = this.state;
    lives += 9;
    this.setState({
      lives
    });
  };

  levelCompleted = id => {
    let { enabledLevels } = this.state;

    if (!enabledLevels.includes(id)) {
      enabledLevels.push(id);
      this.setState({
        enabledLevels
      });
    }
  };

  render() {
    const { level, lives, enabledLevels } = this.state;
    return (
      <NativeRouter>
        <ImageBackground
          style={{ width: "100%", height: "100%", backgroundColor: "#fffef7" }}
          imageStyle={{ resizeMode: "cover" }}
          source={require("./assets/levels/intro_bg.png")}
        >
          <Route exact path="/" component={MainMenu} />
          <Route
            path="/levels"
            render={props => (
              <LevelMap
                {...props}
                enabledLevels={enabledLevels}
                onSetLevel={this.setLevel}
                lives={lives}
                onBuyLives={this.buyLives}
              />
            )}
          />
          <Route
            path="/store"
            render={props => (
              <Store {...props} lives={lives} onBuyLives={this.buyLives} />
            )}
          />
          <Route path="/settings" component={Settings} />
          <Route
            path="/play"
            render={props => (
              <Play
                {...props}
                lives={lives}
                onBuyLives={this.buyLives}
                lostLife={this.lostLife}
                level={level}
                onSetLevel={this.setLevel}
                onLevelCompleted={this.levelCompleted}
              />
            )}
          />
        </ImageBackground>
      </NativeRouter>
    );
  }
}
