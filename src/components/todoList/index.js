import Todo from 'components/todo';
import { ScrollView, useColorMode, VStack } from 'native-base';
import React from 'react';

const TodoList = () => {
  const { colorMode } = useColorMode();
  const mockArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const todoListDefaultPadding = 4;

  return (
    <ScrollView>
      <VStack
        p={todoListDefaultPadding}
        bg={colorMode === 'dark' ? 'coolGray.800' : 'warmGray.50'}
      >
        {mockArray.map((key) => (
          <Todo
            key={key}
            containerMarginBottom={
              key !== mockArray[mockArray.length - 1]
                ? todoListDefaultPadding
                : 0
            }
          />
        ))}
      </VStack>
    </ScrollView>
  );
};

export default TodoList;
