const {
  default: AsyncStorage,
} = require('@react-native-community/async-storage');
const { getTodosAPI } = require('.');
const { TODOS } = require('../constants');

it('getTodo(): todo get test', async () => {
  const todo1 = {
    id: 1,
    shortName: 'test1',
    description: 'test',
    xp: 10,
    createdAt: new Date('01/01/2023'),
  };

  const todo2 = {
    id: 2,
    shortName: 'test2',
    description: 'test',
    xp: 10,
    createdAt: new Date('01/02/2023'),
  };

  const initialTodos = JSON.stringify([todo1, todo2]);
  await AsyncStorage.setItem(TODOS, initialTodos);

  const todos = await getTodosAPI();

  expect(todos).not.toBeNull();
  expect(todos.length).toBeGreaterThan(0);
  expect(todos[0].shortName).toBe(todo2.shortName); // sorting
});
