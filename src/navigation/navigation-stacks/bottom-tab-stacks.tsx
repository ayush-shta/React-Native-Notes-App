import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import style from './style';
import appTheme from '../../constants/app-theme';
import {BottomTabStackParams} from '../navigation.types';

import ArchivedNotes from '../../screen/archived-notes';
import BottomTabBar from '../components/bottom-tab-bar';
import FavouriteNotes from '../../screen/favourite-notes';
import NotesList from '../../screen/notes-list/notes-list';
import {
  ArchivedTabIcon,
  FavouriteTabIcon,
  NotesTabIcon,
} from '../components/bottom-tab-icons';

const BottomTab = createBottomTabNavigator<BottomTabStackParams>();

const BottomTabStacks = () => {
  return (
    <BottomTab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        headerStyle: style.header,
        headerTitleStyle: style.headerTitle,
        headerTintColor: appTheme.white,
        headerTitleAlign: 'left',
      }}>
      <BottomTab.Screen
        name="notes"
        component={NotesList}
        options={{
          tabBarLabel: 'Notes',
          title: 'Notes',
          tabBarIcon: NotesTabIcon,
        }}
      />
      <BottomTab.Screen
        name="favourite"
        component={FavouriteNotes}
        options={{
          title: 'Favourites',
          tabBarLabel: 'Favourites',
          tabBarIcon: FavouriteTabIcon,
        }}
      />
      <BottomTab.Screen
        name="archived"
        component={ArchivedNotes}
        options={{
          title: 'Archived',
          tabBarLabel: 'Archived',
          tabBarIcon: ArchivedTabIcon,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabStacks;
