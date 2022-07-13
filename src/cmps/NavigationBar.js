import * as React from 'react';
import { StyleSheet } from 'react-native';


function RootNavigator() {
    return (
        <View>
            <Text>Hello from nav</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'yellow',
    }
})

export default NavigationBar;