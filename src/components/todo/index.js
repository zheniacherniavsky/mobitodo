import { deleteTodoAPI } from 'api/todos/deleteTodo';
import { ApplicationContext } from 'contexts';
import {
  AddIcon,
  Badge,
  Box,
  Button,
  CheckIcon,
  DeleteIcon,
  HStack,
  MinusIcon,
  Text,
  useColorMode,
  VStack,
  WarningIcon,
} from 'native-base';
import { TodosLocalContext } from 'pages/todos';
import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Pressable, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const Todo = (props) => {
  const { containerMargin = 0, todo = {} } = props;

  const { deleteTodo = () => {} } = useContext(TodosLocalContext);

  const { colorMode } = useColorMode();
  const [todoHeight, setTodoHeight] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const {
    userStats: { addUserXP = () => {} },
  } = useContext(ApplicationContext);

  const RightActionsComponent = () => {
    const finishTodo = async () => {
      const response = await deleteTodo(todo.id);
      if (response) {
        addUserXP(todo.xp);
      }
    };

    return (
      <Box
        style={{ height: todoHeight }}
        m={containerMargin}
        ml={0}
        justifyContent={'center'}
      >
        <Button.Group ml={2}>
          <Button
            h={'100%'}
            variant="ghost"
            onPress={() => deleteTodo(todo.id)}
            margin={0}
          >
            <DeleteIcon />
          </Button>
          <Button
            h={'100%'}
            disabled
            variant="ghost"
            onPress={() => {}}
            margin={0}
            opacity={0.2}
          >
            <WarningIcon />
          </Button>
          <Button
            h={'100%'}
            variant="ghost"
            onPress={() => finishTodo()}
            margin={0}
          >
            <CheckIcon />
          </Button>
        </Button.Group>
      </Box>
    );
  };

  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setTodoHeight(height);
  };

  const handlePress = () => {
    setExpanded((prev) => !prev);
  };

  return todo && !!Object.values(todo).length ? (
    <View>
      <Swipeable
        onSwipeableOpen={() => {}}
        renderRightActions={() => <RightActionsComponent />}
      >
        <Box
          onLayout={handleLayout}
          mh={54}
          borderRadius={'md'}
          bg={colorMode === 'dark' ? 'coolGray.900' : 'warmGray.200'}
          m={containerMargin}
          mb={0}
        >
          <HStack
            py={2}
            px={2}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Text fontSize={'lg'} maxW={'70%'} numberOfLines={1}>
              {todo.shortName}
            </Text>
            <Box flexBasis={'20%'} h={'100%'}>
              <Badge colorScheme={'success'}>{`${todo.xp} XP`}</Badge>
            </Box>
          </HStack>
          <HStack
            alignItems={'flex-end'}
            justifyContent={'space-between'}
            pb={2}
            px={2}
          >
            <VStack flexBasis={'90%'}>
              <Text numberOfLines={expanded ? 0 : 2}>
                {todo.description}
                {/* {`Click on the plus icon in the lower right corner to show additional information about the task.\n\nNow you able to see all text from your Todo 👍\n\nYou can earn your first XP, just swipe this todo to the left and select 'check' button 🎁`} */}
              </Text>
              {expanded && (
                <Text flexBasis={'90%'} mt={2} opacity={0.5}>
                  <FormattedMessage
                    id="todoCreatedAt"
                    defaultMessage={'created at: {date}'}
                    values={{
                      date: new Date(todo.createdAt).toLocaleDateString(),
                    }}
                  />
                </Text>
              )}
            </VStack>

            <Pressable onPress={handlePress}>
              <Box flexBasis={'10%'}>
                {expanded ? <MinusIcon /> : <AddIcon />}
              </Box>
            </Pressable>
          </HStack>
        </Box>
      </Swipeable>
    </View>
  ) : null;
};

export default Todo;
