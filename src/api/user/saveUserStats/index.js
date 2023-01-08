import AsyncStorage from '@react-native-community/async-storage';
import { USER_COMPLETED_TODOS_COUNT, USER_LVL, USER_XP } from '../constants';

export const setUserXPApi = async (amount) => {
  try {
    await AsyncStorage.setItem(USER_XP, String(amount));
    return true;
  } catch (err) {
    console.log('setUserXP(): ', err);
    return false;
  }
};

export const setUserCompletedTodosCountApi = async (amount) => {
  try {
    await AsyncStorage.setItem(USER_COMPLETED_TODOS_COUNT, String(amount));
    return true;
  } catch (err) {
    console.log('setUserCompletedTodosCount(): ', err);
    return false;
  }
};

export const setUserLVLApi = async (amount) => {
  try {
    await AsyncStorage.setItem(USER_LVL, String(amount));
    return true;
  } catch (err) {
    console.log('setUserLVL(): ', err);
    return false;
  }
};
