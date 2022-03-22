import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          navigation.navigate(route.name);
        };
        if (
          route.name == 'Home' ||
          route.name == 'Message' ||
          route.name == 'Profile'
        ) {
          if (!state.routes[index].params?.hideButton)
            return (
              <TouchableOpacity
                key={index}
                delayPressIn={0}
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={styles.button}>
                {options.tabBarIcon({
                  color: isFocused ? 'blue' : 'gray',
                  size: 20,
                })}
              </TouchableOpacity>
            );
          else return null;
        } else return null;
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 7,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
    width: 50,
    height: 50,
  },
});

export default MyTabBar;
