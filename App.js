import { StyleSheet, StatusBar, SafeAreaView } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "./src/screens/Homepage";
import Signup from "./src/screens/Signup";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
