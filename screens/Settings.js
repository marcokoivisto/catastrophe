import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { utilities } from "../constants/Layout";
import { useHistory } from "react-router-native";
import Spacing from "../components/Spacing";
import Button from "../components/Button";

export default Settings = () => {
  const { container, contentCenter, headline, textCenter } = utilities;
  const history = useHistory();

  return (
    <View style={[container, contentCenter]}>
      <SafeAreaView>
        <View>
          <Text style={[headline, textCenter]}>Settings</Text>
          <Spacing height={30} />
          <Button
            flexGrow={false}
            title="go back"
            onPress={() => history.push("/")}
            backgroundColor="#d4d5cf"
            block
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
