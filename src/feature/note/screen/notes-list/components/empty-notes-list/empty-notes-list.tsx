import React from 'react';
import {View} from 'react-native';

import style from './style';

import EmptyList from '../../../../../../components/empty-list';

const EmptyNotesList = () => {
  return (
    <View style={style.container}>
      <EmptyList
        imageSource={require('../../../../../../assets/notes-empty.png')}
        description={'Create your first note!'}
      />
    </View>
  );
};

export default EmptyNotesList;
