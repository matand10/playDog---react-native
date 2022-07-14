import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
  Image,
  FlatList
} from "react-native";
import colors from "../config/colors";
import { userService } from "../services/userService";

const Profile = ({ navigation, route }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const { currentUser } = route.params;
    setUser(currentUser)
  }, [])

  const onSignout = async () => {
    await userService.signout();
    navigation.push("Homepage");
  };

  const createPosts = () => {
    let posts = []
    for (let i = 0; i < 12; i++) {
      posts.push({ postimage: `https://robohash.org/${i}?set=set1` })
    }
    return posts
  }

  const data = createPosts()
  if (!user) return <Text>Loading...</Text>
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerImg} source={require('../assets/img/userImg.png')} />
        <View style={styles.infoContainer}>
          <Text style={styles.post}>9</Text>
          <Text style={styles.postData}>Posts</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.post}>20</Text>
          <Text style={styles.postData}>Followers</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.post}>40</Text>
          <Text style={styles.postData}>Following</Text>
        </View>
      </View>
      <Text style={styles.text}>{user.username}</Text>
      <Pressable style={styles.editBtn}><Text style={styles.btnText}>Edit Profile</Text></Pressable>
      <Text style={styles.text}>Gallery</Text>
      <View style={styles.border} />
      <FlatList
        data={data}
        numColumns={3}
        horizontal={false}
        keyExtractor={(item, idx) => {
          return idx.toString()
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.galleryContainer}>
              <Image source={{ url: item.postimage }}
                style={styles.img} />
            </View>
          )
        }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white'
  },
  infoContainer: {
    alignItems: 'center',
    marginLeft: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10
  },
  headerImg: {
    height: 60,
    width: 60,
    backgroundColor: 'grey',
    borderRadius: 50,
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  post: {
    fontWeight: '400',
    fontSize: 20,
    color: 'blue',
    paddingHorizontal: 10,
    marginLeft: 10
  },
  postData: {
    fontSize: 20,
    color: 'grey',
    paddingHorizontal: 10
  },
  text: {
    fontSize: 18,
    color: 'black',
    paddingHorizontal: 10,
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  editBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.primary,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    marginBottom: 100,
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth, borderColor: 'grey',
  },
  galleryContainer: {
    flex: 1,
    minHeight: 150,
    width: '100%',
  },
  img: {
    aspectRatio: 1 / 1,
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
  }
});

export default Profile;
