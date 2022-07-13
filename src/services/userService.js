import { dbService } from "./db.service.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageService } from "./storage.service.js";

export const userService = {
  getUserById,
  login,
  signout,
  signup,
};

const KEY = "USERS";

async function getUserById(userId) {
  const users = await dbService.query(KEY);
  return users.find((user) => user._id === userId);
}

async function signup(user) {
  user.dogs = [];
  user.chats = [];
  user.contacts = [];
  user.parks = [];
  user.trips = [];
  user = await dbService.post(KEY, user);
  await AsyncStorage.setItem("LOGIN", JSON.stringify(user));
  return user;
}

async function login(email, password) {
  const users = await dbService.query(KEY);
  if (!users.length) {
    return undefined;
  }
  let user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) return undefined;
  else storageService.save("LOGIN", user);
  return user;
}

async function signout() {
  await AsyncStorage.removeItem("LOGIN");
}
