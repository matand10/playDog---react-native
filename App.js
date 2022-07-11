import { StyleSheet, SafeAreaView, Platform, StatusBar, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';

import NavigationBar from './src/cmps/NavigationBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {


  return (
    <SafeAreaProvider style={styles.container}>
      {/* <NavigationBar /> */}
      {/* <StatusBar /> */}
      <Text>Hello</Text>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
