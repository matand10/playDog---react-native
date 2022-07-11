import { StyleSheet, SafeAreaView, Platform, StatusBar, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
// import AppNavigator from './src/app.navigator';
import Homepage from './src/screens/Homepage';

import NavigationBar from './src/cmps/NavigationBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {


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
    height: '100%',

    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});