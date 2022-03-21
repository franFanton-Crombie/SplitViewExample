import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile/Profile';
import Home from './screens/Home/Home';
import Message from './screens/Message/Message';
const Tab = createBottomTabNavigator();

const iconMap = {
  Home: require('./assets/home.png'),
  Message: require('./assets/message.png'),
  Profile: require('./assets/user.png'),
};

const navigatorProps = {
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
  },
  screenOptions: ({route}) => ({
    tabBarIcon: ({size, focused}) => (
      <Image
        source={iconMap[route.name]}
        style={{
          width: 30,
          height: 30,
          opacity: focused ? 1 : 0.5,
        }}
      />
    ),
  }),
};

function TabNavigator() {
  return (
    <Tab.Navigator {...navigatorProps}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
