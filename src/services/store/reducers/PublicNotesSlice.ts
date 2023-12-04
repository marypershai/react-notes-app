import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {INote} from '../../interfaces/INote';

interface PublicNoteState {
  notes: INote[];
  isLoading: boolean;
  error: string;
}

const initialState: PublicNoteState = {
  isLoading: false,
  notes: [],
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

export default publicNotesSlice.reducer;
