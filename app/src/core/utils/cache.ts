import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

import { expiryInMinutes } from '../configs/cache';

const prefix = '@storage_';

const storeData = async (key: string, value: Object) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(
      prefix + key.toLowerCase(),
      JSON.stringify(item)
    );
  } catch (e) {
    console.error(e);
  }
};

const isExpired = (item: any) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, 'minutes') > expiryInMinutes;
}

const getData = async (key: string) => {
  try {
    const jsonString = await AsyncStorage.getItem(prefix + key.toLowerCase());
    if (!jsonString) return null;

    const item = JSON.parse(jsonString);
    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key.toLowerCase());
      return null;
    }

    return item.value;
  } catch (e) {
    console.error(e);
  }
};

export default {
  storeData,
  getData,
};
