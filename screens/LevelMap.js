import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { utilities } from "../constants/Layout";
import Button from "../components/Button";
import LevelButton from "../components/LevelButton";
import { useHistory } from "react-router-native";

export default LevelMap = props => {
  const DEBUG = true;
  const { container, contentCenter } = utilities;
  const { onSetLevel } = props;
  const history = useHistory();

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
      {DEBUG && (
        <LevelButton
          title="D"
          onPress={() => handleSelectLevel(999)}
          style={{ position: "absolute", top: "9%", left: "10%" }}
        />
      )}
      <LevelButton
        title="1"
        onPress={() => handleSelectLevel(0)}
        style={{ position: "absolute", top: "15%", right: "24%" }}
      />
      <LevelButton
        title="2"
        onPress={() => handleSelectLevel(1)}
        style={{ position: "absolute", top: "35%", right: "3%" }}
      />
      <LevelButton
        title="50"
        onPress={() => handleSelectLevel(2)}
        style={{ position: "absolute", top: "50%", left: "30%" }}
      />
      <LevelButton
        title="100"
        onPress={() => handleSelectLevel(3)}
        style={{ position: "absolute", top: "72%", left: "20%" }}
      />
      <Button
        title="go back"
        backgroundColor="#d4d5cf"
        onPress={() => history.push("/")}
        style={{ position: "absolute", bottom: 60 }}
      />
    </ImageBackground>
  );
};
