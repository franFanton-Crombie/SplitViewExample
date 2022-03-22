import * as React from 'react';
import {Dimensions, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile/Profile';
import Home from './screens/Home/Home';
import Message from './screens/Message/Message';
import HomeExample from './screens/Home/HomeExample';
import MessageExample from './screens/Message/MessageExample';
import ProfileExample from './screens/Profile/ProfileExample';
import MyTabBar from './TabBar';
import AircraftTabBar from './assets/TabBar/AircraftTabBar';
import Header from './components/Header';
import ReportTabBar from './assets/TabBar/ReportTabBar';
import MoreTabBar from './assets/TabBar/MoreTabBar';
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={MyTabBar}
      initialRouteName="Login"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14},
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {height: Dimensions.get('screen').height - 750},
        header: ({options}) => {
          return <Header text={options.title} canGoBack={options.back} />;
        },
      }}
      backBehavior="history">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <AircraftTabBar color={color} size={size} />
          ),
          title: 'Home',
          back: false,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({color, size}) => (
            <ReportTabBar color={color} size={size} />
          ),
          title: 'Message',
          back: false,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <MoreTabBar color={color} size={size} />
          ),
          title: 'Profile',
          back: false,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="HomeExample"
        component={HomeExample}
        options={{
          title: 'Home Example',
        }}
      />
      <Tab.Screen
        name="MessageExample"
        component={MessageExample}
        options={{
          title: 'Message Example',
        }}
      />
      <Tab.Screen
        name="ProfileExample"
        component={ProfileExample}
        options={{
          title: 'Profile Example',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
