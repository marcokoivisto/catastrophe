import React from "react";
import { View, Image, Text } from "react-native";
import PropTypes from "prop-types";
import { utilities } from "../constants/Layout";

const Lives = props => {
  const { lives, small, noBackground, notTransparent } = props;
  const { headline, headline3 } = utilities;
  const backgroundColor = `rgba(255, 254, 247, ${
    notTransparent ? "1" : "0.7"
  })`;

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: noBackground ? "transparent" : backgroundColor,
        maxHeight: 50,
        paddingHorizontal: 15,
        borderRadius: 25
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
  small: PropTypes.bool,
  noBackground: PropTypes.bool
};

Lives.defaultProps = {
  small: false,
  noBackground: false
};

export default Lives;
