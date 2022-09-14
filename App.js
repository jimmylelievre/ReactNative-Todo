import React from "react";

import { StyleSheet, View } from "react-native";

import SignInScreen from "./screens/signInScreen/SignInScreen";
import TodoScreen from "./screens/todoScreen/TodoScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <TodoScreen /> */}
      <View style={styles.signScreen}>
        <SignInScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F2F7",
  },
  signScreen: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
});
