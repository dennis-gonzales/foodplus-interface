import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';

import _ from 'lodash';

import { RootState } from '..';
import { selectIsLoggedIn } from './userSlice';

export const loadCategories = createAsyncThunk<
  string[],
  undefined,
  { state: RootState }
>('categories/get', async (action, { getState }) => {
  if (selectIsLoggedIn(getState())) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  throw 'You are not logged in!';
});

export interface CategoriesState {
  list: string[];
  active?: string;
  isLoading: boolean;
  error?: string;
}

const initialState: CategoriesState = {
  list: [],
  isLoading: false,
};

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateCategory: (state, { payload }: PayloadAction<string>) => {
      state.active = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loadCategories.fulfilled, (categories, { payload }) => {
      categories.list = payload;
      categories.list.unshift('All');
    });

    builder.addCase(loadCategories.rejected, (categories, { error }) => {
      categories.error = error.message;
    });

    builder.addMatcher<PendingAction>(
      action => action.type.endsWith('/pending'),
      (state, action) => {
        state.isLoading = true;
      }
    );

    builder.addMatcher<FulfilledAction>(
      action => action.type.endsWith('/fulfilled'),
      (state, action) => {
        state.isLoading = false;
      }
    );

    builder.addMatcher<RejectedAction>(
      action => action.type.endsWith('/rejected'),
      (state, action) => {
        state.isLoading = false;
      }
    );
  },
});

export const { updateCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;

export const selectCategories = (state: RootState) =>
  state.entities.categories.list;

export const selectActive = (state: RootState) =>
  state.entities.categories.active;

export const selectIsLoading = (state: RootState) =>
  state.entities.categories.isLoading;

export const selectError = (state: RootState) =>
  state.entities.categories.error;