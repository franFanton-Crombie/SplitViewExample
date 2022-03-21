import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import {isIpad} from '../helpers/constants';
import {useEffect} from 'react';
import {useState} from 'react';
import PruebaScreen from './screens/Prueba';
import MaintenanceScreen from './screens/Maintenance';
import SplitScreen from './SplitScreen';
const Stack = createStackNavigator();

function RootStack() {
  const [ipad, setIpad] = useState(false);
  useEffect(() => {
    const ipad = isIpad();
    if (ipad) setIpad(true);
  }, []);
  return (
    <Stack.Navigator initialRouteName="Main">
      {!ipad ? (
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Profile"
          component={SplitScreen}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name="Prueba"
        component={PruebaScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Maintenance"
        component={MaintenanceScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
