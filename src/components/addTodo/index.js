import AddTodoForm from 'components/addTodoForm';
import { Center, Circle, Modal, Text } from 'native-base';
import { TodosLocalContext } from 'pages/todos';
import React, { useContext, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { Pressable } from 'react-native';

const AddTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const { createTodo = () => {} } = useContext(TodosLocalContext);

  const intl = useIntl();

  const EASY_DIFFICULTY = 5;
  const MEDIUM_DIFFICULTY = 10;
  const HARD_DIFFICULTY = 15;

  const initialNewTodoObject = {
    shortName: '',
    description: '',
    xp: EASY_DIFFICULTY,
  };

  const [newTodo, setNewTodo] = useState(initialNewTodoObject);

  const [setShortName, setDescription, setXP] = [
    (value) => setNewTodo((prev) => ({ ...prev, shortName: value })),
    (value) => setNewTodo((prev) => ({ ...prev, description: value })),
    (value) => setNewTodo((prev) => ({ ...prev, xp: value })),
  ];

  const submit = async () => {
    await createTodo(newTodo);
    setShowModal(false);
    setNewTodo(initialNewTodoObject);
  };

  const locales = useMemo(
    () => ({
      addTodoHeader: intl.formatMessage({
        id: 'addTodoHeader',
        defaultMessage: 'Add Todo',
      }),
      addTodoShortName: intl.formatMessage({
        id: 'addTodoShortName',
        defaultMessage: 'Short Name',
      }),
      addTodoDescription: intl.formatMessage({
        id: 'addTodoDescription',
        defaultMessage: 'Description',
      }),
      addTodoEasyDifficulty: intl.formatMessage(
        {
          id: 'addTodoEasyDifficulty',
          defaultMessage: 'Easy (+{xp} XP)',
        },
        {
          xp: EASY_DIFFICULTY,
        }
      ),
      addTodoMediumDifficulty: intl.formatMessage(
        {
          id: 'addTodoMediumDifficulty',
          defaultMessage: 'Medium (+{xp} XP)',
        },
        {
          xp: MEDIUM_DIFFICULTY,
        }
      ),
      addTodoHardDifficulty: intl.formatMessage(
        {
          id: 'addTodoHardDifficulty',
          defaultMessage: 'Hard (+{xp} XP)',
        },
        {
          xp: HARD_DIFFICULTY,
        }
      ),
      addTodoSubmitButton: intl.formatMessage({
        id: 'addTodoSubmitButton',
        defaultMessage: 'Submit',
      }),
      errorsRequiredField: intl.formatMessage({
        id: 'errorsRequiredField',
        defaultMessage: 'This field is required',
      }),
      fieldMinLength: intl.formatMessage({
        id: 'fieldMinLength',
        defaultMessage: 'Min length of this field is',
      }),
    }),
    [intl]
  );

  const modalOnClose = () => {
    setShowModal(false);
    setErrors({});
  };

  return (
    <>
      <Pressable onPress={() => setShowModal(true)}>
        {({ pressed }) => {
          return (
            <Circle
              w={16}
              h={16}
              bgColor={'green.500'}
              bottom={5}
              right={5}
              position={'absolute'}
              opacity={pressed ? 1 : 0.3}
            >
              <Center>
                <Text fontSize={40} lineHeight={40} fontWeight={'light'}>
                  +
                </Text>
              </Center>
            </Circle>
          );
        }}
      </Pressable>
      <Modal isOpen={showModal} onClose={modalOnClose}>
        <Modal.Content>
          <Modal.Header>{locales.addTodoHeader}</Modal.Header>
          <Modal.CloseButton />
          <AddTodoForm
            newTodo={newTodo}
            setShortName={setShortName}
            setDescription={setDescription}
            setXP={setXP}
            submit={submit}
            easyDiffucultyXP={EASY_DIFFICULTY}
            mediumDiffucultyXP={MEDIUM_DIFFICULTY}
            hardDiffucultyXP={HARD_DIFFICULTY}
            errors={errors}
            setErrors={setErrors}
            {...locales}
          />
        </Modal.Content>
      </Modal>
    </>
  );
};

export default AddTodo;
