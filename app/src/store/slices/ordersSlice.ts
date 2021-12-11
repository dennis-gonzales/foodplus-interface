import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import _ from 'lodash';

import { RootState } from '..';
import Product from '../../core/types/Product';

export const loadOrders = createAsyncThunk<
  Product[],
  undefined,
  { state: RootState }
>('orders/get', async () => {
  try {
    let uri = `https://fakestoreapi.com/orders`;
    const response = await axios.get(uri);
    return response.data;
  } catch (err) {
    throw err;
  }
});

export interface OrdersState {
  list: Product[];
  filterableList: Product[];
  searchTerm: string;
  selected?: Product;
  isLoading: boolean;
  isFiltered: boolean;
  error?: string;
}

const initialState: OrdersState = {
  list: [],
  filterableList: [],
  searchTerm: '',
  isLoading: true,
  isFiltered: false,
};

export const ordersSlice = createSlice({
  name: 'orderss',
  initialState,
  reducers: {
    selectOrder: (
      orders,
      { payload }: PayloadAction<Product | undefined>
    ) => {
      orders.selected = payload;
    },
    filterOrders: (orders, { payload }: PayloadAction<string>) => {
      if (payload.trim() === '') {
        orders.filterableList = orders.list;
        orders.isFiltered = false;
      } else {
        orders.filterableList = _.filter(orders.list, order => {
          return order.title
            .trim()
            .toLowerCase()
            .startsWith(payload.trim().toLowerCase());
        });
        orders.isFiltered = true;
      }
    },
    setSearchTerm: (orders, { payload }: PayloadAction<string>) => {
      orders.searchTerm = payload;
      if (payload.trim() === '') {
        orders.filterableList = orders.list;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(loadOrders.pending, (orders, action) => {
      orders.isLoading = true;
    });
    builder.addCase(loadOrders.fulfilled, (orders, { payload }) => {
      orders.list = payload;
      orders.filterableList = payload;
      orders.isLoading = false;
    });
    builder.addCase(loadOrders.rejected, (orders, { error }) => {
      orders.error = error.message;
      orders.isLoading = false;
    });
  },
});

export const { filterOrders, selectOrder, setSearchTerm } = ordersSlice.actions;
export default ordersSlice.reducer;

export const selectOrders = (state: RootState) =>
  state.entities.orders.list;

export const selectFilterableOrders = (state: RootState) =>
  state.entities.orders.filterableList;

export const selectSelectedOrder = (state: RootState) =>
  state.entities.orders.selected;

export const selectIsLoading = (state: RootState) =>
  state.entities.orders.isLoading;

export const selectIsFiltered = (state: RootState) =>
  state.entities.orders.isFiltered;

export const selectSearchTerm = (state: RootState) =>
  state.entities.orders.searchTerm;

export const selectError = (state: RootState) => state.entities.orders.error;
