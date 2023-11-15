import React from 'react';
// import AuthStack from './stacks/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './stacks/HomeStack';

const RootRouter = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default RootRouter;
