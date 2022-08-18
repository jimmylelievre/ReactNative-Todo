import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Task = ({ style, text }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={style ? styles.circularComplete : styles.circular}></View>
        {/* <View style={styles.square}></View> */}
        <Text style={style ? styles.tasksComplete : styles.itemText}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    width: 290,
  },
  items: {
    flexDirection: "row",
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 15,
    marginRight: 10,
  },
  tasksComplete: {
    textDecorationLine: "line-through",
  },
  circularComplete: {
    width: 15,
    height: 15,
    borderColor: "#55BCF6",
    backgroundColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 15,
    marginRight: 10,
  },
});

export default Task;
