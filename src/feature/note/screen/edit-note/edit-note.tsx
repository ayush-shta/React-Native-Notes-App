import {connect} from 'react-redux';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation, RouteProp, useRoute} from '@react-navigation/native';

import style from './style';
import * as notesActions from '../../note.action';
import appTheme from '../../../../constants/app-theme';
import {ModalStackParams} from '../../../../navigation/navigation.types';

import Page from '../../../../components/page';
import TextArea from '../../../../components/text-area';
import KeyboardAvoiding from '../../../../components/keyboard-avoiding';
import ModalAppBar from '../../../../components/modal-app-bar/modal-app-bar';

interface AddNoteProps {
  updateNote: (
    noteId: string,
    oteTitle: string,
    noteDescription: string,
  ) => void;
}

const EditNote = (props: AddNoteProps) => {
  const {updateNote} = props;

  const route = useRoute<RouteProp<ModalStackParams, 'editNote'>>();

  const navigation = useNavigation();

  const {id, title, body} = route.params.note;

  const [note, setNote] = useState(body);
  const [noteTitle, setNoteTitle] = useState(title);

  const onUpdateNotePressed = () => {
    updateNote(id, noteTitle, note);
    navigation.goBack();
  };

  const AddNoteAppBar = () => (
    <ModalAppBar title={'Update Note'}>
      <TouchableOpacity onPress={onUpdateNotePressed} disabled={!note}>
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
  updateNote: (noteId: string, noteTitle: string, noteDescription: string) =>
    dispatch(notesActions.updateNote(noteId, noteTitle, noteDescription)),
});

export default connect(null, mapDispatchToProps)(EditNote);
