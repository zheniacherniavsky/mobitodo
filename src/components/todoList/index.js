import Todo from 'components/todo';
import { Box, ScrollView, useColorMode, VStack } from 'native-base';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const TodoList = (props) => {
  const { gap = 1, todos = [] } = props;

  const { colorMode } = useColorMode();

  return (
    <ScrollView>
      <GestureHandlerRootView>
        <VStack>
          {todos && !!todos.length ? (
            todos.map((todo) => (
              <Todo key={todo.id} todo={todo} containerMargin={gap} />
            ))
          ) : (
            <Box
              mh={54}
              borderRadius={'md'}
              bg={colorMode === 'dark' ? 'coolGray.900' : 'warmGray.200'}
              m={gap}
              mb={0}
              py={4}
              px={4}
              alignItems={'center'}
              opacity={0.6}
            >
              Currenty you don't have any todos!
            </Box>
          )}
        </VStack>
      </GestureHandlerRootView>
    </ScrollView>
  );
};

export default TodoList;
