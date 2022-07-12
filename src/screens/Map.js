import * as React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export function Map() {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 32.109333,
                longitude: 34.855499,
                latitudeDelta: 1,
                longitudeDelta: 1,
            }}
        >
            <Marker coordinate={{
                latitude: 32.109333,
                longitude: 34.855499,
            }}
                pinColor="blue"
            >
                <Callout>
                    <Text>
                        Hello
                    </Text>
                </Callout>
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});