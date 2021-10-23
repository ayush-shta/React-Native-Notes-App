import {connect} from 'react-redux';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {View, ScrollView, TouchableOpacity} from 'react-native';

import style from './style';
import * as notesActions from '../../note.action';
import appTheme from '../../../../constants/app-theme';

import Page from '../../../../components/page';
import TextArea from '../../../../components/text-area';
import KeyboardAvoiding from '../../../../components/keyboard-avoiding';
import ModalAppBar from '../../../../components/modal-app-bar/modal-app-bar';

interface AddNoteProps {
  addNewNote: (noteTitle: string, noteDescription: string) => void;
}

const AddNote = (props: AddNoteProps) => {
  const {addNewNote} = props;

  const navigation = useNavigation();

  const [note, setNote] = useState('');
  const [noteTitle, setNoteTitle] = useState('');

  const AddNoteAppBar = () => (
    <ModalAppBar title={'Add a new Note'}>
      <TouchableOpacity
        onPress={() => {
          addNewNote(noteTitle, note);
          navigation.goBack();
        }}
        disabled={!note}>
        <Icon name="save" size={24} color={appTheme.secondaryGreen} />
      </TouchableOpacity>
    </ModalAppBar>
  );

  return (
    <Page>
      <KeyboardAvoiding>
        <View style={style.container}>
          <AddNoteAppBar />
          <ScrollView>
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
            <View style={style.noteDescription}>
              <TextArea
                size={'large'}
                onTextChange={setNote}
                title={'Note Description'}
                value={note}
                placeholder={'Write note description'}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoiding>
    </Page>
  );
};

const mapDispatchToProps = (dispatch: Function) => ({
  addNewNote: (noteTitle: string, noteDescription: string) =>
    dispatch(notesActions.addNewNote(noteTitle, noteDescription)),
});

export default connect(null, mapDispatchToProps)(AddNote);
