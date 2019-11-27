import React from "react";
import { View, Image } from "react-native";
export default MenuBackground = props => {
  const { children } = props;

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ flex: 1, position: "absolute", height: "100%", width: "100%" }}
        resizeMode="cover"
        source={require("../assets/levels/intro_bg2x.png")}
      />
      {children}
    </View>
  );
};
