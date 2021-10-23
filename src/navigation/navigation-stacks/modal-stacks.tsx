import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ModalStackParams} from '../navigation.types';

import NoteDetail from '../../screen/note-detail';

const ModalStack = createNativeStackNavigator<ModalStackParams>();

const ModalStacks = () => {
  return (
    <ModalStack.Navigator screenOptions={{headerShown: false}}>
      <ModalStack.Screen name="noteDetail" component={NoteDetail} />
    </ModalStack.Navigator>
  );
};

export default ModalStacks;
