import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AlignCenter from '../../components/AlignCenter';

const Home = () => {
  const navigation = useNavigation();
  return (
    <AlignCenter>
      <Text
        style={{
          fontSize: 22,
          opacity: 0.6,
          padding: 10,
        }}>
        HOME SCREEN
      </Text>
      <TouchableOpacity
        style={{borderRadius: 10, backgroundColor: 'red', padding: 10}}
        onPress={() => {
          navigation.navigate('HomeExample');
        }}>
        <Text style={{color: 'white'}}>Home Example</Text>
      </TouchableOpacity>
    </AlignCenter>
  );
};

export default Home;
