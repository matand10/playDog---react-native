import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import NavigationBar from "../cmps/NavigationBar";

const MainApp = ({ route }) => {
  const [user, setUser] = useState(route.params.user);

  return <NavigationBar user="user" />;
};

const styles = StyleSheet.create({});

export default MainApp;
