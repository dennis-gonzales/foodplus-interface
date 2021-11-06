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
  searchTerm: string;
  selected?: Product;
  isLoading: boolean;
  isFiltered: boolean;
  error?: string;
}

const initialState: ProductsState = {
  list: [],
  filterableList: [],
  searchTerm: '',
  isLoading: true,
  isFiltered: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (
      products,
      { payload }: PayloadAction<Product | undefined>
    ) => {
      products.selected = payload;
    },
    filterProducts: (products, { payload }: PayloadAction<string>) => {
      if (payload.trim() === '') {
        products.filterableList = products.list;
        products.isFiltered = false;
      } else {
        products.filterableList = _.filter(products.list, product => {
          return product.title
            .trim()
            .toLowerCase()
            .startsWith(payload.trim().toLowerCase());
        });
        products.isFiltered = true;
      }
    },
    setSearchTerm: (products, { payload }: PayloadAction<string>) => {
      products.searchTerm = payload;
      if (payload.trim() === '') {
        products.filterableList = products.list;
      }
    },
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

export const { filterProducts, selectProduct, setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;

export const selectProducts = (state: RootState) =>
  state.entities.products.list;

export const selectFilterableProducts = (state: RootState) =>
  state.entities.products.filterableList;

export const selectSelectedProduct = (state: RootState) =>
  state.entities.products.selected;

export const selectIsLoading = (state: RootState) =>
  state.entities.products.isLoading;

export const selectIsFiltered = (state: RootState) =>
  state.entities.products.isFiltered;

export const selectSearchTerm = (state: RootState) =>
  state.entities.products.searchTerm;

export const selectError = (state: RootState) => state.entities.products.error;
