import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { StyleSheet } from "react-native";
import Profile from "./Profile";
import { Map } from "./Map";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const NavigationBar = (user) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="face" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "yellow",
  },
});

export default NavigationBar;
