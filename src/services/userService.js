import { dbService } from "./db.service.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

async function login(name, password) {
  const users = await dbService.query(KEY);
  if (!users.length) {
  }
  let user = users.find(
    (user) => user.name === name && user.password === password
  );
  if (!user) return user;
  else sessionStorage.setItem(KEY, user._id);
  return user;
}

function signout() {
  sessionStorage.removeItem(KEY);
}
