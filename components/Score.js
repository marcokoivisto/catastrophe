import React from "react";
import { View, Image, Text } from "react-native";
import PropTypes from "prop-types";
import { utilities } from "../constants/Layout";

const Score = props => {
  const { score, maxScore, small } = props;
  const { headline, headline3 } = utilities;

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        marginLeft: -20
      }}
    >
      <Text
        style={[
          small ? headline3 : headline,
          { color: "#222162", fontWeight: "900" }
        ]}
      >
        {score} / {maxScore}
      </Text>
      <Image
        resizeMode="contain"
        style={{ width: small ? 35 : 50, marginLeft: small ? 15 : 25 }}
        source={require("../assets/levels/points.png")}
      />
    </View>
  );
};

Score.propTypes = {
  maxScore: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  small: PropTypes.bool
};

export default Score;
