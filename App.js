// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
// import AppNavigator from './src/app.navigator';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "./src/screens/Homepage";
import Signup from "./src/screens/Signup";
import { Map } from "./src/screens/Map";

const Stack = createNativeStackNavigator();

// const AppNavigator = StackNavigator({
//   Homepage: { screen: Homepage },
//   Signup: { screen: Signup },
// });

export default function App() {
  const { landscape } = useDeviceOrientation();

  const handlePress = () => {
    console.log("Pressed");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',

    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
