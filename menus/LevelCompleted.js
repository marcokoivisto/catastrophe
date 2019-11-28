import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import { useHistory } from "react-router-native";
import PropTypes from "prop-types";
import Icon from "@expo/vector-icons/FontAwesome5";
import Spacing from "../components/Spacing";
import Button from "../components/Button";
import { utilities } from "../constants/Layout";
import { levelSound, backgroundSound } from "../utils/sound";
import Score from "../components/Score";

const LevelCompleted = props => {
  const { container, contentCenter } = utilities;
  const { onReset, score, maxScore } = props;
  const history = useHistory();

  const goToNextLevel = () => {
    onReset();
    levelSound.stopAsync();
    history.push("/levels");
  };

  const quit = () => {
    onReset();
    levelSound.stopAsync();
    // backgroundSound.playAsync();
    history.push("/levels");
  };

  return (
    <MenuBackground>
      <SafeAreaView style={[container, contentCenter]}>
        <Image
          resizeMode="contain"
          style={{ height: 240 }}
          source={require("../assets/levels/you_win_cat2x.png")}
        />
        <Text
          style={{
            fontSize: 52,
            fontWeight: "bold",
            color: "#222162",
            marginTop: -10
          }}
        >
          you win!
        </Text>
        <View style={{ alignItems: "center" }}>
          <Spacing height={20} />
          <Score score={score} maxScore={maxScore} />
          <Spacing height={20} />
          <Button flexGrow={false} title="next" onPress={goToNextLevel} block />
          <Spacing height={15} />
          <Button
            flexGrow={false}
            title="exit to map"
            onPress={quit}
            block
            backgroundColor="#d4d5cf"
          />
        </View>
      </SafeAreaView>
    </MenuBackground>
  );
};

LevelCompleted.propTypes = {
  onReset: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  levelCompletedText: {
    marginTop: 20,
    color: "white",
    fontSize: 48,
    fontWeight: "bold"
  },
  levelCompletedSubText: {
    color: "white",
    fontSize: 20,
    marginTop: 15
  },
  fullScreen: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.8)"
  }
});

export default LevelCompleted;
