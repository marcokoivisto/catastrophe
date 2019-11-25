import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { utilities } from "../constants/Layout";
import { useHistory } from "react-router-native";
import Spacing from "../components/Spacing";
import Button from "../components/Button";
import { playBackgroundSound } from "../utils/sound";

export default About = () => {
  const { container, contentCenter, headline, textCenter } = utilities;
  const history = useHistory();

  return (
    <View style={[container, contentCenter]}>
      <SafeAreaView>
        <View>
          <Text style={[headline, textCenter]}>About</Text>
          <Spacing height={30} />
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
