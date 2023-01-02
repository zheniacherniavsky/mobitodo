import TodoList from 'components/todoList';
import { Box, useColorMode } from 'native-base';
import React from 'react';

const Todos = () => {
  const { colorMode } = useColorMode();
  return (
    <Box flex={1} bg={colorMode === 'dark' ? 'coolGray.800' : 'warmGray.50'}>
      <TodoList gap={4} />
    </Box>
  );
};

export default Todos;
