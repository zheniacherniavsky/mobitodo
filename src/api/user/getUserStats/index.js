import AsyncStorage from '@react-native-community/async-storage';
import { USER_COMPLETED_TODOS_COUNT, USER_LVL, USER_XP } from '../constants';

export const getUserXPApi = async () => {
  let userXP = 0;
  try {
    userXP = await AsyncStorage.getItem(USER_XP);
  } catch (err) {
    console.log('getUserXPApi(): ', err);
  }
  return Number(userXP || 0);
};

export const getUserCompletedTodosCountApi = async () => {
  let completedTodosCount = 0;
  try {
    completedTodosCount = await AsyncStorage.getItem(
      USER_COMPLETED_TODOS_COUNT
    );
  } catch (err) {
    console.log('getUserCompletedTodosCount(): ', err);
  }

  return Number(completedTodosCount || 0);
};

export const getUserLVLApi = async () => {
  let userLVL = 0;
  try {
    userLVL = await AsyncStorage.getItem(USER_LVL);
  } catch (err) {
    console.log('getUserLVLApi(): ', err);
  }

  return Number(userLVL || 0);
};
