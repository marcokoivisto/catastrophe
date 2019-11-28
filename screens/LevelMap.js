import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { utilities } from "../constants/Layout";
import Button from "../components/Button";
import Spacing from "../components/Spacing";
import { useHistory } from "react-router-native";

import MenuBackground from "../components/MenuBackground";

export default LevelMap = props => {
  const { container, contentCenter, headline, textCenter } = utilities;
  const { setLevel } = props;
  const history = useHistory();

  const handleSelectLevel = levelId => {
    setLevel(levelId);
    history.push("play");
  };

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
              onPress={() => handleSelectLevel(0)}
              block
            />
            <Spacing />
            <Button
              flexGrow={false}
              title="Level 2"
              onPress={() => handleSelectLevel(1)}
              block
            />
            <Spacing />
            <Button
              flexGrow={false}
              title="Level 3"
              onPress={() => handleSelectLevel(2)}
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
