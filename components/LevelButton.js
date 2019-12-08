import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const LevelButton = props => {
  const {
    title,
    onPress,
    color,
    style,
    disabled,
    fontWeight,
    completed
  } = props;

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
      fontSize: 28,
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
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        buttonStyles,
        style,
        { opacity: disabled ? 0.5 : 1, alignItems: "center" },
        { backgroundColor: completed ? "#fafad2" : "#fff" },
        { borderColor: completed ? "#ffd700" : "#e29dad" }
      ]}
      onPress={disabled ? null : onPress}
    >
      <Text style={buttonTextStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LevelButton;
