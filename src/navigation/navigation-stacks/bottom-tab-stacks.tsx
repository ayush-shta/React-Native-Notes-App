import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
    <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <BottomTab.Screen
        name="notes"
        component={NotesList}
        options={{tabBarLabel: 'Notes', tabBarIcon: NotesTabIcon}}
      />
      <BottomTab.Screen
        name="favourite"
        component={FavouriteNotes}
        options={{tabBarLabel: 'Favourites', tabBarIcon: FavouriteTabIcon}}
      />
      <BottomTab.Screen
        name="archived"
        component={ArchivedNotes}
        options={{tabBarLabel: 'Archived', tabBarIcon: ArchivedTabIcon}}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabStacks;
