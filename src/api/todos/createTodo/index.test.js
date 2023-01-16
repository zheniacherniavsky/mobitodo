const {
  default: AsyncStorage,
} = require('@react-native-community/async-storage');
const { createTodoAPI } = require('.');
const { TODOS } = require('../constants');

it('createTodoAPI(): todo create test', async () => {
  const todo = {
    shortName: 'test',
    description: 'test',
    xp: 10,
  };

  const initialValue = await AsyncStorage.getItem(TODOS);
  expect(initialValue).toBe(null);

  await createTodoAPI(todo);

  const todosString = await AsyncStorage.getItem(TODOS);
  const todos = JSON.parse(todosString) || null;

  expect(todos).not.toBeNull();
  expect(todos.length).toBeGreaterThan(0);
  expect(todos[0].shortName).toBe(todo.shortName);
});
