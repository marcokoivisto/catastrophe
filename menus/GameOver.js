import React, { PureComponent } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { useHistory } from "react-router-native";
import PropTypes from "prop-types";
import Icon from "@expo/vector-icons/FontAwesome5";
import Spacing from "../components/Spacing";
import Button from "../components/Button";
import { utilities } from "../constants/Layout";

const GameOver = props => {
  const { container, contentCenter, textCenter } = utilities;
  const { onReset } = props;
  const history = useHistory();

  return (
    <View style={[styles.fullScreen, container, contentCenter]}>
      <SafeAreaView>
        <View>
          <Icon
            style={textCenter}
            name="skull-crossbones"
            size={68}
            color="#fff"
            solid
          />
          <Text style={styles.gameOverText}>Game Over</Text>
          <Spacing />
          <Button
            backgroundColor="#000"
            color="#fff"
            flexGrow={false}
            title="Retry"
            onPress={onReset}
            block
          />
          <Spacing height={15} />
          <Button
            backgroundColor="#000"
            color="#fff"
            flexGrow={false}
            title="Quit"
            onPress={() => history.push("/levels")}
            block
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

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
    backgroundColor: "rgba(0,0,0,0.8)"
  }
});

export default GameOver;
