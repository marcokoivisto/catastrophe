import { AsyncStorage } from "react-native";

const storage = {
  get: async key => {
    const data = await AsyncStorage.getItem(key);

    if (data) {
      const json = JSON.parse(data);

      return json.data;
    }

    return null;
  },

  set: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify({ data: value }));
  }
};

export default storage;
