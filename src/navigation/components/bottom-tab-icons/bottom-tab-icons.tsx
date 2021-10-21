import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

interface TabIconProps {
  color: string;
  size: number;
}

export const NotesTabIcon = ({color, size}: TabIconProps) => (
  <Icon name="note" size={size} color={color} />
);

export const FavouriteTabIcon = ({color, size}: TabIconProps) => (
  <Icon name="star" size={size} color={color} />
);

export const ArchivedTabIcon = ({color, size}: TabIconProps) => (
  <Icon name="briefcase" size={size} color={color} />
);
