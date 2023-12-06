import {AppDispatch} from '../store';
import {authFetching, authFetchingError, authFetchingSuccess} from './AuthSlice';
import axios from 'axios';
import {
  publicNotesFetching,
  publicNotesFetchingError,
  publicNotesFetchingSuccess,
} from './PublicNotesSlice';
import {useAppSelector} from '../../hooks/redux';

const BASE_URL = 'https://dull-pear-haddock-belt.cyclic.app';

export const fetchAuth = creds => async (dispatch: AppDispatch) => {
  try {
    dispatch(authFetching);
    const response = await axios({
      method: 'POST',
      url: `${BASE_URL}/auth`,
      data: creds,
    });
    dispatch(authFetchingSuccess(response.data.token));
    localStorage.setItem('authToken', response.data.token);
  } catch (e) {
    dispatch(authFetchingError(e.message));
  }
};

export const fetchPublicNotes = token => async (dispatch: AppDispatch) => {
  try {
    dispatch(publicNotesFetching());
    const response = await axios({
      method: 'GET',
      url: `${BASE_URL}/notes?type=public`,
      headers: {Authorization: `Bearer ${token}`, 'Content-type': 'application/json'},
    });
    dispatch(publicNotesFetchingSuccess(response.data));
  } catch (e) {
    dispatch(publicNotesFetchingError(e.message));
  }
};
