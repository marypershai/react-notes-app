import {AppDispatch} from '../store';
import {authFetching, authFetchingError, authFetchingSuccess} from './AuthSlice';
import axios from 'axios';
import {
  publicNotesFetching,
  publicNotesFetchingError,
  publicNotesFetchingSuccess,
} from './PublicNotesSlice';

export const fetchAuth = creds => async (dispatch: AppDispatch) => {
  try {
    dispatch(authFetching);
    const response = await axios({
      method: 'POST',
      url: 'https://dull-pear-haddock-belt.cyclic.app/auth',
      data: creds,
    });
    dispatch(authFetchingSuccess(response.data.token));
    localStorage.setItem('authToken', response.data.token);
  } catch (e) {
    dispatch(authFetchingError(e.message));
  }
};

export const fetchPublicNotes = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(publicNotesFetching);
    const response = await axios({
      method: 'GET',
      url: 'https://dull-pear-haddock-belt.cyclic.app/auth',
    });
    dispatch(publicNotesFetchingSuccess(response.data));
  } catch (e) {
    dispatch(publicNotesFetchingError(e.message));
  }
};
