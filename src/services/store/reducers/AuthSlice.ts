import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  token: string;
  isLoading: boolean;
  error: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  error: '',
  isLoading: false,
  token: '',
  isAuth: false,
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

export default authSlice.reducer;
