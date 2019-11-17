import React, { PureComponent } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import Icon from "@expo/vector-icons/FontAwesome5";

class GameOver extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        style={styles.fullScreenButton}
        onPress={this.props.onReset}
      >
        <View style={styles.fullScreen}>
          <Icon name="skull-crossbones" size={68} color="#fff" solid />
          <Text style={styles.gameOverText}>Game Over</Text>
          <Text style={styles.gameOverSubText}>
            Press anywhere to try again
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

GameOver.propTypes = {
  onReset: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  gameOverText: {
    marginTop: 20,
    color: "white",
    fontSize: 48,
    fontWeight: "bold"
  },
  gameOverSubText: {
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
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center"
  },
  fullScreenButton: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1
  }
});

export default GameOver;
