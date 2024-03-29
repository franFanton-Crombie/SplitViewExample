import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import {isIpad} from '../helpers/constants';
import SplitScreen from './SplitScreen';
import {NavigationContainer} from '@react-navigation/native';
import Maintenance from './screens/Maintenance/Maintenance';
import Message from './screens/Message/Message';
import Profile from './screens/Profile/Profile';
import Home from './screens/Home/Home';
import HomeExample from './screens/Home/HomeExample';
import MessageExample from './screens/Message/MessageExample';
import ProfileExample from './screens/Profile/ProfileExample';
const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isIpad() ? (
          <Stack.Screen
            name="Split"
            component={SplitScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="Maintenance"
          component={Maintenance}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen name="HomeExample" component={HomeExample} />
        <Stack.Screen name="MessageExample" component={MessageExample} />
        <Stack.Screen name="ProfileExample" component={ProfileExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
