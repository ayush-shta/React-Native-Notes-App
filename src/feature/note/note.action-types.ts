import {Note} from './note.types';

export const ADD_NOTE = '@@action/NOTE/ADD_NOTE';
export const UPDATE_NOTE = '@@action/NOTE/UPDATE_NOTE';
export const SET_FAVOURITE_NOTE = '@@action/NOTE/SET_FAVOURITE_NOTE';
export const SET_ARCHIVE_NOTE = '@@action/NOTE/SET_ARCHIVE_NOTE';

export interface AddNote {
  type: typeof ADD_NOTE;
  payload: {
    note: Note;
  };
}

export interface UpdateNote {
  type: typeof UPDATE_NOTE;
  payload: {
    noteId: string;
    noteTitle: string;
    noteDescription: string;
  };
}

export interface SetFavouriteNote {
  type: typeof SET_FAVOURITE_NOTE;
  payload: {
    noteId: string;
    isFavourite: boolean;
  };
}

export interface SetArchiveNote {
  type: typeof SET_ARCHIVE_NOTE;
  payload: {
    noteId: string;
    isArchived: boolean;
  };
}

export type NoteActionTypes =
  | AddNote
  | UpdateNote
  | SetFavouriteNote
  | SetArchiveNote;
