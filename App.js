import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 68 }}>🐈</Text>
      <View style={{ height: 15 }}></View>
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "#2a2a2a" }}>
        Catastrophe!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
