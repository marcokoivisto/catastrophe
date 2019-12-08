import React from "react";
import { ImageBackground, View } from "react-native";
import { utilities } from "../constants/Layout";
import Button from "../components/Button";
import LevelButton from "../components/LevelButton";
import { useHistory } from "react-router-native";

import Lives from "../components/Lives";

export default LevelMap = props => {
  const DEBUG = true;
  const { container, contentCenter } = utilities;
  const {
    onBuyLives,
    onSetLevel,
    lives,
    enabledLevels,
    completedLevels
  } = props;
  const history = useHistory();

  const hasLives = () => lives > 0;
  const isCompleted = id => completedLevels.includes(id);
  const isEnabled = id => enabledLevels.includes(id);
  const isDisabled = id => !(hasLives() && isEnabled(id));

  const handleSelectLevel = levelId => {
    onSetLevel(levelId);
    history.push("play");
  };

  return (
    <ImageBackground
      style={[
        container,
        contentCenter,
        { width: "100%", height: "100%", backgroundColor: "#fffef7" }
      ]}
      imageStyle={{ resizeMode: "cover" }}
      source={require("../assets/levels/map.png")}
    >
      <View
        style={{
          position: "absolute",
          top: 50,
          zIndex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        <Lives small lives={lives} />
      </View>
      {DEBUG && (
        <LevelButton
          title="D"
          onPress={() => handleSelectLevel(999)}
          style={{ position: "absolute", top: "9%", left: "10%" }}
        />
      )}
      <LevelButton
        title="1"
        disabled={isDisabled(0)}
        completed={isCompleted(0)}
        onPress={() => handleSelectLevel(0)}
        style={{ position: "absolute", top: "15%", right: "24%" }}
      />
      <LevelButton
        title="2"
        disabled={isDisabled(1)}
        completed={isCompleted(1)}
        onPress={() => handleSelectLevel(1)}
        style={{ position: "absolute", top: "35%", right: "3%" }}
      />
      <LevelButton
        title="50"
        disabled={isDisabled(2)}
        completed={isCompleted(2)}
        onPress={() => handleSelectLevel(2)}
        style={{ position: "absolute", top: "50%", left: "30%" }}
      />
      <LevelButton
        title="100"
        disabled={isDisabled(3)}
        completed={isCompleted(3)}
        onPress={() => handleSelectLevel(3)}
        style={{ position: "absolute", top: "72%", left: "20%" }}
      />
      {!hasLives() && (
        <Button
          title="buy lives"
          onPress={() => onBuyLives()}
          backgroundColor="#ffbf00"
          style={{ position: "absolute", bottom: 150 }}
        />
      )}
      <Button
        title="go back"
        backgroundColor="#d4d5cf"
        onPress={() => history.push("/")}
        style={{ position: "absolute", bottom: 60 }}
      />
    </ImageBackground>
  );
};
