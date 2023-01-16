const { createTodoAPI } = require('../createTodo');
const { deleteTodoAPI } = require('../deleteTodo');
const { getTodosAPI } = require('../getTodos');

it('todos: create get delete flow', async () => {
  let todos = await getTodosAPI();
  expect(todos).toStrictEqual([]);

  const todo = {
    shortName: 'test',
    description: 'test',
    xp: 10,
  };

  await createTodoAPI(todo);
  todos = await getTodosAPI();
  expect(todos).not.toStrictEqual([]);
  expect(todos.length).toBeGreaterThan(0);
  expect(todos[0].shortName).toBe(todo.shortName);

  const id = todos[0].id;

  await deleteTodoAPI(id);
  todos = await getTodosAPI();
  expect(todos).toStrictEqual([]);
});
