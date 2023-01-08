import { createTodoAPI } from 'api/todos/createTodo';
import { deleteTodoAPI } from 'api/todos/deleteTodo';
import { getTodosAPI } from 'api/todos/getTodos';
import { useEffect, useState } from 'react';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const todosResponse = await getTodosAPI();

      setTodos(todosResponse);
    };

    getTodos();
  }, []);

  const createTodo = async (todoObj) => {
    await createTodoAPI(todoObj);

    const newTodos = await getTodosAPI();
    setTodos(newTodos);
  };

  const deleteTodo = async (todoId) => {
    const response = await deleteTodoAPI(todoId);

    const newTodos = await getTodosAPI();
    setTodos(newTodos);

    return response;
  };

  return { todos, createTodo, deleteTodo };
};
