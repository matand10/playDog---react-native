import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

const MyDogs = () => {
  // const [user, setUser] = useState(null);

  useEffect(() => {}, []);

  const addDog = () => {
    console.log("add dog");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addDog}>
        <Text style={styles.button}>Add Dog</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    backgroundColor: "#282828",
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

export default MyDogs;
