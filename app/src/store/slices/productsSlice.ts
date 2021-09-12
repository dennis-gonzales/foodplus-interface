import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import _ from 'lodash';

import { RootState } from '..';
import Product from '../../core/interfaces/Product';
import { selectIsLoggedIn } from './userSlice';

export const loadProducts = createAsyncThunk<
  Product[],
  Partial<{ category: string }>,
  { state: RootState }
>('products/get', async ({ category }, { getState }) => {
  if (selectIsLoggedIn(getState())) {
    // timeout for one second, for testing purposes
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      let uri = `https://fakestoreapi.com/products`;
      if (category && category !== 'All') uri += `/category/${category}`;
      const response = await axios.get(uri);
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
    builder.addCase(loadProducts.pending, (products, action) => {
      products.isLoading = true;
    });
    builder.addCase(loadProducts.fulfilled, (products, { payload }) => {
      products.list = payload;
      products.filterableList = payload;
      products.isLoading = false;
    });
    builder.addCase(loadProducts.rejected, (products, { error }) => {
      products.error = error.message;
      products.isLoading = false;
    });
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