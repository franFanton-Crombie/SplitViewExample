import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {setDetailsNavigator} from '../../navigation/detailsNavigator';
import Profile from '../../screens/Profile';

import Maintenance from '../../screens/Maintenance';

const DetailsStack = createStackNavigator();

const DetailsSplitStack = () => (
  <NavigationContainer
    /*
     * Ignore exception when containers are nested within another
     * See: https://github.com/react-navigation/react-navigation/commit/d4072e7d885222bc14f33734008f2bd10ff78bc4
     * */
    independent
    ref={setDetailsNavigator}>
    <DetailsStack.Navigator initialRouteName="Profile">
      <DetailsStack.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
      <DetailsStack.Screen
        name="Maintenance"
        component={Maintenance}
        options={{title: 'Maintenance'}}
      />
    </DetailsStack.Navigator>
  </NavigationContainer>
);

export default DetailsSplitStack;
