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

export const logout = createAsyncThunk('user/logout', async () => {
  const response = await axios.post('/api/logout');
  return response.data;
});

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
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstname: (state, action: PayloadAction<string>) => {
      state.user.firstName = action.payload;
    },
    unregistered: (state, { payload }: PayloadAction<SerializedError>) => {
      state.isLoggedIn = false;
      state.error = payload.message;
    }
  },
  extraReducers: builder => {
    builder.addCase(login.pending, (state, _) => {
      state.isLoading = true;
      state.error = undefined;
    });

    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = payload;
    });

    builder.addCase(login.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(logout.pending, (state, _) => {
      state.isLoading = true;
      state.error = undefined;
    });

    builder.addCase(logout.fulfilled, (state, _) => {
      state.isLoggedIn = false;
      state.user = initialState.user;
    });

    builder.addCase(logout.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    
  },
});

export const { setFirstname, unregistered } = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state: RootState) => state.entities.user.user;

export const selectIsLoading = (state: RootState) => state.entities.user.isLoading;

export const selectIsLoggedIn = (state: RootState) => state.entities.user.isLoggedIn;

export const selectError = (state: RootState) => state.entities.user.error;
