import React from 'react';
import {View, Text} from 'react-native';

import style from './style';

import EmptyArchivedNotes from './components/empty-archived-notes';

const ArchivedNotes = () => {
  // TODO Check for empty notes
  const isNotesEmpty = true;

  if (isNotesEmpty) {
    return <EmptyArchivedNotes />;
  }

  return (
    <View style={style.container}>
      <Text>Archived</Text>
    </View>
  );
};

export default ArchivedNotes;
