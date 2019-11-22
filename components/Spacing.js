import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

const Spacing = props => {
  const { height, width } = props;

  return <View style={{ height, width }} />;
};

Spacing.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};

Spacing.defaultProps = {
  height: 30,
  width: 30
};

export default Spacing;
