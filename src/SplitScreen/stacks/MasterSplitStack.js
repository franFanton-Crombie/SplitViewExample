import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../screens/Profile';
import {
  PROFILE_SCREEN,
  MAINTENANCE_SCREEN,
  MENUVERTICAL_SCREEN,
} from '../consts';
import withSystemBackFix from '../withSystemBackFix';
import Maintenance from '../../screens/Maintenance';
import MenuVertical from '../../screens/MenuVertical';

const MasterStack = createStackNavigator();

const screens = [
  {
    name: MENUVERTICAL_SCREEN,
    component: withSystemBackFix(MenuVertical),
    // options: {
    //   headerRight: () => <Button onPress={pushChatsFilters} title="Filters" />,
    // },
  },
  // EN DUDA SI VA O NO ACA LA SCREEN PROFILE
  {name: PROFILE_SCREEN, component: withSystemBackFix(Profile)},
  {name: MAINTENANCE_SCREEN, component: withSystemBackFix(Maintenance)},
];

const MasterSplitStack = () => (
  <MasterStack.Navigator initialRouteName="Profile">
    {/* {screens.map(props => (
      <MasterStack.Screen key={props.name} {...props} />
    ))} */}

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
  </MasterStack.Navigator>
);

export default MasterSplitStack;
