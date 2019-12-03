import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const isSmallDevice = screenWidth <= 375;
const isExtraSmallDevice = screenWidth <= 325 || screenHeight <= 600;

const utilities = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
  contentCenter: {
    justifyContent: "center",
    alignItems: "center"
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  headline: {
    fontSize: 32,
    fontWeight: "bold"
  },
  headline2: {
    fontSize: 28,
    fontWeight: "bold"
  },
  headline3: {
    fontSize: 24,
    fontWeight: "bold"
  },
  text: {
    fontSize: 18,
    fontWeight: "600"
  },
  textCenter: {
    textAlign: "center"
  }
});

export { isSmallDevice, isExtraSmallDevice, utilities };
