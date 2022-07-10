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
  ImageBackground
} from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
// import AppNavigator from './src/app.navigator';
import Homepage from './src/screens/Homepage';



export default function App() {
  const { landscape } = useDeviceOrientation()

  const handlePress = () => {
    console.log('Pressed');
  }


  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <AppNavigator /> */}
      <Homepage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  img: {
    width: '100%',
    height: '100%'
  }
});
