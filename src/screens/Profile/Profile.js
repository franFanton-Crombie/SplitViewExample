import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {Text} from 'react-native';
import AlignCenter from '../../components/AlignCenter';

const Profile = () => {
  return (
    <AlignCenter>
      <Text
        style={{
          fontSize: 22,
          opacity: 0.6,
          padding: 10,
        }}
        onPress={() => {
          console.log('asd');
        }}>
        PROFILE SCREEN
      </Text>
    </AlignCenter>
  );
};

export default Profile;
