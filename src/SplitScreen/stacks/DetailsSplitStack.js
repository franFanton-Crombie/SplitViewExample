import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {setDetailsNavigator} from '../../navigation/detailsNavigator';
import Maintenance from '../../screens/Maintenance/Maintenance';
import Profile from '../../screens/Profile/Profile';
import Home from '../../screens/Home/Home';
import Message from '../../screens/Message/Message';

const DetailsStack = createStackNavigator();

const DetailsSplitStack = () => (
  <NavigationContainer
    /*
     * Ignore exception when containers are nested within another
     * See: https://github.com/react-navigation/react-navigation/commit/d4072e7d885222bc14f33734008f2bd10ff78bc4
     * */
    independent
    ref={setDetailsNavigator}>
    <DetailsStack.Navigator initialRouteName="Home">
      <DetailsStack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home'}}
      />
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
      <DetailsStack.Screen
        name="Message"
        component={Message}
        options={{title: 'Message'}}
      />
    </DetailsStack.Navigator>
  </NavigationContainer>
);

export default DetailsSplitStack;
