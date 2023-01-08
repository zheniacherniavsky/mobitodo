import AddTodo from 'components/addTodo';
import TodoList from 'components/todoList';
import { useTodos } from 'hooks/useTodos';
import { Box, useColorMode } from 'native-base';
import React, { createContext } from 'react';

export const TodosLocalContext = createContext();

const Todos = () => {
  const { colorMode } = useColorMode();
  const { todos, createTodo, deleteTodo } = useTodos();

  return (
    <TodosLocalContext.Provider
      value={{
        createTodo,
        deleteTodo,
      }}
    >
      <Box flex={1} bg={colorMode === 'dark' ? 'coolGray.800' : 'warmGray.50'}>
        <TodoList gap={4} todos={todos} />
        <AddTodo />
      </Box>
    </TodosLocalContext.Provider>
  );
};

export default Todos;
