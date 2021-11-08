import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

import _ from 'lodash';

import { RootState } from '..';
import CartItem from '../../core/types/CartItem';
import Product from '../../core/types/Product';

export interface CartState {
  items: CartItem[];
  allStatus: 'checked' | 'unchecked' | 'indeterminate';
  error?: string;
}

const initialState: CartState = {
  items: [],
  allStatus: 'unchecked',
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      state.items = [];

      Toast.show({
        type: 'success',
        text1: 'Cart cleared',
      });
    },
    decreaseQuantity: (state, { payload }: PayloadAction<Product>) => {
      const cart = _.find(state.items, cart => cart.product.id === payload.id);

      if (cart) {
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
          timestamp: new Date().getMilliseconds(),
          price: payload.price,
          status: 'unchecked',
        });

        Toast.show({
          type: 'success',
          text1: 'Added to cart',
          text2: _.truncate(payload.title, { length: 100 }),
        });
      }
    },
    toggleProductStatus: (state, { payload }: PayloadAction<CartItem>) => {
      const cart = _.find(
        state.items,
        cart => cart.product.id === payload.product.id
      );

      if (cart) {
        cart.status = cart.status === 'checked' ? 'unchecked' : 'checked';
        const allChecked = state.items.every(item => item.status === 'checked');
        state.allStatus = allChecked ? 'checked' : 'unchecked';
      }

    },
    toggleAllStatus: (state, { payload }: PayloadAction) => {
      state.allStatus = state.allStatus === 'checked' ? 'unchecked' : 'checked';
      state.items.map(cart => cart.status = state.allStatus);
    },
  },
});

export const {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  toggleProductStatus,
  toggleAllStatus,
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectProducts = (state: RootState) => state.session.cart.items;

export const selectCheckedProducts = (state: RootState) =>
  _.filter(state.session.cart.items, cart => cart.status === 'checked');

export const selectAllStatus = (state: RootState) => state.session.cart.allStatus;
