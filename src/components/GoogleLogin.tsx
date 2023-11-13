import React from 'react';
import {Button} from 'react-native-paper';
import {commonStyleSheet} from '../common/styles';

const GoogleLogin = () => {
  return (
    <Button
      icon={'google'}
      onPress={() => console.log('Pressed')}
      textColor="#272829"
      style={commonStyleSheet.borderButton}>
      Continue with google
    </Button>
  );
};

export default GoogleLogin;
