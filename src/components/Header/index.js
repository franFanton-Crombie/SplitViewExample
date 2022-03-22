import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconBack from '../../assets/IconBack';

const Header = ({canGoBack = true, text = ''}) => {
  const navigation = useNavigation();
  const showBackButton = navigation.canGoBack() && canGoBack;

  return (
    <SafeAreaView style={styles.header}>
      {showBackButton && (
        <TouchableOpacity
          testID="btnGoBack"
          delayPressIn={0}
          style={styles.backButton}
          onPress={navigation.goBack}>
          <IconBack width={20} height={20} color={'black'} />
        </TouchableOpacity>
      )}
      <View
        style={[
          styles.container,
          showBackButton && {
            marginRight: 40,
          },
        ]}>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
          {text}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('screen').height * 0.1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backButton: {
    alignItems: 'center',
    marginLeft: 10,
  },
});
