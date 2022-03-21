import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../screens/Profile';
import Maintenance from '../../screens/Maintenance';
import Home from '../../screens/Home/Home';
import Message from '../../screens/Message/Message';

const MasterStack = createStackNavigator();

const MasterSplitStack = () => (
  <MasterStack.Navigator initialRouteName="Home">
    <MasterStack.Screen
      name="Home"
      component={Home}
      options={{title: 'Home'}}
    />
    <MasterStack.Screen
      name="Profile"
      component={Profile}
      options={{title: 'Profile'}}
    />
    <MasterStack.Screen
      name="Maintenance"
      component={Maintenance}
      options={{title: 'Maintenance'}}
    />
    <MasterStack.Screen
      name="Message"
      component={Message}
      options={{title: 'Message'}}
    />
    <MasterStack.Screen
      name="Profile"
      component={Profile}
      options={{title: 'Profile'}}
    />
  </MasterStack.Navigator>
);

export default MasterSplitStack;
