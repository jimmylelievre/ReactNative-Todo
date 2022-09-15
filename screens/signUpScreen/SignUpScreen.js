import React from "react";

import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SingUpScreen() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Inscription</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput style={styles.item} placeholder={"Email"} />
          <TextInput style={styles.item} placeholder={"Mot de passe"} />
          <TextInput
            style={styles.item}
            placeholder={"Confirmer le mot de passe"}
          />
        </KeyboardAvoidingView>
      </View>

      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.textButton}>S'inscrire</Text>
        </View>
        <Text style={styles.text}>
          Vous avez déjà un compte ? Connectez -vous ici !
        </Text>
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
    color: "rgba(172, 172, 172, 1)",
    textAlign: "center",
    marginTop: 10,
    fontSize: 13,
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
