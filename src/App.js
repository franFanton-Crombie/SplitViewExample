import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './RootStack';
import {setMasterNavigator} from './navigation/masterNavigator';
import {IsTabletContextProvider} from './IsTabletContext';

const App = () => {
  return (
    <IsTabletContextProvider>
      <NavigationContainer ref={setMasterNavigator}>
        <RootStack />
      </NavigationContainer>
    </IsTabletContextProvider>
  );
};

export default App;
