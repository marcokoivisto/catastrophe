import React from "react";
import { View, Image, Text } from "react-native";
import PropTypes from "prop-types";
import { utilities } from "../constants/Layout";

const Lives = props => {
  const { lives, small } = props;
  const { headline, headline3 } = utilities;

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row"
      }}
    >
      <Image
        resizeMode="contain"
        style={{ width: small ? 45 : 50 }}
        source={require("../assets/levels/lives2x.png")}
      />
      <Text
        style={[
          small ? headline3 : headline,
          { color: "#222162", fontWeight: "900" }
        ]}
      >
        x {lives}
      </Text>
    </View>
  );
};

Lives.propTypes = {
  lives: PropTypes.number.isRequired,
  small: PropTypes.bool
};

export default Lives;
