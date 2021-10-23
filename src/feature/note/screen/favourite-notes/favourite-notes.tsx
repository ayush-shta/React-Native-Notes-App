import React from 'react';
import {connect} from 'react-redux';
import {View, FlatList} from 'react-native';

import style from './style';
import {Note} from '../../note.types';
import {RootState} from '../../../../reducers';

import NoteItem from '../../components/note-item';
import EmptyFavouriteNotes from './components/empty-favourite-notes';

interface FavouriteNotesProps {
  favouriteNotes: Array<Note>;
}
const FavouriteNotes = (props: FavouriteNotesProps) => {
  const {favouriteNotes} = props;

  if (favouriteNotes.length <= 0) {
    return <EmptyFavouriteNotes />;
  }

  return (
    <View style={style.container}>
      <FlatList
        data={favouriteNotes}
        keyExtractor={item => item.id}
        renderItem={({item}) => <NoteItem note={item} />}
      />
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  favouriteNotes: state.noteReducer.notes.filter(
    note => note.isFavorite === true,
  ),
});

export default connect(mapStateToProps)(FavouriteNotes);
