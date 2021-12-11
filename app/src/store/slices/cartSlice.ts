import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import Toast from 'react-native-toast-message';

import _ from 'lodash';

import { RootState } from '..';
import CartItem from '../../core/types/CartItem';
import Product from '../../core/types/Product';

export interface CartState {
  items: CartItem[];
  error?: string;
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      Toast.show({
        type: 'info',
        text1: 'Items in cart cleared',
      });
    },
    decreaseQuantity: (state, { payload }: PayloadAction<Product>) => {
      const cart = _.find(state.items, cart => cart.product.id === payload.id);
      if (!cart) return;

      cart.quantity -= 1;
      cart.price = cart.product.price * cart.quantity;

      if (cart.quantity === 0) {
        state.items = _.without(state.items, cart);

        Toast.show({
          type: 'success',
          text1: 'Removed from cart',
          text2: _.truncate(payload.title, { length: 100 }),
        });

      } else {
        Toast.show({
          type: 'success',
          text1: `*${cart.quantity} Quantity decreased`,
          text2: _.truncate(payload.title, { length: 100 }),
        });
      }
    },
    increaseQuantity: (state, { payload }: PayloadAction<Product>) => {
      const cart = _.find(state.items, cart => cart.product.id === payload.id);

      if (cart) {
        cart.quantity += 1;
        cart.price = cart.product.price * cart.quantity;

        Toast.show({
          type: 'success',
          text1: `*${cart.quantity} Quantity increased`,
          text2: _.truncate(payload.title, { length: 100 }),
        });
      } else {
        state.items.push({
          product: payload,
          quantity: 1,
          timestamp: new Date().toLocaleString(),
          price: payload.price,
        });

        Toast.show({
          type: 'success',
          text1: 'Added to cart',
          text2: _.truncate(payload.title, { length: 100 }),
        });
      }
    },
  },
});

export const {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartProducts = (state: RootState) => state.session.cart.items;

export const selectCartTotalPrice = createSelector([selectCartProducts], items =>
  _.sumBy(items, cart => cart.price)
);