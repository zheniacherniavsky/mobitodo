import Todo from 'components/todo';
import { VStack } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

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
