import AsyncStorage from "@react-native-async-storage/async-storage";

export const storageService = {
  load: loadFromStorage,
  save: saveToStorage,
};

async function saveToStorage(key, value) {
  await AsyncStorage.setItem(key, JSON.stringify(value) || null);
}
async function loadFromStorage(key) {
  let data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}
