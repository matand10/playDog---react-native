import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { utilService } from "../services/util.service";
import DogPreview from "./DogPreview";

const DogsList = ({ dogs, setSelectedDog }) => {

  const demoData = () => {
    let arr = []
    for (let i = 0; i < 11; i++) {
      arr.push({
        id: utilService.makeId(),
        name: "Joni",
        photo:
          "https://res.cloudinary.com/tamir1234432/image/upload/v1657395208/PlayDog/PlayDog_eh0oen.jpg",
      })
    }
    return arr
  }
  const arr = demoData()



  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.img}
            source={{
              uri: "https://res.cloudinary.com/tamir1234432/image/upload/v1657737565/PlayDog/add-image-icon-png-22_f1bymq.png",
            }}
          />
          <Text style={styles.name}>Add Dog</Text>
        </View>
        {arr.map((dog, idx) => (
          <DogPreview dog={dog} key={idx} setSelectedDog={setSelectedDog} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    width: '100%',
    height: 150,
  },
  cardContainer: {
    alignItems: "center",
    width: 110,
    padding: 5,
  },
  img: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  name: {
    color: "white",
  },
});

export default DogsList;
