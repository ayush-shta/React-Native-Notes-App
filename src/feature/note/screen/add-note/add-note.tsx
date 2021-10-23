import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import style from './style';
import appTheme from '../../../../constants/app-theme';

import Page from '../../../../components/page';
import TextArea from '../../../../components/text-area';
import KeyboardAvoiding from '../../../../components/keyboard-avoiding';
import ModalAppBar from '../../../../components/modal-app-bar/modal-app-bar';

const AddNote = () => {
  const [note, setNote] = useState('');
  const [noteTitle, setNoteTitle] = useState('');

  const AddNoteAppBar = () => (
    <ModalAppBar title={'Add a new Note'}>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="save" size={24} color={appTheme.secondaryGreen} />
      </TouchableOpacity>
    </ModalAppBar>
  );

  const NoteTitleInput = () => (
    <View style={style.noteDescription}>
      <TextArea
        size={'small'}
        multiline={false}
        autoFocus={true}
        onTextChange={setNoteTitle}
        title={'Note Title'}
        value={noteTitle}
        placeholder={'Write note title'}
      />
    </View>
  );

  const NoteDescriptionInput = () => (
    <View style={style.noteDescription}>
      <TextArea
        size={'large'}
        onTextChange={setNote}
        title={'Note Description'}
        value={note}
        placeholder={'Write note description'}
      />
    </View>
  );

  return (
    <Page>
      <KeyboardAvoiding>
        <View style={style.container}>
          <AddNoteAppBar />
          <ScrollView>
            <NoteTitleInput />
            <NoteDescriptionInput />
          </ScrollView>
        </View>
      </KeyboardAvoiding>
    </Page>
  );
};

export default AddNote;
