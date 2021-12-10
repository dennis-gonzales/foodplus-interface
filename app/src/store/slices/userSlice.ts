import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '..';

type Session = {
  authentication: string;
  otp: number;
}

type User = {
  firstName: string;
  lastName: string;
  session: Session;
};

interface UserRequest {
  username: string;
  password: string;
}

export const login = createAsyncThunk<User, Required<UserRequest>>(
  'user/login',
  async ({ username, password }) => {
    const response = await axios.post('/api/login', { username, password });
    return response.data;
  }
);

export interface UserState {
  user: User;
  isLoading: boolean;
  isLoggedIn: boolean;
  error?: string;
}

const initialState: UserState = {
  user: {
    firstName: '',
    lastName: '',
    session: {
      authentication: '',
      otp: 0,
    },
  },
  isLoading: false,
  isLoggedIn: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstname: (state, { payload }: PayloadAction<string>) => {
      state.user.firstName = payload;
    },
    unregistered: (state, { payload }: PayloadAction<SerializedError>) => {
      state.isLoggedIn = false;
      state.error = payload.message;
    },
    logout: (state) => {
      state.user = {
        firstName: '',
        lastName: '',
        session: {
          authentication: '',
          otp: 0,
        },
      };
      state.isLoggedIn = false;
    }
  },
});

export const { setFirstname, unregistered, logout } = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state: RootState) => state.session.user.user;

export const selectIsLoading = (state: RootState) => state.session.user.isLoading;

export const selectIsLoggedIn = (state: RootState) => state.session.user.isLoggedIn;

export const selectError = (state: RootState) => state.session.user.error;
