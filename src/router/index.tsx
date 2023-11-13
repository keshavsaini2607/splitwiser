import React from 'react';
import AuthStack from './stacks/AuthStack';
import {NavigationContainer} from '@react-navigation/native';

const RootRouter = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default RootRouter;
