import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {INote} from '../../interfaces/INote';

interface PrivateNoteState {
  notes: INote[];
  isLoading: boolean;
  error: string;
}

const initialState: PrivateNoteState = {
  isLoading: false,
  notes: [],
  error: '',
};

export const privateNotesSlice = createSlice({
  initialState: initialState,
  name: 'privateNotes',
  reducers: {
    privateNotesFetching(state) {
      state.isLoading = true;
    },
    privateNotesFetchingSuccess(state, action: PayloadAction<INote[]>) {
      state.isLoading = false;
      state.error = '';
      state.notes = action.payload;
    },
    privateNotesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addNewNote(state, action: PayloadAction<INote>) {
      state.notes = [...state.notes, action.payload];
    },
  },
});

export default privateNotesSlice.reducer;
