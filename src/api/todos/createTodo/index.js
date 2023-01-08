import AsyncStorage from '@react-native-community/async-storage';
import { TODOS } from '../constants';
import { getTodosAPI } from '../getTodos';

export const createTodoAPI = async (todo) => {
  if ('shortName' in todo && 'description' in todo && 'xp' in todo) {
    try {
      const todos = (await getTodosAPI()) || [];

      const lastId = todos.sort((a, b) => b.id - a.id)[0]?.id || 0;

      const updatedTodo = {
        ...todo,
        createdAt: new Date(),
        id: lastId + 1,
      };

      todos.push(updatedTodo);

      const todosString = JSON.stringify(todos);

      await AsyncStorage.setItem(TODOS, todosString);

      return true;
    } catch (err) {
      console.log('createTodo(): ', err);

      return false;
    }
  } else {
    console.log('createTodo(): todo object is not valid');

    return false;
  }
};
