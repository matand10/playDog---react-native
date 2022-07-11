// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';


export function NavigationBar() {
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}
const Stack = createNativeStackNavigator();
function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={WelcomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'yellow',
    }
})

export default NavigationBar;