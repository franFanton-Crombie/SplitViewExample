import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import {isIpad} from '../helpers/constants';
import PruebaScreen from './screens/Prueba';
import MaintenanceScreen from './screens/Maintenance';
import SplitScreen from './SplitScreen';
import {NavigationContainer} from '@react-navigation/native';
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
    </NavigationContainer>
  );
}

export default RootStack;
