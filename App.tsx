import 'react-native-gesture-handler';
import React from 'react';
import RootRouter from './src/router';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <RootRouter />
    </PaperProvider>
  );
};

export default App;
