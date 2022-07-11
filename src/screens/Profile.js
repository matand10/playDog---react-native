import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    AsyncStorage.getItem("LOGIN").then((value) => setUser(value));
  };

  return (
    <ScrollView>
      <View>{user}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Profile;
