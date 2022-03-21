import React from 'react';
import RootStack from './RootStack';
import {IsTabletContextProvider} from './IsTabletContext';

const App = () => {
  const state = React.useState(true);

  return (
    <IsTabletContextProvider value={state}>
      <RootStack />
    </IsTabletContextProvider>
  );
};

export default App;
