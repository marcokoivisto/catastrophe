import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const LevelButton = props => {
  const { title, onPress, color, style, disabled, fontWeight } = props;

  const styles = StyleSheet.create({
    button: {
      height: 75,
      width: 90,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 50,
      borderWidth: 12,
      borderColor: "#e29dad"
    },
    buttonText: {
      fontSize: 32,
      fontWeight: fontWeight ? fontWeight : "bold",
      color
    }
  });

  const { button, buttonText } = styles;

  const buttonStyles = {
    ...button
  };

  const buttonTextStyles = {
    ...buttonText
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        buttonStyles,
        style,
        { opacity: disabled ? 0.5 : 1, alignItems: "center" }
      ]}
      onPress={disabled ? null : onPress}
    >
      <Text style={buttonTextStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LevelButton;
