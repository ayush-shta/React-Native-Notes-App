import notesReducer from '../../feature/note/note.reducer';
import * as notesAction from '../../feature/note/note.action';

const mockDate = new Date('2021-08-29T18:16:19+00:00');

test('should return the initial state', () => {
  // @ts-ignore
  expect(notesReducer(undefined, {})).toEqual({notes: []});
});

describe('Add note action', () => {
  const newNoteTitle = 'Note Title';
  const newNoteDescription = 'Note description';
  test('should handle a note being added to an empty list', () => {
    const previousState = {notes: []};

    const newNotesState = notesReducer(
      previousState,
      notesAction.addNewNote(newNoteTitle, newNoteDescription),
    );

    const newNote = newNotesState.notes[0];

    expect(newNote).toEqual(
      expect.objectContaining({
        title: newNoteTitle,
        body: newNoteDescription,
      }),
    );
  });

  test('should handle a note being added to an existing list', () => {
    const previousState = {
      notes: [
        {
          id: 'noteId',
          title: 'Run the tests',
          body: 'Description',
          createdAt: mockDate,
          updatedAt: mockDate,
          isFavorite: true,
          isArchived: false,
        },
      ],
    };

    const newNotesState = notesReducer(
      previousState,
      notesAction.addNewNote(newNoteTitle, newNoteDescription),
    );

    expect(newNotesState).toEqual({
      notes: [
        expect.objectContaining({
          title: newNoteTitle,
          body: newNoteDescription,
        }),
        {
          id: 'noteId',
          title: 'Run the tests',
          body: 'Description',
          createdAt: mockDate,
          updatedAt: mockDate,
          isFavorite: true,
          isArchived: false,
        },
      ],
    });
  });
});

describe('Updating a note', () => {
  const noteId = 'noteId';

  const noteTitle = 'Run the tests';
  const noteDescription = 'Description';

  const newNoteTitle = 'Note Title';
  const newNoteDescription = 'Note description';

  test('should be able to update title and description', () => {
    const previousState = {
      notes: [
        {
          id: noteId,
          title: noteTitle,
          body: noteDescription,
          createdAt: mockDate,
          updatedAt: mockDate,
          isFavorite: true,
          isArchived: false,
        },
      ],
    };

    const newNotesState = notesReducer(
      previousState,
      notesAction.updateNote(noteId, newNoteTitle, newNoteDescription),
    );

    const newNote = newNotesState.notes[0];

    expect(newNote).toEqual(
      expect.objectContaining({
        title: newNoteTitle,
        body: newNoteDescription,
      }),
    );
  });

  test('should be able to set favourite according to provided input', () => {
    const previousFavouriteState = false;
    const newFavouriteState = true;

    const previousState = {
      notes: [
        {
          id: noteId,
          title: noteTitle,
          body: noteDescription,
          createdAt: mockDate,
          updatedAt: mockDate,
          isFavorite: previousFavouriteState,
          isArchived: false,
        },
      ],
    };

    const newNotesState = notesReducer(
      previousState,
      notesAction.setFavouriteNote(noteId, newFavouriteState),
    );

    const newNote = newNotesState.notes.find(note => note.id === noteId);

    expect(newNote).toEqual(
      expect.objectContaining({
        id: noteId,
        title: noteTitle,
        body: noteDescription,
        isFavorite: newFavouriteState,
      }),
    );
  });

  it('should be able to set archived according to provided input', () => {
    const previousArchivedState = false;
    const newArchivedState = true;

    const previousState = {
      notes: [
        {
          id: noteId,
          title: noteTitle,
          body: noteDescription,
          createdAt: mockDate,
          updatedAt: mockDate,
          isFavorite: false,
          isArchived: previousArchivedState,
        },
      ],
    };

    const newNotesState = notesReducer(
      previousState,
      notesAction.setArchiveNote(noteId, newArchivedState),
    );

    const newNote = newNotesState.notes.find(note => note.id === noteId);

    expect(newNote).toEqual(
      expect.objectContaining({
        id: noteId,
        title: noteTitle,
        body: noteDescription,
        isArchived: newArchivedState,
      }),
    );
  });
});
