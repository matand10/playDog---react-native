import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Button
} from "react-native";
import { userService } from "../services/userService";

const Profile = ({ navigation, route }) => {
  const [user, setUser] = useState(null)
  const onSignout = async () => {
    await userService.signout();
    navigation.push("Homepage");
  };

  useEffect(() => {
    const { currentUser } = route.params;
    setUser(currentUser)
  }, [])

  if (!user) return <Text>Loading...</Text>
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text>{user.username}</Text>
        <Button title="Signout" onPress={onSignout} style={styles.button} />
      </View>
      <View style={styles.imgsContainer}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
  },
  button: {
    fontSize: 20,
    color: "white",
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: "#c01c00",
    padding: 8,
    textAlign: "center",
  },
  profileHeader: {
    flex: 1,
    // backgroundColor: 'blue'
  },
  imgsContainer: {
    flex: 1,
    // backgroundColor: 'red'
  }
});

export default Profile;
