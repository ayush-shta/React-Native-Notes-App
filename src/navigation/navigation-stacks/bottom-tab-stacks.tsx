import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomTabStackParams} from '../navigation.types';

import ArchivedNotes from '../../screen/archived-notes';
import FavouriteNotes from '../../screen/favourite-notes';
import NotesList from '../../screen/notes-list/notes-list';

const BottomTab = createBottomTabNavigator<BottomTabStackParams>();

const BottomTabStacks = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name="notes"
        component={NotesList}
        options={{tabBarLabel: 'Notes'}}
      />
      <BottomTab.Screen
        name="favourite"
        component={FavouriteNotes}
        options={{tabBarLabel: 'Favourites'}}
      />
      <BottomTab.Screen
        name="archived"
        component={ArchivedNotes}
        options={{tabBarLabel: 'Archived'}}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabStacks;
