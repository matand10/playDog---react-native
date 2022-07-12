import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, Button } from "react-native";
import { userService } from "../services/userService";

const Profile = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  const onSignout = () => {
    userService.signout();
    navigation.push("Homepage");
  };

  return (
    <ScrollView>
      {/* <View>{user.email}</View> */}
      <Button style={styles.button} onPress={() => onSignout}>
        Signout
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
