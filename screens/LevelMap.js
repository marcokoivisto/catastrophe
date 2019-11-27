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
import MenuBackground from "../components/MenuBackground";

export default LevelMap = () => {
  const { container, contentCenter, headline, textCenter } = utilities;
  const history = useHistory();

  return (
    <MenuBackground>
      <View style={[container, contentCenter]}>
        <SafeAreaView>
          <View>
            <Text style={[headline, textCenter]}>Levels</Text>
            <Spacing />
            <Button
              flexGrow={false}
              title="Level 1"
              onPress={() => history.push("play", { level: Level1 })}
              block
            />
            <Spacing />
            <Button
              flexGrow={false}
              title="Level 2"
              onPress={() => history.push("play", { level: Level2 })}
              block
            />
            <Spacing />
            <Button
              flexGrow={false}
              title="Level 3"
              onPress={() => history.push("play", { level: Level3 })}
              block
            />
            <Spacing />
            <Button
              flexGrow={false}
              title="go back"
              onPress={() => history.push("/")}
              block
              backgroundColor="#d4d5cf"
            />
          </View>
        </SafeAreaView>
      </View>
    </MenuBackground>
  );
};
