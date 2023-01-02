import {
  Badge,
  Box,
  Button,
  CheckIcon,
  DeleteIcon,
  HStack,
  Text,
  useColorMode,
  WarningIcon,
} from 'native-base';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const Todo = (props) => {
  const { containerMarginBottom = 0 } = props;

  const { colorMode } = useColorMode();
  const [todoHeight, setTodoHeight] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const RightActionsComponent = () => {
    return (
      <Box h={todoHeight} justifyContent={'center'}>
        <Button.Group ml={2}>
          <Button h={'100%'} variant="ghost" onPress={() => {}} margin={0}>
            <DeleteIcon />
          </Button>
          <Button h={'100%'} variant="ghost" onPress={() => {}} margin={0}>
            <WarningIcon />
          </Button>
          <Button h={'100%'} variant="ghost" onPress={() => {}} margin={0}>
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

  return (
    <View>
      <Swipeable
        onSwipeableOpen={() => {}}
        renderRightActions={() => <RightActionsComponent />}
      >
        <Pressable onPress={handlePress}>
          {({ pressed }) => {
            const colorModeVariant = pressed ? 300 : 200;
            return (
              <Box
                onLayout={handleLayout}
                mh={54}
                borderRadius={'md'}
                bg={`${colorMode}.${colorModeVariant}`}
                mb={containerMarginBottom}
              >
                <HStack
                  py={2}
                  px={2}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Text fontSize={'lg'} maxW={'70%'} numberOfLines={1}>
                    Todo Name Todo Name Todo Name
                  </Text>
                  <Box flexBasis={'20%'} h={'100%'}>
                    <Badge colorScheme={'success'}>10 XP</Badge>
                  </Box>
                </HStack>
                <Text
                  flexBasis={'80%'}
                  pb={2}
                  px={2}
                  numberOfLines={expanded ? 0 : 2}
                >
                  Some Todo Text Some Todo Text Some Todo Text Some Todo Text
                  Some Todo Text Some Todo Text Some Todo TextSome Todo Text
                  Some Todo Text Some Todo Text Some Todo Text Some Todo Text
                </Text>
              </Box>
            );
          }}
        </Pressable>
      </Swipeable>
    </View>
  );
};

export default Todo;
