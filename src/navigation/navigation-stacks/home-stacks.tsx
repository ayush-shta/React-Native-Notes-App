import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeStackParams} from '../navigation.types';

import BottomTabStacks from './bottom-tab-stacks';

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeStacks = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="bottomTab" component={BottomTabStacks} />
    </HomeStack.Navigator>
  );
};

export default HomeStacks;
