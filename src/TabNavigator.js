import * as React from 'react';
import {Text, Image, Switch, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AlignCenter from './components/AlignCenter';
import {useIsTablet} from './IsTabletContext';
import Profile from './screens/Profile';
import SplitScreen from './SplitScreen';
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const [value, setValue] = useIsTablet();

  return (
    <AlignCenter>
      <Text>Home</Text>
      <Text>isTable: </Text>
      <Switch value={value} onValueChange={setValue} />
    </AlignCenter>
  );
};

const iconMap = {
  Home: require('./assets/home.png'),
  Split: require('./assets/message.png'),
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
        style={{width: size, height: size, opacity: focused ? 1 : 0.5}}
      />
    ),
  }),
};

function TabNavigator() {
  return (
    <Tab.Navigator {...navigatorProps}>
      <Tab.Screen name="Split" component={SplitScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
