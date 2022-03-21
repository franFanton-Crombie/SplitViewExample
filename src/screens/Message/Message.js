import * as React from 'react';
import {Text} from 'react-native';
import AlignCenter from '../../components/AlignCenter';

const Message = () => {
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
        MESSAGE SCREEN
      </Text>
    </AlignCenter>
  );
};

export default Message;
