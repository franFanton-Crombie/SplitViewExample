import React from 'react';
import RootStack from './RootStack';
import {IsTabletContextProvider} from './IsTabletContext';

const App = () => {
  return (
    <IsTabletContextProvider>
      <RootStack />
    </IsTabletContextProvider>
  );
};

export default App;
