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
      const hasChecked = state.items.some(item => item.status === 'checked');

      if (hasChecked) {
        state.items = _.filter(
          state.items,
          items => items.status !== 'checked'
        );
        state.allStatus = 'unchecked';

        Toast.show({
          type: 'success',
          text1: 'Selected products removed from cart',
        });

      } else {
        Toast.show({
          type: 'info',
          text1: 'Please select a product to remove',
        });
      }
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

        const allChecked = state.items.every(item => item.status === 'checked');
        state.allStatus = allChecked ? 'checked' : 'unchecked';

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
          status: 'unchecked',
        });
        state.allStatus = 'unchecked';

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
      if (!cart) return;
      
      cart.status = cart.status === 'checked' ? 'unchecked' : 'checked';
      const allChecked = state.items.every(item => item.status === 'checked');
      state.allStatus = allChecked ? 'checked' : 'unchecked';
    },
    toggleAllStatus: state => {
      state.allStatus = state.allStatus === 'checked' ? 'unchecked' : 'checked';
      state.items.map(cart => (cart.status = state.allStatus));
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

export const selectAllStatus = (state: RootState) =>
  state.session.cart.allStatus;
