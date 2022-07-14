import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { DogDetails } from "./DogDetails";
import DogsList from "./DogsList";

const MyDogs = ({ route }) => {
  const [dogs, setDogs] = useState(route.params.dogs);
  const [dog, setDog] = useState(route.params.dogs[0]);
  const [selectedDog, setSelectedDog] = useState(null)

  const addDog = () => {
    console.log("add dog");
  };


  return (
    <View style={styles.container}>
      <DogsList dogs={dogs} setSelectedDog={setSelectedDog} />
      {selectedDog && <DogDetails selectedDog={selectedDog} />}
      <TouchableOpacity onPress={addDog}>
        <Text style={styles.button}>Add Dog</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    height: "100%",
    alignItems: "center",
    backgroundColor: "#282828",
    paddingTop: 20,
    paddingBottom: 20,
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
