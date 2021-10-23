import React from 'react';
import {View} from 'react-native';

import style from './style';

import NoteItem from './components/note-item';
import AddNoteFab from './components/add-note-fab';
import EmptyNotesList from './components/empty-notes-list';

const NotesList = () => {
  // TODO Check for empty notes
  const isNotesEmpty = false;

  if (isNotesEmpty) {
    return <EmptyNotesList />;
  }

  return (
    <View style={style.container}>
      <NoteItem />
      <AddNoteFab />
    </View>
  );
};

export default NotesList;
