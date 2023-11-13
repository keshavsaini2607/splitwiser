import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardCarousel from '../../screens/onboarding/OnboardCarousel';

const Stack = createStackNavigator();

export default function Onboarding() {
  return (
    <Stack.Navigator
      initialRouteName="onboarding"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="onboarding" component={OnboardCarousel} />
    </Stack.Navigator>
  );
}
