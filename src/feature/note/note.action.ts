import uuid from 'react-native-uuid';

import {Note} from './note.types';
import {getCurrentDate} from '../../utils/date';
import * as noteActions from './note.action-types';

export const addNewNote = (
  noteTitle: string,
  noteDescription: string,
): noteActions.AddNote => {
  const newNote: Note = {
    id: uuid.v4().toString(),
    title: noteTitle,
    body: noteDescription,
    isFavorite: false,
    isArchived: false,
    createdAt: getCurrentDate(),
    updatedAt: getCurrentDate(),
  };

  return {
    type: noteActions.ADD_NOTE,
    payload: {
      note: newNote,
    },
  };
};

export const updateNote = (
  noteId: string,
  noteTitle: string,
  noteDescription: string,
): noteActions.UpdateNote => ({
  type: noteActions.UPDATE_NOTE,
  payload: {
    noteId,
    noteTitle,
    noteDescription,
  },
});

export const setFavouriteNote = (
  noteId: string,
  isFavourite: boolean,
): noteActions.SetFavouriteNote => ({
  type: noteActions.SET_FAVOURITE_NOTE,
  payload: {
    noteId,
    isFavourite,
  },
});

export const setArchiveNote = (
  noteId: string,
  isArchived: boolean,
): noteActions.SetArchiveNote => ({
  type: noteActions.SET_ARCHIVE_NOTE,
  payload: {
    noteId,
    isArchived,
  },
});
