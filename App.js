import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [taskComplete, setTaskComplete] = useState([]);

  const deleteTask = (index, item) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    completeTask(item);
  };
  const deleteTaskComplete = (index, item) => {
    let itemsCopy = [item, ...taskItems];
    let itemsCopyComplete = [...taskComplete];
    setTaskItems(itemsCopy);
    itemsCopyComplete.splice(index, 1);
    setTaskComplete(itemsCopyComplete);
  };

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task == "") {
    } else {
      setTaskItems([...taskItems, task]);
    }
    setTask("");
  };

  const completeTask = (item) => {
    let itemsCopy = [item, ...taskComplete];

    setTaskComplete(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          bottom: 60,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => deleteTask(index, item)}
                >
                  <Task
                    text={item}
                    taskItems={taskItems}
                    index={index}
                    setTaskItems={setTaskItems}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {/* Tasks complete*/}
        <View style={styles.tasksWrapperComplete}>
          <Text style={styles.sectionTitle}>Tasks complete</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {taskComplete.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => deleteTaskComplete(index, item)}
                >
                  <Task
                    text={item}
                    taskItems={taskItems}
                    index={index}
                    setTaskItems={setTaskItems}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  tasksWrapperComplete: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
