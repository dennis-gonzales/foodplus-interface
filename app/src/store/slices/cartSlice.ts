import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import _ from 'lodash';

import { RootState } from '..';
import Cart from '../../core/interfaces/Cart';
import Product from '../../core/interfaces/Product';

export interface CartState {
  list: Cart[];
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
      const cart = _.find(state.list, cart => cart.product.id === payload.id);
      
      if (cart) {
        cart.quantity += 1;
        cart.price = cart.product.price * cart.quantity;
      } else {
        state.list.push({
          product: payload,
          quantity: 1,
          timestamp: new Date().getMilliseconds(),
          price: payload.price,
        });
      }
    },
    decreaseQuantity: (state, { payload }: PayloadAction<Cart>) => {
      const product = _.find(state.list, { product: payload.product });

      if (product) {
        product.quantity -= 1;
        product.price = product.product.price * product.quantity;

        if (product.quantity === 0) {
          state.list = _.without(state.list, product);
        }
      }
    },
    clearCart: (state) => {
      state.list = [];
    }
  },
});

export const { addToCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectProductsFromCart = (state: RootState) => state.session.cart.list;