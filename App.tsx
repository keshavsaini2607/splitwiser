import 'react-native-gesture-handler';
import React from 'react';
import RootRouter from './src/router';
import {PaperProvider} from 'react-native-paper';
import {Amplify} from 'aws-amplify';
import amplifyConfig from './src/amplifyconfiguration.json';

Amplify.configure(amplifyConfig);

const App = () => {
  return (
    <PaperProvider>
      <RootRouter />
    </PaperProvider>
  );
};

export default App;
