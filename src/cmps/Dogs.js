import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dogs = (user) => {
  const [user, setUser] = useState(null);

  useEffect(() => {}, []);

  return (
    <ScrollView>
      <View>{user}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Dogs;
