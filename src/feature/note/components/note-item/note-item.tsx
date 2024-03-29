import React from 'react';
import {connect} from 'react-redux';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, TouchableOpacity} from 'react-native';

import style from './style';
import {Note} from '../../note.types';
import * as notesActions from '../../note.action';

interface NoteItemProps {
  note: Note;
  setFavouriteNote: (noteId: string, isFavourite: boolean) => void;
  setArchiveNote: (noteId: string, isArchived: boolean) => void;
}

const NoteItem = (props: NoteItemProps) => {
  const {note, setFavouriteNote, setArchiveNote} = props;
  const {title, body: description, isFavorite, isArchived} = note;

  const navigation = useNavigation<any>();

  const navigateToNoteDetail = () =>
    navigation.navigate('modal', {
      screen: 'noteDetail',
      params: {note},
    });

  const FavouriteButtonIcon = () => {
    const iconName = isFavorite ? 'star' : 'staro';

    return (
      <TouchableOpacity onPress={() => setFavouriteNote(note.id, !isFavorite)}>
        <Icon
          style={[style.actionButton, style.favouriteButton]}
          name={iconName}
          size={16}
        />
      </TouchableOpacity>
    );
  };

  const ArchivedButtonIcon = () => {
    const iconName = isArchived ? 'circledown' : 'circledowno';

    return (
      <TouchableOpacity onPress={() => setArchiveNote(note.id, !isArchived)}>
        <Icon
          style={[style.actionButton, style.archiveButton]}
          name={iconName}
          size={16}
        />
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity onPress={() => navigateToNoteDetail()}>
      <Card containerStyle={style.container}>
        <View style={style.cardTitleWrapper}>
          <Text style={style.cardTitle} numberOfLines={1}>
            {title}
          </Text>
          <View style={style.actionButtonWrapper}>
            <FavouriteButtonIcon />
            <ArchivedButtonIcon />
          </View>
        </View>
        <Card.Divider />
        <Text style={style.cardDescription} numberOfLines={3}>
          {description}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch: Function) => ({
  setFavouriteNote: (noteId: string, isFavourite: boolean) =>
    dispatch(notesActions.setFavouriteNote(noteId, isFavourite)),
  setArchiveNote: (noteId: string, isArchived: boolean) =>
    dispatch(notesActions.setArchiveNote(noteId, isArchived)),
});

export default connect(null, mapDispatchToProps)(NoteItem);
