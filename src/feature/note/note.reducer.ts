import {Note} from './note.types';
import {getCurrentDate} from '../../utils/date';
import * as noteActions from './note.action-types';

interface State {
  notes: Array<Note>;
}

const initialState: State = {
  notes: [],
};

const noteReducer = (
  state = initialState,
  action: noteActions.NoteActionTypes,
): State => {
  switch (action.type) {
    case noteActions.ADD_NOTE:
      return {
        ...state,
        notes: [action.payload.note, ...state.notes],
      };

    case noteActions.UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.noteId
            ? {
                ...note,
                title: action.payload.noteTitle,
                body: action.payload.noteDescription,
                updatedAt: getCurrentDate(),
              }
            : note,
        ),
      };
    case noteActions.SET_FAVOURITE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.noteId
            ? {...note, isFavorite: action.payload.isFavourite}
            : note,
        ),
      };

    case noteActions.SET_ARCHIVE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.noteId
            ? {...note, isArchived: action.payload.isArchived}
            : note,
        ),
      };
    default:
      return state;
  }
};

export default noteReducer;
