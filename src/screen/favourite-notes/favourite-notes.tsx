import React from 'react';
import {View, Text} from 'react-native';

import style from './style';

import EmptyFavouriteNotes from './components/empty-favourite-notes';

const FavouriteNotes = () => {
  // TODO Check for empty notes
  const isNotesEmpty = true;

  if (isNotesEmpty) {
    return <EmptyFavouriteNotes />;
  }

  return (
    <View style={style.container}>
      <Text>Favourites</Text>
    </View>
  );
};

export default FavouriteNotes;
