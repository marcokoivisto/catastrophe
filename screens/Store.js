import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { utilities } from "../constants/Layout";
import { useHistory } from "react-router-native";
import Spacing from "../components/Spacing";
import Button from "../components/Button";
import Lives from "../components/Lives";

export default Store = props => {
  const { onBuyLives, lives } = props;
  const { container, contentCenter, headline, textCenter } = utilities;
  const history = useHistory();

  return (
    <>
      <View
        style={{
          position: "absolute",
          top: 50,
          zIndex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingLeft: 40,
          paddingRight: 40
        }}
      >
        <Lives noBackground small lives={lives} />
      </View>
      <View style={[container, contentCenter]}>
        <SafeAreaView>
          <View>
            <Text style={[headline, textCenter]}>Store</Text>
            <Spacing height={30} />
            <Button
              flexGrow={false}
              title="buy 9 lives"
              onPress={() => onBuyLives()}
              block
              backgroundColor="#ffbf00"
            />
            <Spacing height={60} />
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
    </>
  );
};
