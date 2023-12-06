import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  token: string;
  isLoading: boolean;
  error: string;
  isAuth: boolean;
}
const initialToken = localStorage.getItem('authToken');
const isAuthLocalStorage = !!initialToken;

const initialState: AuthState = {
  error: '',
  isLoading: false,
  token: initialToken,
  isAuth: isAuthLocalStorage,
};

export const authSlice = createSlice({
  initialState: initialState,
  name: 'auth',
  reducers: {
    authFetching(state) {
      state.isLoading = true;
      state.isAuth = false;
    },
    authFetchingSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = '';
      state.token = action.payload;
      state.isAuth = true;
    },
    authFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuth = false;
    },
    authChangeErrorState(state) {
      state.error = false;
    },
    authLogout(state) {
      state.isAuth = false;
    },
  },
});
export const {
  authFetching,
  authFetchingSuccess,
  authFetchingError,
  authChangeErrorState,
  authLogout,
} = authSlice.actions;
export default authSlice.reducer;
