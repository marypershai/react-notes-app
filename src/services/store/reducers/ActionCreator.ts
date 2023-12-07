import {AppDispatch} from '../store';
import {authFetching, authFetchingError, authFetchingSuccess} from './AuthSlice';
import axios from 'axios';
import {
  publicNotesFetching,
  publicNotesFetchingError,
  publicNotesFetchingSuccess,
} from './PublicNotesSlice';
import {
  privateNotesFetching,
  privateNotesFetchingError,
  privateNotesFetchingSuccess,
} from './PrivateNotesSlice';
import {INote} from '../../interfaces/INote';
import {IAuth} from '../../interfaces/IAuth';

const BASE_URL = 'https://dull-pear-haddock-belt.cyclic.app';

export const fetchAuth = (creds: IAuth) => async (dispatch: AppDispatch) => {
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

export const changePassword =
  (newPassword: string, token: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios({
        method: 'PUT',
        url: `${BASE_URL}/auth`,
        data: {password: newPassword},
        headers: {Authorization: `Bearer ${token}`, 'Content-type': 'application/json'},
      });
    } catch (e) {
      dispatch(authFetchingError(e.message));
    }
  };

export const fetchPublicNotes = (token: string) => async (dispatch: AppDispatch) => {
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

export const fetchPrivateNotes = (token: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(privateNotesFetching());
    const response = await axios({
      method: 'GET',
      url: `${BASE_URL}/notes?type=personal`,
      headers: {Authorization: `Bearer ${token}`, 'Content-type': 'application/json'},
    });
    dispatch(privateNotesFetchingSuccess(response.data));
  } catch (e) {
    dispatch(privateNotesFetchingError(e.message));
  }
};

export const addPrivateNote = (token: string, note: INote) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: {Authorization: `Bearer ${token}`, 'Content-type': 'application/json'},
      body: JSON.stringify(note),
    });
  } catch (e) {
    dispatch(privateNotesFetchingError(e.message));
  }
};

export const editPrivateNote = (token: string, note: INote) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/notes?id=${note.id}`, {
      method: 'PUT',
      headers: {Authorization: `Bearer ${token}`, 'Content-type': 'application/json'},
      body: JSON.stringify(note),
    });
  } catch (e) {
    dispatch(privateNotesFetchingError(e.message));
  }
};

export const deletePrivateNote = (token: string, id: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/notes?id=${id}`, {
      method: 'DELETE',
      headers: {Authorization: `Bearer ${token}`, 'Content-type': 'application/json'},
    });
  } catch (e) {
    dispatch(privateNotesFetchingError(e.message));
  }
};
