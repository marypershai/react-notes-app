import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {INote} from '../../interfaces/INote';
import {mockNotes} from '../../data/notes';

interface PublicNoteState {
  notes: INote[];
  isLoading: boolean;
  error: string;
  favoritesNotes: INote[];
}

const initialState: PublicNoteState = {
  isLoading: false,
  notes: [],
  favoritesNotes: [],
  error: '',
};

export const publicNotesSlice = createSlice({
  initialState: initialState,
  name: 'publicNotes',
  reducers: {
    publicNotesFetching(state) {
      state.isLoading = true;
    },
    publicNotesFetchingSuccess(state, action: PayloadAction<INote[]>) {
      state.isLoading = false;
      state.error = '';
      state.notes = action.payload;
    },
    publicNotesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {publicNotesFetching, publicNotesFetchingSuccess, publicNotesFetchingError} =
  publicNotesSlice.actions;
export default publicNotesSlice.reducer;
