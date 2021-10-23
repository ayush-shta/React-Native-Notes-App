import React from 'react';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, TouchableOpacity} from 'react-native';

import style from './style';

const NoteItem = () => {
  // TODO: Add additional implementation with props

  const navigation = useNavigation<any>();

  const title: string =
    'New Note title New Note title New Note title New Note title New Note' +
    'title New Note title New Note titleNew Note title New Note title New';

  const description: string =
    'This is a note This is a note This is a note This is a note This is a note This is a note ' +
    'This is a note This is a note This is a note This' +
    'is a note This is a note This is a note This is a note This is a note';

  const navigateToNoteDetail = () =>
    navigation.navigate('modal', {
      screen: 'noteDetail',
      params: {title: title, description: description},
    });

  const FavouriteButtonIcon = () => (
    <Icon
      style={[style.actionButton, style.favouriteButton]}
      name="star"
      size={16}
    />
  );

  const ArchivedButtonIcon = () => (
    <Icon
      style={[style.actionButton, style.archiveButton]}
      name="inbox"
      size={16}
    />
  );

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

export default NoteItem;
