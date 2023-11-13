import {Platform, View} from 'react-native';
import React from 'react';
import {FormInterface} from '../common/types/FormInterface';
import DynamicForm from '../common/dynamicForm';
import AppleLogin from './AppleLogin';

let formData: FormInterface = {
  title: 'Login',
  subTitle: 'Login with your credentials',
  formFields: [
    {
      controlType: 'text',
      key: 'email',
      label: 'Email',
      required: true,
    },
    {
      controlType: 'password',
      key: 'password',
      label: 'Password',
      required: true,
    },
  ],
};

const LoginForm = () => {
  const handleLogin = (data: FormInterface) => {
    console.log(data);
  };
  return (
    <View>
      <DynamicForm data={formData} submit={handleLogin} />
      <View>{Platform.OS === 'ios' && <AppleLogin />}</View>
    </View>
  );
};

export default LoginForm;
