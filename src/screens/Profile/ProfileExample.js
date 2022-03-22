import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import AlignCenter from '../../components/AlignCenter';

const ProfileExample = () => {
  const navigation = useNavigation();
  return (
    <AlignCenter>
      <Text
        style={{
          fontSize: 22,
          opacity: 0.6,
          padding: 10,
        }}>
        PROFILE EXAMPLE SCREEN
      </Text>
      <TouchableOpacity
        style={{borderRadius: 10, backgroundColor: 'red', padding: 10}}
        onPress={() => {
          navigation.navigate('HomeExample');
        }}>
        <Text style={{color: 'white'}}>Home Example</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderRadius: 10, backgroundColor: 'blue', padding: 10}}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'white'}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderRadius: 10, backgroundColor: 'blue', padding: 10}}
        onPress={() => {
          navigation.navigate('Messanger');
        }}>
        <Text style={{color: 'white'}}>Messanger</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderRadius: 10, backgroundColor: 'blue', padding: 10}}
        onPress={() => {
          navigation.navigate('MessangerExample');
        }}>
        <Text style={{color: 'white'}}>Messanger Example</Text>
      </TouchableOpacity>
    </AlignCenter>
  );
};

export default ProfileExample;
