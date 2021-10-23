import React from 'react';
import {View} from 'react-native';

import style from './style';

import EmptyList from '../../../../../components/empty-list';

const EmptyFavouriteNotes = () => {
  return (
    <View style={style.container}>
      <EmptyList
        imageSource={require('../../../../../assets/favourites-empty.png')}
        description={'Your favourite notes will appear here.'}
      />
    </View>
  );
};

export default EmptyFavouriteNotes;
