import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import style from './style';

const NoteItem = () => {
  // TODO: Add additional implementation with props

  const FavouriteButtonIcon = () => (
    <Icon
      style={[style.actionButton, style.favouriteButtonFilled]}
      name="star"
      size={16}
    />
  );

  const ArchivedButtonIcon = () => (
    <Icon
      style={[style.actionButton, style.actionButtonDisabled]}
      name="briefcase"
      size={16}
    />
  );

  return (
    <Card containerStyle={style.container}>
      <View style={style.cardTitleWrapper}>
        <Text style={style.cardTitle} numberOfLines={1}>
          New Note title New Note title New Note title New Note title New Note
          title New Note title New Note titleNew Note title New Note title New
          Note title New Note title New Note title New Note title New Note
          titleNew Note title New Note title New Note title New Note title New
          Note title New Note title New Note title
        </Text>
        <View style={style.actionButtonWrapper}>
          <FavouriteButtonIcon />
          <ArchivedButtonIcon />
        </View>
      </View>
      <Card.Divider />
      <Text style={style.cardDescription} numberOfLines={3}>
        This is a note This is a note This is a note This is a note This is a
        note This is a note This is a note This is a note This is a note This is
        a note This is a note This is a note This is a note This is a note This
        is a noteThis is a note This is a note This is a note This is a note
        This is a note.
      </Text>
    </Card>
  );
};

export default NoteItem;
