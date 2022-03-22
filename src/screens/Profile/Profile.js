import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import AlignCenter from '../../components/AlignCenter';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <AlignCenter>
      <Text
        style={{
          fontSize: 22,
          opacity: 0.6,
          padding: 10,
        }}>
        PROFILE SCREEN
      </Text>
      <TouchableOpacity
        style={{borderRadius: 10, backgroundColor: 'blue', padding: 10}}
        onPress={() => {
          navigation.navigate('MessageExample');
        }}>
        <Text style={{color: 'white'}}>Message Example</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderRadius: 10, backgroundColor: 'red', padding: 10}}
        onPress={() => {
          navigation.navigate('HomeExample');
        }}>
        <Text style={{color: 'white'}}>Home Example</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderRadius: 10, backgroundColor: 'red', padding: 10}}
        onPress={() => {
          navigation.navigate('ProfileExample');
        }}>
        <Text style={{color: 'white'}}>Profile Example</Text>
      </TouchableOpacity>
    </AlignCenter>
  );
};

export default Profile;
