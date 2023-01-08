import AsyncStorage from '@react-native-community/async-storage';
import { TODOS } from '../constants';
import { getTodosAPI } from '../getTodos';

export const deleteTodoAPI = async (id) => {
  try {
    const todos = await getTodosAPI();
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    const boxedTodos = JSON.stringify(updatedTodos);
    await AsyncStorage.setItem(TODOS, boxedTodos);
    return true;
  } catch (err) {
    console.log('deleteTodoAPI(): ', err);
    return false;
  }
};
