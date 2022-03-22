import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import AlignCenter from '../../components/AlignCenter';

const HomeExample = () => {
  const navigation = useNavigation();
  return (
    <AlignCenter>
      <Text
        style={{
          fontSize: 22,
          opacity: 0.6,
          padding: 10,
        }}>
        HOME EXAMPLE SCREEN
      </Text>
      <TouchableOpacity
        style={{borderRadius: 10, backgroundColor: 'blue', padding: 10}}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'white'}}>Home</Text>
      </TouchableOpacity>
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
          navigation.navigate('Message');
        }}>
        <Text style={{color: 'white'}}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderRadius: 10, backgroundColor: 'blue', padding: 10}}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text style={{color: 'white'}}>Profile</Text>
      </TouchableOpacity>
    </AlignCenter>
  );
};

export default HomeExample;
