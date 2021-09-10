import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';
import Product from '../../core/interfaces/Product';

export interface CartState {
  list: Product[];
  error?: string;
}

const initialState: CartState = {
  list: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Product>) => {
      state.list.push(payload);
    },
    removeFromCart: (state, { payload }: PayloadAction<Product>) => {
      state.list = state.list.filter(product => product.id !== payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectProductsFromCart = (state: RootState) => state.session.cart.list;