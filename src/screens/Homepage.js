import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { userService } from "../services/userService";
const image = {
  uri: "https://res.cloudinary.com/tamir1234432/image/upload/v1657395208/PlayDog/PlayDog_eh0oen.jpg",
};

const Homepage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidError, setEmailValidError] = useState("");
  const [passwordValidError, setPasswordValidError] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    AsyncStorage.getItem("LOGIN").then((user) => {
      if (user) navigation.push("MainApp", { user: user });
    });
  };

  const handleValidEmail = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) setEmailValidError("Email address must be enter");
    else if (reg.test(val) === false)
      setEmailValidError("Enter valid email address");
    else {
      setEmailValidError("");
      return true;
    }
    return false;
  };

  const handleValidPassword = (val) => {
    if (val.length === 0)
      setPasswordValidError("Password address must be enter");
    else {
      setPasswordValidError("");
      return true;
    }
    return false;
  };

  const submit = async () => {
    if (handleValidEmail(email) && handleValidPassword(password)) {
      const user = await userService.login(email, password);
      console.log(user);
      if (user) navigation.push("MainApp", { user });
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.logo}>PlayDog</Text>
        <ImageBackground style={styles.img} source={image} />
        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setEmail(value)}
            value={email}
            placeholder="Email"
          />
          {emailValidError ? (
            <Text style={styles.valid}>{emailValidError}</Text>
          ) : null}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setPassword(value)}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
          {passwordValidError ? (
            <Text style={styles.valid}>{passwordValidError}</Text>
          ) : null}
          <TouchableOpacity onPress={submit}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("Signup")}>
            <Text style={styles.button}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    backgroundColor: "#282828",
  },
  logo: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
  img: {
    width: "100%",
    height: 200,
    marginTop: 20,
    resizeMode: "cover",
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
  valid: {
    backgroundColor: "red",
    color: "white",
  },
});

export default Homepage;
