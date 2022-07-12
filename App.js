import { StyleSheet, StatusBar, SafeAreaView } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "./src/screens/Homepage";
import Signup from "./src/screens/Signup";
import { Map } from "./src/screens/Map";
import Profile from "./src/screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",

    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
