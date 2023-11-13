import {Platform, View} from 'react-native';
import React from 'react';
import {FormInterface} from '../common/types/FormInterface';
import DynamicForm from '../common/dynamicForm';
import {commonStyleSheet} from '../common/styles';
import GoogleLogin from './GoogleLogin';
import AppleLogin from './AppleLogin';

let formData: FormInterface = {
  title: 'Register',
  subTitle: "Let's get you started!",
  formFields: [
    {
      controlType: 'text',
      key: 'fullName',
      label: 'Full Name',
      required: true,
    },
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

const SignupForm = () => {
  const handleLogin = (data: FormInterface) => {
    console.log(data);
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

export default SignupForm;
