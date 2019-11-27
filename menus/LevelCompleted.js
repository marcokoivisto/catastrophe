import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { useHistory } from "react-router-native";
import PropTypes from "prop-types";
import Icon from "@expo/vector-icons/FontAwesome5";
import Spacing from "../components/Spacing";
import Button from "../components/Button";
import { utilities } from "../constants/Layout";
import { levelSound, backgroundSound } from "../utils/sound";

const LevelCompleted = props => {
  const { container, contentCenter, textCenter } = utilities;
  const { onReset } = props;
  const history = useHistory();

  const gotoMainMenu = () => {
    onReset();
    levelSound.stopAsync();
    // backgroundSound.playAsync();
    history.push("/levels");
  };

  return (
    <View style={[styles.fullScreen, container, contentCenter]}>
      <SafeAreaView>
        <View>
          <Icon
            style={textCenter}
            name="thumbs-up"
            size={68}
            color="#fff"
            solid
          />
          <Text style={styles.levelCompletedText}>Level Cleared!</Text>
          <Spacing />
          <Button
            backgroundColor="#000"
            color="#fff"
            flexGrow={false}
            title="Back"
            onPress={gotoMainMenu}
            block
          />
        </View>
      </SafeAreaView>
    </View>
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
