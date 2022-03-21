import * as React from 'react';
import {isIpad} from '../../helpers/constants';
import MasterSplitStack from './stacks/MasterSplitStack';
import DetailsSplitStack from './stacks/DetailsSplitStack';
import useSystemBack from './useSystemBack';
import {StyleSheet, View} from 'react-native';
import MenuVertical from '../screens/MenuVertical';

const SplitScreen = () => {
  if (isIpad()) {
    useSystemBack();

    return (
      <View style={styles.root}>
        <View style={styles.masterView}>
          <MenuVertical />
        </View>
        <View style={styles.detailView}>
          <DetailsSplitStack />
        </View>
      </View>
    );
  }

  return <MasterSplitStack />;
};

export default SplitScreen;

const styles = StyleSheet.create({
  root: {flex: 1, flexDirection: 'row'},
  masterView: {flex: 1, maxWidth: 150, borderWidth: 1, borderColor: 'blue'},
  detailView: {
    flex: 1,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'blue',
  },
});
