import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { useHistory } from "react-router-native";
import PropTypes from "prop-types";
import Spacing from "../components/Spacing";
import Button from "../components/Button";
import { utilities } from "../constants/Layout";
import { levelSound, backgroundSound } from "../utils/sound";
import Score from "../components/Score";

const GameOver = props => {
  const { container, contentCenter } = utilities;
  const { onReset, score, maxScore } = props;
  const history = useHistory();

  const quit = () => {
    onReset(true);
    levelSound.stopAsync();
    // backgroundSound.playAsync();
    history.push("/levels");
  };

  return (
    <SafeAreaView
      style={[container, contentCenter, { backgroundColor: "#fffef7" }]}
    >
      <Image
        resizeMode="contain"
        style={{ height: 240 }}
        source={require("../assets/levels/game_over_cat2x.png")}
      />
      <Text
        style={{
          fontSize: 52,
          fontWeight: "bold",
          color: "#222162",
          marginTop: -10
        }}
      >
        game over
      </Text>
      <View style={{ alignItems: "center" }}>
        <Spacing height={20} />
        <Score score={score} maxScore={maxScore} />
        <Spacing height={20} />
        <Button flexGrow={false} title="play again" onPress={onReset} block />
        <Spacing height={15} />
        <Button
          flexGrow={false}
          title="exit"
          onPress={quit}
          block
          backgroundColor="#d4d5cf"
        />
      </View>
    </SafeAreaView>
  );
};

GameOver.propTypes = {
  onReset: PropTypes.func.isRequired
};

export default GameOver;
