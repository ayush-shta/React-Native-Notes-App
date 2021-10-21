import React from 'react';
import {View, Text} from 'react-native';

import style from './style';

import EmptyNotesList from './components/empty-notes-list';

const NotesList = () => {
  // TODO Check for empty notes
  const isNotesEmpty = true;

  if (isNotesEmpty) {
    return <EmptyNotesList />;
  }

  return (
    <View style={style.container}>
      <Text>Notes List</Text>
    </View>
  );
};

export default NotesList;
