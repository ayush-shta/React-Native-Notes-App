import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Note} from '../feature/note/note.types';

export type RootStackParams = {
  homeStacks: undefined;
};

export type HomeStackParams = {
  bottomTab: undefined;
  modal: undefined;
};

export type BottomTabStackParams = {
  favourite: undefined;
  notes: undefined;
  archived: undefined;
};

export type ModalStackParams = {
  noteDetail: {note: Note};
  addNote: undefined;
};

export type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeStackParams, 'modal'>,
  NativeStackNavigationProp<ModalStackParams, 'noteDetail'>
>;
