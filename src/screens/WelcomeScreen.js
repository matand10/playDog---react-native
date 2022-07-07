import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require('../assets/img/background.jpg')}
            style={styles.background} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/img/logo-red.png')} />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginBtb}></View>
            <View style={styles.registerBtn}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginBtb: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerBtn: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    }
})

export default WelcomeScreen;