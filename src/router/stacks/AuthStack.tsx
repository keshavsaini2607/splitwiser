import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './Onboarding';
import Auth from '../../screens/auth/Auth';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
}
