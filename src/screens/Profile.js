import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {Text} from 'react-native';
import AlignCenter from '../components/AlignCenter';
import {pushPruebaScreen} from '../navigation/Navigator';

const Profile = () => {
  const navigation = useNavigation();
  const userId = '1';
  return (
    <AlignCenter>
      <Text
        style={{
          fontSize: 22,
          opacity: 0.6,
          padding: 10,
        }}
        onPress={() => {
          pushPruebaScreen();
          console.log('asd');
        }}>
        PROFILE PA
      </Text>
    </AlignCenter>
  );
};

export default Profile;
