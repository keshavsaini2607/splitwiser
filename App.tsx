import 'react-native-gesture-handler';
import React from 'react';
import RootRouter from './src/router';
import {PaperProvider, Text} from 'react-native-paper';
import {Amplify} from 'aws-amplify';
import amplifyConfig from './src/amplifyconfiguration.json';
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';
import {Pressable} from 'react-native';
import {commonStyleSheet} from './src/common/styles';
import {ThemeProvider} from '@aws-amplify/ui-react-native';

const theme = {
  tokens: {
    colors: {
      font: {
        primary: 'blue',
      },
    },
  },
};

Amplify.configure(amplifyConfig);

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context: any) => [context.user];

const SignOutButton = () => {
  const {user, signOut} = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={commonStyleSheet.primaryButton}>
      <Text style={commonStyleSheet.descriptionText}>
        Hello, {user.username}! Click here to sign out!
      </Text>
    </Pressable>
  );
};

const App = () => {
  return (
    <PaperProvider>
      <ThemeProvider theme={theme}>
        <RootRouter />
      </ThemeProvider>
      <SignOutButton />
    </PaperProvider>
  );
};

export default withAuthenticator(App);
