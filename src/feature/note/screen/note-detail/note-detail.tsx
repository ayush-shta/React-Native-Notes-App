import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import style from './style';

import Page from '../../../../components/page';
import ModalAppBar from '../../../../components/modal-app-bar/modal-app-bar';

const NoteDetail = () => {
  const EditButton = () => (
    <TouchableOpacity onPress={() => {}}>
      <Icon name="edit" size={24} style={style.editIcon} />
    </TouchableOpacity>
  );

  return (
    <Page>
      <View style={style.container}>
        <ModalAppBar title={'Note Detail'}>
          <EditButton />
        </ModalAppBar>
        <Text style={style.noteDescription}>Note Detail</Text>
      </View>
    </Page>
  );
};

export default NoteDetail;
