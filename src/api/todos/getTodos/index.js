import AsyncStorage from '@react-native-community/async-storage';
import { TODOS } from '../constants';

export const getTodosAPI = async () => {
  let todos = [];
  try {
    const response = await AsyncStorage.getItem(TODOS);
    todos = JSON.parse(response) || [];
    todos = todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (err) {
    console.log('getTodosApi(): ', err);
  }

  return todos;
};
