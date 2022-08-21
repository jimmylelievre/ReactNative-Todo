import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DoneIcon from "./DoneIcon";

const Task = ({ style, text }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={style ? styles.circularComplete : styles.circular}>
          {style ? (
            <Text>
              <DoneIcon />
            </Text>
          ) : (
            <Text></Text>
          )}
        </View>
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
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    width: 290,
    borderWidth: 1,
    borderColor: "#D1D1D1",
  },
  items: {
    flexDirection: "row",
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 26,
    height: 26,
    borderColor: "#A3A3A3",
    backgroundColor: "#BBFBFF",
    borderWidth: 1,
    borderRadius: 15,
    marginRight: 10,
  },
  tasksComplete: {
    textDecorationLine: "line-through",
  },
  circularComplete: {
    width: 26,
    height: 26,
    borderColor: "#A3A3A3",
    backgroundColor: "rgba(187, 198, 255, 1)",
    borderWidth: 1,
    borderRadius: 15,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Task;
