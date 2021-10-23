import React from 'react';
import {View} from 'react-native';

import style from './style';

import EmptyList from '../../../../../../components/empty-list';

const EmptyArchivedNotes = () => {
  return (
    <View style={style.container}>
      <EmptyList
        imageSource={require('../../../../../../assets/archive-empty.png')}
        description={'Your archived notes will appear here.'}
      />
    </View>
  );
};

export default EmptyArchivedNotes;
