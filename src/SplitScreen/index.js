import * as React from 'react';
import DetailsSplitStack from './stacks/DetailsSplitStack';
import useSystemBack from './useSystemBack';
import {Dimensions, StyleSheet, View} from 'react-native';
import MenuVertical from '../screens/MenuVertical';

const SplitScreen = () => {
  useSystemBack();

  return (
    <View style={styles.container}>
      <View style={styles.menuVertical}>
        <View
          style={{
            backgroundColor: 'white',
            height: Dimensions.get('screen').height * 0.087,
          }}
        />
        <MenuVertical />
      </View>
      <View style={styles.detail}>
        <DetailsSplitStack />
      </View>
    </View>
  );
};

export default SplitScreen;

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row', backgroundColor: 'white'},
  menuVertical: {flex: 1, maxWidth: 100},
  detail: {
    flex: 1,
    overflow: 'hidden',
  },
});
