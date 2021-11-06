import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

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

        Toast.show({
          type: 'success',
          text1: `*${cart.quantity} Quantity increased`,
          text2: _.truncate(payload.title, { length: 100 }),
        });
      } else {
        state.list.push({
          product: payload,
          quantity: 1,
          timestamp: new Date().getMilliseconds(),
          price: payload.price,
        });

        Toast.show({
          type: 'success',
          text1: 'Added to cart',
          text2: _.truncate(payload.title, { length: 100 }),
        });
      }
    },
    decreaseQuantity: (state, { payload }: PayloadAction<Cart>) => {
      const cart = _.find(state.list, { product: payload.product });

      if (cart) {
        cart.quantity -= 1;
        cart.price = cart.product.price * cart.quantity;

        if (cart.quantity === 0) {
          state.list = _.without(state.list, cart);
          Toast.show({
            type: 'success',
            text1: 'Removed from cart',
            text2: _.truncate(payload.product.title, { length: 100 }),
          });
          
        } else {
          Toast.show({
            type: 'success',
            text1: `*${cart.quantity} Quantity decreased`,
            text2: _.truncate(payload.product.title, { length: 100 }),
          });
        }
      }
    },
    clearCart: state => {
      state.list = [];

      Toast.show({
        type: 'success',
        text1: 'Cart cleared',
      });
    },
  },
});

export const { addToCart, clearCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

export const selectProductsFromCart = (state: RootState) =>
  state.session.cart.list;
