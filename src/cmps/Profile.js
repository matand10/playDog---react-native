import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { userService } from "../services/userService";

const Profile = ({ navigation }) => {
  // useEffect(() => {
  //   console.log(props);
  // }, []);

  const onSignout = async () => {
    await userService.signout();
    navigation.push("Homepage");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={onSignout}>
          <Text style={styles.button}>Signout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
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
});

export default Profile;
