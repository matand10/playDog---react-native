import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const DogPreview = ({ dog }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: dog.photo }} />
      <Text style={styles.name}>{dog.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default DogPreview;
