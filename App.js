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
    this.init();
  }

  init = async () => {
    const { backgroundSound } = await loadSounds();
    // backgroundSound.playAsync();
  };

  render() {
    return (
      <NativeRouter>
        <Route exact path="/" component={MainMenu} />
        <Route path="/levels" component={LevelMap} />
        <Route path="/store" component={Store} />
        <Route path="/settings" component={Settings} />
        <Route path="/play" component={Play} />
      </NativeRouter>
    );
  }
}
