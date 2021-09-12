import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import _ from 'lodash';

import { RootState } from '..';
import Product from '../../core/interfaces/Product';
import { selectIsLoggedIn } from './userSlice';

export const loadProducts = createAsyncThunk<
  Product[],
  Partial<{ productId: number }>,
  { state: RootState }
>('products/get', async ({ productId }, { getState }) => {
  if (selectIsLoggedIn(getState())) {

    // timeout for one second, for testing purposes
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  throw 'You are not logged in!';
});

export interface ProductsState {
  list: Product[];
  filterableList: Product[];
  selected?: Product;
  isLoading: boolean;
  isFiltered: boolean;
  error?: string;
}

const initialState: ProductsState = {
  list: [],
  filterableList: [],
  isLoading: true,
  isFiltered: false,
};

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (state, { payload }: PayloadAction<Product | undefined>) => {
      state.selected = payload;
    },
    filterProducts: (state, { payload }: PayloadAction<string>) => {
      if (payload.trim() === '') {
        state.filterableList = state.list;
        state.isFiltered = false;
      } else {
        state.filterableList = _.filter(state.list, product => {
          return product.title
            .trim()
            .toLowerCase()
            .startsWith(payload.trim().toLowerCase());
        });
        state.isFiltered = true;
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(loadProducts.fulfilled, (products, { payload }) => {
      products.list = payload;
      products.filterableList = payload;
    });

    builder.addCase(loadProducts.rejected, (products, { error }) => {
      products.error = error.message;
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

export const { filterProducts, selectProduct } = productsSlice.actions;
export default productsSlice.reducer;

export const selectProducts = (state: RootState) => state.entities.products.list;

export const selectFilterableProducts = (state: RootState) =>
  state.entities.products.filterableList;

export const selectSelectedProduct = (state: RootState) => state.entities.products.selected;

export const selectIsLoading = (state: RootState) =>
  state.entities.products.isLoading;

export const selectIsFiltered = (state: RootState) =>
  state.entities.products.isFiltered;