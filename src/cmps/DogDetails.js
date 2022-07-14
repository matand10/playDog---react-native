import { View, Text, StyleSheet, Image, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

export const DogDetails = ({ selectedDog }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 125,
                useNativeDriver: false
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View style={{ opacity: fadeAnim }}>
            <View style={styles.container}>
                <View style={styles.card_template}>
                    <Image
                        style={styles.card_image}
                        source={{ url: selectedDog.photo }}
                    />
                    <View style={styles.text_container}>
                        <Text style={styles.card_title}>{selectedDog.name}</Text>
                    </View>
                </View>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
    },
    card_template: {
        width: 250,
        height: 250,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
    },
    card_image: {
        width: 250,
        height: 250,
        borderRadius: 10
    },
    text_container: {
        position: "absolute",
        width: 250,
        height: 30,
        bottom: 0,
        padding: 5,
        backgroundColor: "rgba(0,0,0, 0.3)",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    card_title: {
        color: "white",
    }
});
