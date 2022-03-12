import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface AuthState {
  user: { [key: string]: string };
  isAuth: boolean;
}

const initialState: AuthState = {
  user: {},
  isAuth: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<{}>) => {
      state.user = action.payload
    },
    toggleAuth: state => {
      state.isAuth = !state.isAuth
    },
    logOut: state => {
      state.isAuth = false;
      state.user = {};
    }
  },
});

export const { saveUser, toggleAuth, logOut } = authSlice.actions;

export const isAuth = (state: RootState) => state.auth.isAuth;
export const user = (state: RootState) => state.auth.user;

export default authSlice.reducer;