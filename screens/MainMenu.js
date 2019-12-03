import React, { Component } from "react";
import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { utilities } from "../constants/Layout";
import Button from "../components/Button";
import Spacing from "../components/Spacing";
import { useHistory } from "react-router-native";
import { meowSound } from "../utils/sound";

export default MainMenu = () => {
  const { container, contentCenter } = utilities;
  const history = useHistory();

  return (
    <SafeAreaView style={[container, contentCenter]}>
      <Image
        resizeMode="contain"
        style={{ height: 200 }}
        source={require("../assets/levels/logo2x.png")}
      />
      <View>
        <Spacing height={40} />
        <Button
          flexGrow={false}
          title="play"
          onPress={() => history.push("levels")}
        />
        <Spacing height={25} />
        <Button
          flexGrow={false}
          title="store"
          onPress={() => history.push("store")}
        />
        <Spacing height={25} />
        <Button
          flexGrow={false}
          title="settings"
          onPress={() => history.push("settings")}
        />
        <Spacing height={60} />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={async () => meowSound.replayAsync()}
      >
        <Image
          resizeMode="contain"
          style={{ height: 60 }}
          source={require("../assets/levels/points.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
