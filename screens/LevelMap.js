import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { utilities } from "../constants/Layout";
import Button from "../components/Button";
import Spacing from "../components/Spacing";
import { useHistory } from "react-router-native";

// Levels
import Level1 from "../levels/Level1";
import Level2 from "../levels/Level2";
import Level3 from "../levels/Level3";

export default LevelMap = () => {
  const { container, contentCenter, headline, textCenter } = utilities;
  const history = useHistory();

  return (
    <View style={[container, contentCenter]}>
      <SafeAreaView>
        <View>
          <Text style={[headline, textCenter]}>Levels</Text>
          <Spacing />
          <Button
            backgroundColor="#000"
            color="#fff"
            flexGrow={false}
            title="Level 1"
            onPress={() => history.push("play", { level: Level1 })}
            block
          />
          <Spacing />
          <Button
            backgroundColor="#000"
            color="#fff"
            flexGrow={false}
            title="Level 2"
            onPress={() => history.push("play", { level: Level2 })}
            block
          />
          <Spacing />
          <Button
            backgroundColor="#000"
            color="#fff"
            flexGrow={false}
            title="Level 3"
            onPress={() => history.push("play", { level: Level3 })}
            block
          />
          <Spacing />
          <Button
            backgroundColor="#000"
            color="#fff"
            flexGrow={false}
            title="Back"
            onPress={() => history.push("/")}
            block
            iconName="angle-left"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
