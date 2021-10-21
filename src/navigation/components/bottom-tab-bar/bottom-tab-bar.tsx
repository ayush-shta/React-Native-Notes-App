import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  TabNavigationState,
  ParamListBase,
  NavigationHelpers,
} from '@react-navigation/native';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/src/types';

import style from './style';

interface TabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

// Reference: https://reactnavigation.org/docs/bottom-tab-navigator#tabbar
const BottomTabBar = (props: TabBarProps) => {
  const {state, descriptors, navigation} = props;

  return (
    <SafeAreaView edges={['bottom']}>
      <View style={style.tabBar}>
        {state.routes.map((route: any, index: number) => {
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

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const iconStyle = isFocused
            ? style.iconFocused
            : style.iconNotFocused;

          const labelTextStyle = isFocused
            ? style.labelFocused
            : style.labelNotFocused;

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={style.container}
              onLongPress={onLongPress}
              accessibilityRole="button"
              testID={options.tabBarTestID}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}>
              <View style={style.iconTab}>
                {options?.tabBarIcon && options.tabBarIcon(iconStyle)}
                <Text style={labelTextStyle}>{label}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default BottomTabBar;
