import React from 'react';
import {Button} from 'react-native-paper';

const AppleLogin = () => {
  return (
    <Button icon="apple" onPress={() => console.log('Pressed')}>
      Continue with apple
    </Button>
  );
};

export default AppleLogin;
