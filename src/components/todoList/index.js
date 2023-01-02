import Todo from 'components/todo';
import { ScrollView, VStack } from 'native-base';
import React from 'react';

const TodoList = () => {
  const mockArray = [1, 9, 10];
  const todoListDefaultPadding = 4;

  return (
    <ScrollView>
      <VStack p={todoListDefaultPadding}>
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
