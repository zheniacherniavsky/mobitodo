const {
  default: AsyncStorage,
} = require('@react-native-community/async-storage');
const { deleteTodoAPI } = require('.');
const { TODOS } = require('../constants');

it('deleteTodoAPI(): todo delete test', async () => {
  // id will be created automatically duting createTodoAPI(),
  // but here we testing only delete function
  const id = 1;

  const todo = {
    id,
    shortName: 'test',
    description: 'test',
    xp: 10,
  };

  const initialTodos = JSON.stringify([todo]);
  await AsyncStorage.setItem(TODOS, initialTodos);

  await deleteTodoAPI(id);

  const todosString = await AsyncStorage.getItem(TODOS);
  const todos = JSON.parse(todosString) || null;

  expect(todos).not.toBeNull();
  expect(todos.length).toBe(0);
});
