import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { utilities } from "../constants/Layout";
import Button from "../components/Button";
import Spacing from "../components/Spacing";
import { useHistory } from "react-router-native";

export default MainMenu = () => {
  const { container, contentCenter, headline, textCenter } = utilities;
  const history = useHistory();

  return (
    <View style={[container, contentCenter]}>
      <SafeAreaView>
        <View>
          <Text style={[headline, textCenter]}>Catastrophe</Text>
          <Spacing />
          <Button
            backgroundColor="#000"
            color="#fff"
            flexGrow={false}
            title="Play"
            block
            onPress={() => history.push("levels")}
          />
          <Spacing height={15} />
          <Button
            backgroundColor="#000"
            color="#fff"
            flexGrow={false}
            title="About"
            block
            onPress={() => history.push("about")}
          />
          <Spacing height={15} />
        </View>
      </SafeAreaView>
    </View>
  );
};
