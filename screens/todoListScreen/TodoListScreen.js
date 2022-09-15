import React from "react";

import { StyleSheet, Text, View } from "react-native";
import Delete from "../../components/Delete";
import ListIcon from "../../components/ListIcon";

export default function TodoListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Listes Todo</Text>
        <Text style={styles.title}>+</Text>
      </View>

      <View style={styles.containerTodo}>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <ListIcon />
            <Text style={styles.listContent}>pain</Text>
          </View>
        </View>
        <Delete />
      </View>

      <View style={styles.containerTodo}>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <ListIcon />
            <Text style={styles.listContent}>pain</Text>
          </View>
        </View>
        <View>
          <Delete />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F2F7",
    marginTop: 50,
  },
  containerTitle: {
    flexDirection: "row",
  },
  containerTodo: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    backgroundColor: "#FFF",
    paddingLeft: 10,
    borderRadius: 6,
    flexDirection: "row",

    marginBottom: 10,
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#D1D1D1",
  },
  title: {
    marginBottom: 15,
    fontSize: 15,
    color: "#5E5E5E",
    fontWeight: "bold",
    marginLeft: 22,
  },
  listContent: {
    marginLeft: 10,
  },
  addIcon: {
    fontSize: 20,
  },
});
