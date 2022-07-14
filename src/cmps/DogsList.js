import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import DogPreview from "./DogPreview";

const DogsList = ({ dogs }) => {
  const arr = [
    {
      name: "Joni!!!!!",
      photo:
        "https://res.cloudinary.com/tamir1234432/image/upload/v1657395208/PlayDog/PlayDog_eh0oen.jpg",
    },
    {
      name: "Joni",
      photo:
        "https://res.cloudinary.com/tamir1234432/image/upload/v1657395208/PlayDog/PlayDog_eh0oen.jpg",
    },
    {
      name: "Joni",
      photo:
        "https://res.cloudinary.com/tamir1234432/image/upload/v1657395208/PlayDog/PlayDog_eh0oen.jpg",
    },
    {
      name: "Joni",
      photo:
        "https://res.cloudinary.com/tamir1234432/image/upload/v1657395208/PlayDog/PlayDog_eh0oen.jpg",
    },
    {
      name: "Joni",
      photo:
        "https://res.cloudinary.com/tamir1234432/image/upload/v1657395208/PlayDog/PlayDog_eh0oen.jpg",
    },
    {
      name: "Joni",
      photo:
        "https://res.cloudinary.com/tamir1234432/image/upload/v1657395208/PlayDog/PlayDog_eh0oen.jpg",
    },
    {
      name: "Joni",
      photo:
        "https://res.cloudinary.com/tamir1234432/image/upload/v1657395208/PlayDog/PlayDog_eh0oen.jpg",
    },
    {
      name: "Joni",
      photo:
        "https://res.cloudinary.com/tamir1234432/image/upload/v1657395208/PlayDog/PlayDog_eh0oen.jpg",
    },
    {
      name: "Joni",
      photo:
        "https://res.cloudinary.com/tamir1234432/image/upload/v1657395208/PlayDog/PlayDog_eh0oen.jpg",
    },
    {
      name: "Joni",
      photo:
        "https://res.cloudinary.com/tamir1234432/image/upload/v1657395208/PlayDog/PlayDog_eh0oen.jpg",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
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
          <DogPreview dog={dog} key={idx} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
