import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers/AuthSlice';
import publicNotes from './reducers/PublicNotesSlice';
import privateNotes from './reducers/PrivateNotesSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  publicNotes,
  privateNotes,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const selectToken = (state: RootState) => state.auth;
