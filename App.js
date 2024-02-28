import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Image source={require("./assets/favicon.png")} />
      <TextInput
        placeholder="Type here to capitalize"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text>{text.toUpperCase()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
