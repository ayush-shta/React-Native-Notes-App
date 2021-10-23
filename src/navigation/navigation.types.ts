import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
  noteDetail: {title: string; description: string};
};

export type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeStackParams, 'modal'>,
  NativeStackNavigationProp<ModalStackParams, 'noteDetail'>
>;
