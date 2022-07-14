import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";

import Map from "./Map";

import colors from "../config/colors";

const MapContainer = ({ route }) => {
  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.trackBtn}>
        <Button title="Start Tracking" />
      </View>

      {/* <Text>Text</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trackBtn: {
    marginTop: 20,
    backgroundColor: colors.primary,
  },
});

export default MapContainer;
