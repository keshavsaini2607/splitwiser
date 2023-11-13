import {TextInput, View} from 'react-native';
import * as React from 'react';
import {FormFieldInterface, FormInterface} from '../types/FormInterface';
import {useForm} from 'react-hook-form';
import CustomButton from '../../ui/CustomButton';
import {commonStyleSheet, formStyles} from '../styles';
import {Text} from 'react-native-paper';

type props = {
  data: FormInterface;
  submit: (data: any) => void;
};

const DynamicForm: React.FC<props> = ({data, submit}) => {
  const {register, handleSubmit} = useForm();

  return (
    <View>
      {data.formFields.map((formField: FormFieldInterface) => (
        <View key={formField.key} style={formStyles.formInputContainer}>
          <Text style={formStyles.formInputLabel}>{formField.label}</Text>
          <View style={formStyles.formInput}>
            <TextInput
              placeholder={formField.label}
              {...register(formField.key)}
            />
          </View>
        </View>
      ))}
      <View style={(commonStyleSheet.flexRow, commonStyleSheet.alignCenter)}>
        <CustomButton click={() => handleSubmit(submit)} title="Submit" />
      </View>
    </View>
  );
};

export default DynamicForm;
