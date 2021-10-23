import {Note} from './note.types';
import uuid from 'react-native-uuid';
import * as noteActions from './note.action-types';

export const addNewNote = (
  noteTitle: string,
  noteDescription: string,
): noteActions.AddNote => {
  const newNote: Note = {
    id: uuid.v4().toString(),
    title: noteTitle,
    body: noteDescription,
    is_favorite: false,
    is_archived: false,
    created_at: new Date(),
    updated_at: new Date(),
  };

  return {
    type: noteActions.ADD_NOTE,
    payload: {
      note: newNote,
    },
  };
};

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
