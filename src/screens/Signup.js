import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { userService } from "../services/userService.js";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    let user = {
      name,
      username,
      email,
      password,
    };
    userService.signup();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setName(value)}
          value={name}
          placeholder="Name"
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setUsername(value)}
          value={username}
          placeholder="Username"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
          value={email}
          placeholder="Email"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={submit}>
          <Text style={styles.button}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.push("Homepage")}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#282828",
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
  smallheader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
  form: {
    marginTop: 20,
    padding: 15,
    width: "100%",
    flex: 1,
    marginBottom: 20,
  },
  label: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 16,
    marginTop: 16,
  },
  button: {
    fontSize: 20,
    color: "white",
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: "#c01c00",
    padding: 8,
    textAlign: "center",
  },
});

export default Signup;
