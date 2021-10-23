import React from 'react';
import {connect} from 'react-redux';
import {FlatList, View} from 'react-native';

import style from './style';
import {Note} from '../../note.types';
import {RootState} from '../../../../reducers';

import NoteItem from '../../components/note-item';
import AddNoteFab from './components/add-note-fab';
import EmptyNotesList from './components/empty-notes-list';

interface NoteListProps {
  notes: Array<Note>;
}

const NotesList = (props: NoteListProps) => {
  const {notes} = props;

  if (notes.length <= 0) {
    return (
      <>
        <EmptyNotesList />
        <AddNoteFab />
      </>
    );
  }

  return (
    <View style={style.container}>
      <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({item}) => <NoteItem note={item} />}
      />
      <AddNoteFab />
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  notes: state.noteReducer.notes.filter(note => note.isArchived === false),
});

export default connect(mapStateToProps)(NotesList);
