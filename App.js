import React, { Component } from "react";
import { NativeRouter, Route } from "react-router-native";

// Utils
import { loadSounds } from "./utils/sound";

// Screens
import MainMenu from "./screens/MainMenu";
import LevelMap from "./screens/LevelMap";
import Store from "./screens/Store";
import Play from "./screens/Play";
import Settings from "./screens/Settings";

import Levels from "./levels";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lives: 9,
      level: Levels[0]
    };

    this.init();
  }

  init = async () => {
    const { backgroundSound } = await loadSounds();
    // backgroundSound.playAsync();
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

  render() {
    const { level, lives } = this.state;
    return (
      <NativeRouter>
        <Route exact path="/" component={MainMenu} />
        <Route
          path="/levels"
          render={props => <LevelMap {...props} setLevel={this.setLevel} />}
        />
        <Route
          path="/store"
          render={props => (
            <Store {...props} lives={lives} buyLives={this.buyLives} />
          )}
        />
        <Route path="/settings" component={Settings} />
        <Route
          path="/play"
          render={props => (
            <Play
              {...props}
              lives={lives}
              buyLives={this.buyLives}
              lostLife={this.lostLife}
              level={level}
              setLevel={this.setLevel}
            />
          )}
        />
      </NativeRouter>
    );
  }
}
