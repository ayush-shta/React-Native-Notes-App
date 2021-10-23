import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ModalStackParams} from '../navigation.types';

import AddNote from '../../feature/note/screen/add-note';
import NoteDetail from '../../feature/note/screen/note-detail';

const ModalStack = createNativeStackNavigator<ModalStackParams>();

const ModalStacks = () => {
  return (
    <ModalStack.Navigator screenOptions={{headerShown: false}}>
      <ModalStack.Screen name="noteDetail" component={NoteDetail} />
      <ModalStack.Screen name="addNote" component={AddNote} />
    </ModalStack.Navigator>
  );
};

export default ModalStacks;
