import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { utilities } from "../constants/Layout";
import Button from "../components/Button";
import Spacing from "../components/Spacing";
import { useHistory } from "react-router-native";

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
            onPress={() => history.push("play")}
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
