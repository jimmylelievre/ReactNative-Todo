import React from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SingInScreen() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>
        <TextInput style={styles.item} placeholder={"Nom"} />
        <TextInput style={styles.item} placeholder={"Mot de passe"} />
      </View>
      <Text style={styles.text}>Mot de passe perdu ?</Text>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.textButton}>Se connecter</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    width: 300,
    borderWidth: 1,
    borderColor: "#D1D1D1",
  },
  container: {
    alignItems: "center",
  },
  title: {
    marginBottom: 24,
    fontSize: 20,
    fontWeight: "bold",
    color: "#5E5E5E",
  },
  text: {
    color: "#5E5E5E",
    textAlign: "right",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#52D4FF",
    border: "1px solid #D1D1D1",
    borderRadius: 19,
    justifyContent: "center",
    marginTop: 20,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    height: 45,
  },
});
