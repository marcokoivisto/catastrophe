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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lives: 9,
      currentLevel: null
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

  render() {
    const { lives } = this.state;
    return (
      <NativeRouter>
        <Route exact path="/" component={MainMenu} />
        <Route path="/levels" component={LevelMap} />
        <Route path="/store" component={Store} />
        <Route path="/settings" component={Settings} />
        <Route
          path="/play"
          render={props => (
            <Play {...props} lives={lives} lostLife={this.lostLife} />
          )}
        />
      </NativeRouter>
    );
  }
}
