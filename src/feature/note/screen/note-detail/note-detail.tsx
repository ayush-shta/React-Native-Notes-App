import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, TouchableOpacity} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useNavigation, StackActions} from '@react-navigation/native';

import style from './style';
import {ModalStackParams} from '../../../../navigation/navigation.types';

import Page from '../../../../components/page';
import ModalAppBar from '../../../../components/modal-app-bar/modal-app-bar';

const NoteDetail = () => {
  const route = useRoute<RouteProp<ModalStackParams, 'noteDetail'>>();

  const navigation = useNavigation<any>();

  const {note} = route.params;

  const {title, body: description} = note;

  const navigateToEditNote = () =>
    navigation.dispatch(StackActions.replace('editNote', {note}));

  const EditButton = () => (
    <TouchableOpacity onPress={navigateToEditNote}>
      <Icon name="edit" size={24} style={style.editIcon} />
    </TouchableOpacity>
  );

  return (
    <Page>
      <View style={style.container}>
        <ModalAppBar title={title}>
          <EditButton />
        </ModalAppBar>
        <Text style={style.noteDescription}>{description}</Text>
      </View>
    </Page>
  );
};

export default NoteDetail;
