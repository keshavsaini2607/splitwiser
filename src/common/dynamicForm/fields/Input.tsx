import React from 'react';
import {TextInput} from 'react-native-paper';

type props = {
  formField: any;
  controllerField: any;
};

const FormInput = ({formField, controllerField}: props) => {
  return (
    <TextInput
      key={formField.key}
      placeholder={formField.key}
      value={controllerField.value}
      onBlur={controllerField.onBlur}
      onChangeText={valueChange => controllerField.onChange(valueChange)}
    />
  );
};

export default FormInput;
