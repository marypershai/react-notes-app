import {AppDispatch} from '../store';
import {authSlice} from './AuthSlice';
import axios from 'axios';
import {publicNotesSlice} from './PublicNotesSlice';

export const fetchAuth = creds => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.authFetching());
    const response = await axios({
      method: 'POST',
      url: 'https://dull-pear-haddock-belt.cyclic.app/auth',
      data: creds,
    });
    dispatch(authSlice.actions.authFetchingSuccess(response.data.token));
    localStorage.setItem('authToken', response.data.token);
  } catch (e) {
    dispatch(authSlice.actions.authFetchingError(e.message));
  }
};

export const fetchPublicNotes = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(publicNotesSlice.actions.publicNotesFetching);
    const response = await axios({
      method: 'GET',
      url: 'https://dull-pear-haddock-belt.cyclic.app/auth',
    });
    dispatch(publicNotesSlice.actions.publicNotesFetchingSuccess(response.data));
  } catch (e) {
    dispatch(authSlice.actions.authFetchingError(e.message));
  }
};
