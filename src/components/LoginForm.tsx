import {Alert, Platform, View} from 'react-native';
import React from 'react';
import {FormInterface} from '../common/types/FormInterface';
import DynamicForm from '../common/dynamicForm';
import AppleLogin from './AppleLogin';
import GoogleLogin from './GoogleLogin';
import {commonStyleSheet} from '../common/styles';

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
  const handleLogin = async (data: any) => {
    try {
      console.log(data);
      // const response = await Auth.signIn(data.)
    } catch (error: any) {
      Alert.alert('Oops', error.message);
    }
  };
  return (
    <View>
      <DynamicForm data={formData} submit={handleLogin} />
      <View style={commonStyleSheet.verticalSpace}>
        <View style={commonStyleSheet.verticalSpace}>
          {Platform.OS === 'ios' && <AppleLogin />}
        </View>
        <View style={commonStyleSheet.verticalSpace}>
          <GoogleLogin />
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
