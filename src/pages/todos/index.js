import Todo from 'components/todo';
import { ScrollView, VStack } from 'native-base';
import React from 'react';

const Todos = () => {
  return (
    <ScrollView>
      <VStack px={4}>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </VStack>
    </ScrollView>
  );
};

export default Todos;
