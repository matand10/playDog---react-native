import * as React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import colors from '../config/colors';
// import RNLocation from 'react-native-location';

export function Map({ navigation }) {


  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <GoogleMap />
      </View>
      <View style={styles.trackBtn}>
        <Button title="Start Tracking" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  map: {
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
  },
  mapContainer: {
    flex: 5,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  trackBtn: {
    margin: 20,
    backgroundColor: colors.primary,
  },
});

const GoogleMap = () => {
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
  )
}




// import * as React from "react";
// import MapView from "react-native-maps";
// import { StyleSheet, Text, View, Dimensions } from "react-native";

// export function Map(user) {
//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });