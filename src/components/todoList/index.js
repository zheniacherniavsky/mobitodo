import Todo from 'components/todo';
import { ScrollView, VStack } from 'native-base';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const TodoList = (props) => {
  const { gap = 1 } = props;
  const mockArray = [1, 9, 10];

  return (
    <ScrollView>
      <GestureHandlerRootView>
        <VStack>
          {mockArray.map((key) => (
            <Todo
              key={key}
              containerMarginBottom={
                key !== mockArray[mockArray.length - 1] ? gap : 0
              }
            />
          ))}
        </VStack>
      </GestureHandlerRootView>
    </ScrollView>
  );
};

export default TodoList;
