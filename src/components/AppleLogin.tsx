import React from 'react';
import {Button} from 'react-native-paper';
import {commonStyleSheet} from '../common/styles';

const AppleLogin = () => {
  return (
    <Button
      icon={'apple'}
      onPress={() => console.log('Pressed')}
      textColor="#272829"
      style={commonStyleSheet.borderButton}>
      Continue with apple
    </Button>
  );
};

export default AppleLogin;
