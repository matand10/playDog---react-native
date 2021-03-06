import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { StyleSheet } from "react-native";
import Profile from "../cmps/Profile";
import MyDogs from "./MyDogs";
import MapContainer from "./MapContainer";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const NavigationBar = ({ user }) => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen
        name="My Dogs"
        component={MyDogs}
        initialParams={{ dogs: user.dogs }}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="pets" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Map"
        component={MapContainer}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ currentUser: user }}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
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
