import {
  Box,
  Button,
  FormControl,
  Input,
  Radio,
  ScrollView,
  TextArea,
} from 'native-base';
import React from 'react';

const AddTodoForm = (props) => {
  const {
    newTodo = {
      shortName: '',
      description: '',
      xp: 0,
    },
    setShortName = () => {},
    setDescription,
    setXP,
    submit = () => {},
    easyDiffucultyXP = 5,
    mediumDiffucultyXP = 10,
    hardDiffucultyXP = 15,
    errors,
    setErrors,
    ...locales
  } = props;

  const SHORT_NAME_MIN_LENGTH = 3;

  const validateShortName = () => {
    if (!newTodo.shortName) {
      setErrors((prev) => ({
        ...prev,
        shortName: locales.errorsRequiredField,
      }));
    } else if (newTodo.shortName.length < 3) {
      setErrors((prev) => ({
        ...prev,
        shortName: `${locales.fieldMinLength} ${SHORT_NAME_MIN_LENGTH}`,
      }));
    } else {
      if ('shortName' in errors) {
        setErrors((prev) => {
          delete prev.shortName;

          return prev;
        });
      }

      return true;
    }

    return false;
  };

  const validateDescription = () => {
    if (!newTodo.description) {
      setErrors((prev) => ({
        ...prev,
        description: locales.errorsRequiredField,
      }));
    } else {
      if ('description' in errors) {
        setErrors((prev) => {
          delete prev.description;

          return prev;
        });
      }

      return true;
    }

    return false;
  };

  const validateAndSubmit = () => {
    const validation = [];
    validation.push(validateShortName());
    validation.push(validateDescription());

    if (!validation.includes(false)) {
      submit();
      setErrors({});
    }
  };

  return (
    <Box p={4}>
      <ScrollView maxH={'700px'}>
        <FormControl isRequired isInvalid={'shortName' in errors}>
          <FormControl.Label>{locales.addTodoShortName}</FormControl.Label>
          <Input
            value={newTodo.shortName}
            onChangeText={setShortName}
            autoCapitalize={false}
            autoCorrect={false}
          />
          {!('shortName' in errors) && (
            <FormControl.HelperText>
              {`${locales.fieldMinLength} ${SHORT_NAME_MIN_LENGTH}`}
            </FormControl.HelperText>
          )}
          {'shortName' in errors && (
            <FormControl.ErrorMessage>
              {errors.shortName}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl mt={3} isInvalid={'description' in errors}>
          <FormControl.Label>{locales.addTodoDescription}</FormControl.Label>
          <TextArea
            isInvalid={'description' in errors}
            value={newTodo.description}
            onChangeText={setDescription}
            autoCapitalize={false}
            autoCorrect={false}
          />
          {'description' in errors && (
            <FormControl.ErrorMessage>
              {errors.description}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <Radio.Group
          value={newTodo.xp}
          onChange={setXP}
          mt={3}
          name="selectedDifficulty"
        >
          <Radio colorScheme={'emerald'} value={easyDiffucultyXP} my={1}>
            {locales.addTodoEasyDifficulty}
          </Radio>
          <Radio colorScheme={'warning'} value={mediumDiffucultyXP} my={1}>
            {locales.addTodoMediumDifficulty}
          </Radio>
          <Radio colorScheme={'red'} value={hardDiffucultyXP} my={1}>
            {locales.addTodoHardDifficulty}
          </Radio>
        </Radio.Group>
        <Button onPress={validateAndSubmit} mt={4}>
          {locales.addTodoSubmitButton}
        </Button>
      </ScrollView>
    </Box>
  );
};

export default AddTodoForm;
