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
  Modal,
  Pressable,
} from "react-native";
import Delete from "../../components/Delete";

import Task from "../../components/Task";

export default function TodoScreen() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [taskComplete, setTaskComplete] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const TaskCompleted = (index, item) => {
    let itemsCopy = [...taskItems];

    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    completeTask(item);
  };
  const reloadTaskCompleted = (index, item) => {
    let itemsCopy = [item, ...taskItems];
    let itemsCopyComplete = [...taskComplete];

    itemsCopyComplete.splice(index, 1);
    setTaskItems(itemsCopy);
    setTaskComplete(itemsCopyComplete);
  };

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task == "") {
    } else {
      setTaskItems([...taskItems, task.toLowerCase()]);
    }
    setTask("");
  };

  const completeTask = (item) => {
    let itemsCopy = [item, ...taskComplete];
    setTaskComplete(itemsCopy);
  };
  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  const deleteTaskCompleted = (index) => {
    let itemsCopy = [...taskComplete];
    itemsCopy.splice(index, 1);
    setTaskComplete(itemsCopy);
  };

  const removeDuplicates = () => {
    let UniqueItems = [...new Set(taskItems)];
    let UniqueItemsComplete = [...new Set(taskComplete)];
    setTaskComplete(UniqueItemsComplete);
    setTaskItems(UniqueItems);
    setModalVisible(!modalVisible);
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
          <View style={styles.sectionTitle}>
            <Text style={styles.title}>Tâches du jour</Text>
            <Text
              style={styles.delete}
              onPress={() => setModalVisible(!modalVisible)}
            >
              Remove duplicates
            </Text>
          </View>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.containerItem}
                  key={index}
                  onPress={() => TaskCompleted(index, item)}
                >
                  <Task text={item} />
                  <Text
                    style={styles.deleteIcon}
                    onPress={() => deleteTask(index)}
                  >
                    <Delete />
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {/* Tasks complete*/}
        <View style={styles.tasksWrapperComplete}>
          {taskComplete.length >= 1 ? (
            <View>
              <Text style={styles.title}>Tâches terminées</Text>
              <Text style={styles.tagline}>
                Cliquez sur la tâche souhaitée pour la remettre dans tâches du
                jour{" "}
              </Text>
            </View>
          ) : (
            <Text style={styles.sectionTitle}></Text>
          )}

          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {taskComplete.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.containerItem}
                  key={index}
                  onPress={() => reloadTaskCompleted(index, item)}
                >
                  <Task style="tasksComplete" text={item} />

                  <Text
                    style={styles.deleteIcon}
                    onPress={() => deleteTaskCompleted(index)}
                  >
                    <Delete />
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {/* Modal */}
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Are you sure to want remove duplicates ?
                </Text>
                <View style={styles.buttonsModal}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => removeDuplicates()}
                  >
                    <Text style={styles.textStyle}>Delete</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
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
          placeholder={"Ajoutez une tâche"}
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
    backgroundColor: "#E6F2F7",
    height: 5000,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5E5E5E",
  },
  tagline: {
    fontSize: 11,
    color: "#5E5E5E",
  },
  items: {
    marginTop: 30,
  },
  containerItem: {
    flexDirection: "row",
  },
  deleteIcon: {
    marginTop: 15,
    marginLeft: 10,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 6,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 200,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    border: 1,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginLeft: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonsModal: {
    flexDirection: "row",

    alignItems: "center",
  },
});
