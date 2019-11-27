import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import { useHistory } from "react-router-native";
import PropTypes from "prop-types";
import Icon from "@expo/vector-icons/FontAwesome5";
import Spacing from "../components/Spacing";
import Button from "../components/Button";
import { utilities } from "../constants/Layout";
import { levelSound, backgroundSound } from "../utils/sound";
import MenuBackground from "../components/MenuBackground";

const GameOver = props => {
  const { container, contentCenter, textCenter, headline } = utilities;
  const { onReset } = props;
  const history = useHistory();

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
          style={{ height: 250 }}
          source={require("../assets/levels/game_over_cat2x.png")}
        />
        <View style={{ alignItems: "center" }}>
          <Spacing />
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginLeft: -20
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: 50, marginRight: 25 }}
              source={require("../assets/levels/points.png")}
            />
            <Text style={[headline, { color: "#222162", fontWeight: "800" }]}>
              10 / 10
            </Text>
          </View>
          <Spacing />
          <Button flexGrow={false} title="play again" onPress={onReset} block />
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

GameOver.propTypes = {
  onReset: PropTypes.func.isRequired
};

export default GameOver;
