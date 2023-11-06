import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/AuthStack';

const RootRouter = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default RootRouter;
