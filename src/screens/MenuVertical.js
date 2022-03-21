import * as React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {
  pushMessageScreen,
  pushHomeScreen,
  pushProfileScreen,
} from '../SplitScreen/navigation';

const MenuVertical = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'column',
          margin: 5,
          alignItems: 'center',
        }}
        onPress={() => {
          pushHomeScreen();
        }}>
        <Image
          source={require('../assets/home.png')}
          style={{
            width: 50,
            height: 50,
            opacity: 0.5,
          }}
        />
        <View
          style={{
            alignItems: 'center',
            padding: 5,
          }}>
          <Text>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'column',
          margin: 5,
          alignItems: 'center',
        }}
        onPress={() => pushMessageScreen()}>
        <Image
          source={require('../assets/message.png')}
          style={{
            width: 50,
            height: 50,
            opacity: 0.5,
          }}
        />
        <View
          style={{
            alignItems: 'center',
            padding: 5,
          }}>
          <Text>Message</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'column',
          margin: 5,
          alignItems: 'center',
        }}
        onPress={() => pushProfileScreen()}>
        <Image
          source={require('../assets/user.png')}
          style={{
            width: 50,
            height: 50,
            opacity: 0.5,
          }}
        />
        <View
          style={{
            alignItems: 'center',
            padding: 5,
          }}>
          <Text>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuVertical;
