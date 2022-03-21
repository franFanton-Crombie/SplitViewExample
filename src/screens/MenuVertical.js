import * as React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {pushChatScreen, pushmaintenanceScreen} from '../SplitScreen/navigation';

const MenuVertical = () => {
  const onPress = () => pushChatScreen({userId: '1'});
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
        onPress={onPress}>
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
          <Text>AIRCRAFT</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: 'column',
          margin: 5,
          alignItems: 'center',
        }}
        onPress={() => pushmaintenanceScreen()}>
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
          <Text>MAINTENANCE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'column',
          margin: 5,
          alignItems: 'center',
        }}
        onPress={onPress}>
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
          <Text>CALENDAR</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'column',
          margin: 5,
          alignItems: 'center',
        }}
        onPress={onPress}>
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
          <Text>REPORT</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'column',
          margin: 5,
          alignItems: 'center',
        }}
        onPress={onPress}>
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
          <Text>MORE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuVertical;
