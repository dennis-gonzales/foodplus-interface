import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '..';
import Product from '../../core/interfaces/Product';
import { selectIsLoggedIn } from './userSlice';

export const loadProducts = createAsyncThunk<
  Product[],
  Partial<{ productId: number }>,
  { state: RootState }
>('products/get', async ({ productId }, { getState }) => {
  if (selectIsLoggedIn(getState())) {
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
  selected?: Product;
  isLoading: boolean;
  error?: string;
}

const initialState: ProductsState = {
  list: [],
  isLoading: false,
};

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (state, { payload }: PayloadAction<Product>) => {
      state.selected = payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(loadProducts.fulfilled, (products, { payload }) => {
      products.list = payload;
    });

    builder.addCase(loadProducts.rejected, (products, { error }) => {
      products.error = error.message;
    });

    builder.addMatcher<PendingAction>(
      action => action.type.endsWith('/pending'),
      (state, _) => {
        state.isLoading = true;
      }
    );

    builder.addMatcher<FulfilledAction>(
      action => action.type.endsWith('/fulfilled'),
      (state, _) => {
        state.isLoading = false;
      }
    );

    builder.addMatcher<RejectedAction>(
      action => action.type.endsWith('/rejected'),
      (state, _) => {
        state.isLoading = false;
      }
    );
  },
});

export const { selectProduct } = productsSlice.actions;
export default productsSlice.reducer;

export const selectProducts = (state: RootState) => state.entities.products.list;

export const selectSelectedProduct = (state: RootState) => state.entities.products.selected;

export const selectIsLoading = (state: RootState) =>
  state.entities.products.isLoading;
