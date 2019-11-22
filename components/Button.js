import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { PropTypes } from "prop-types";
import Icon from "@expo/vector-icons/FontAwesome5";
import { isSmallDevice, isExtraSmallDevice } from "../constants/Layout";

const Button = props => {
  const {
    title,
    onPress,
    backgroundColor,
    color,
    iconName,
    style,
    block,
    disabled,
    small,
    maxWidth,
    flex,
    iconSize,
    iconType,
    flexGrow,
    fontWeight,
    capitalize
  } = props;

  const smallButtonHeight = isExtraSmallDevice ? 45 : 50;
  const buttonHeight = isExtraSmallDevice ? 50 : 55;

  const styles = StyleSheet.create({
    button: {
      height: small ? smallButtonHeight : buttonHeight,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor,
      borderRadius: 50,
      paddingLeft: isSmallDevice ? 20 : 25,
      paddingRight: isSmallDevice ? 20 : 25
    },
    buttonText: {
      fontSize: small ? 14 : 16,
      fontWeight: fontWeight ? fontWeight : "700",
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

  if (block) {
    buttonStyles.width = "100%";
  }

  if (maxWidth) {
    buttonStyles.maxWidth = 260;
  }

  if (flex) {
    buttonStyles.flex = 1;
  }

  if (flexGrow) {
    buttonStyles.flexGrow = 1;
  }

  if (capitalize) {
    buttonTextStyles.textTransform = "capitalize";
  }

  const ButtonElement = disabled ? View : TouchableOpacity;

  return (
    <ButtonElement
      activeOpacity={0.7}
      style={[buttonStyles, style, { opacity: disabled ? 0.5 : 1 }]}
      onPress={disabled ? null : onPress}
    >
      {iconName && (
        <View style={title ? { marginRight: 6 } : null}>
          <Icon type={iconType} color={color} name={iconName} size={iconSize} />
        </View>
      )}
      <Text style={buttonTextStyles}>{title}</Text>
    </ButtonElement>
  );
};

Button.propTypes = {
  active: PropTypes.bool,
  backgroundColor: PropTypes.string,
  block: PropTypes.bool,
  capitalize: PropTypes.bool,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  filterButton: PropTypes.bool,
  flex: PropTypes.bool,
  flexGrow: PropTypes.bool,
  fontWeight: PropTypes.string,
  iconName: PropTypes.any,
  iconSize: PropTypes.number,
  iconType: PropTypes.string,
  large: PropTypes.bool,
  maxWidth: PropTypes.bool,
  onPress: PropTypes.any,
  small: PropTypes.bool,
  style: PropTypes.any,
  title: PropTypes.any
};

Button.defaultProps = {
  fontWeight: null,
  filterButton: false,
  backgroundColor: "transparent",
  iconType: "solid",
  iconSize: 16,
  flexGrow: true,
  maxWidth: false,
  flex: false,
  block: false,
  disabled: false,
  iconName: null,
  onPress: undefined,
  title: null,
  style: undefined,
  small: false,
  large: false,
  active: false,
  capitalize: false
};

export default Button;
