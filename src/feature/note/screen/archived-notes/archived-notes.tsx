import React from 'react';
import {connect} from 'react-redux';
import {View, FlatList} from 'react-native';

import style from './style';
import {Note} from '../../note.types';
import {RootState} from '../../../../reducers';

import NoteItem from '../../components/note-item';
import EmptyArchivedNotes from './components/empty-archived-notes';

interface ArchivedNotesProps {
  archivedNotes: Array<Note>;
}

const ArchivedNotes = (props: ArchivedNotesProps) => {
  const {archivedNotes} = props;

  if (archivedNotes.length <= 0) {
    return <EmptyArchivedNotes />;
  }

  return (
    <View style={style.container}>
      <FlatList
        data={archivedNotes}
        keyExtractor={item => item.id}
        renderItem={({item}) => <NoteItem note={item} />}
      />
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  archivedNotes: state.noteReducer.notes.filter(
    note => note.isArchived === true,
  ),
});

export default connect(mapStateToProps)(ArchivedNotes);
