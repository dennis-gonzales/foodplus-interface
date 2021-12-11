import {
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
  // if (selectIsLoggedIn(getState())) {
  //   try {
  //     const response = await axios.get(
  //       `https://fakestoreapi.com/products/categories`
  //     );
  //     return response.data;
  //   } catch (err) {
  //     throw err;
  //   }
  // }

  // throw 'You are not logged in!';

  return ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Family Size' ];
});

export interface CategoriesState {
  list: string[];
  active?: string;
  isLoading: boolean;
  error?: string;
}

const initialState: CategoriesState = {
  list: [],
  isLoading: true,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateCategory: (state, { payload }: PayloadAction<string>) => {
      state.active = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loadCategories.pending, (categories, action) => {
      categories.isLoading = true;
    });
    builder.addCase(loadCategories.fulfilled, (categories, { payload }) => {
      categories.list = payload;
      categories.list.unshift('All');
      categories.active = 'All';
      categories.isLoading = false;
    });
    builder.addCase(loadCategories.rejected, (categories, { error }) => {
      categories.error = error.message;
      categories.isLoading = false;
    });
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