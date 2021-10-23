import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

interface TabIconProps {
  color: string;
  size: number;
}

export const NotesTabIcon = ({color, size}: TabIconProps) => (
  <Icon name="form" size={size} color={color} />
);

export const FavouriteTabIcon = ({color, size}: TabIconProps) => (
  <Icon name="staro" size={size} color={color} />
);

export const ArchivedTabIcon = ({color, size}: TabIconProps) => (
  <Icon name="inbox" size={size} color={color} />
);
