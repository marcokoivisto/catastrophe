import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { utilities } from "../constants/Layout";
import { useHistory } from "react-router-native";
import Spacing from "../components/Spacing";
import Button from "../components/Button";
import MenuBackground from "../components/MenuBackground";

export default Store = () => {
  const { container, contentCenter, headline, textCenter } = utilities;
  const history = useHistory();

  return (
    <MenuBackground>
      <View style={[container, contentCenter]}>
        <SafeAreaView>
          <View>
            <Text style={[headline, textCenter]}>Store</Text>
            <Spacing height={30} />
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
