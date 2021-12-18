import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSelector } from 'reselect';

import _ from 'lodash';

import { RootState } from '..';
import Merchant from '../../core/types/Merchant';

const testMerchants = [
  {
    name: 'McDonalds',
    description:
      "McDonald’s serves the world some of its favorite food like the Big Mac, Big n' Tasty, Quarter Pounder with Cheese, Cheeseburger, French Fries, Egg McMuffin, Apple Pie and Sundae. This is what we are famous for, globally and locally.",
    logo: 'https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-picture-3.png',
    featured: true,
  },
  {
    name: 'Burger King',
    description:
      'Every day, more than 11 million guests visit Burger King restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png',
    featured: true,
  },
  {
    name: 'KFC',
    description:
      'Kentucky Fried Chicken owes its delicious history to Harland David Sanders, its founder who is fondly referred to as “The Colonel”. Upon perfection of the Original Recipe that makes use of 11 secret herbs and spices, Colonel Sanders has brought the ultimate delight of chicken lovers to the world.',
    logo: 'https://corporate.kfc.com.ph/wp-content/themes/kfc/assets/images/logo.png',
    featured: true,
  },
  {
    name: 'Pizza Hut',
    description:
      'One day in 1958, two enterprising college students, Frank and Dan Carney, borrowed $600 from their mom and opened a small pizza restaurant in their hometown in Wichita, Kansas.',
    logo: 'https://www.seekpng.com/png/detail/122-1229840_pizza-hut-delivery-pizza-hut-make-it-great.pnghttps://image.pngaaa.com/74/2699074-middle.png',
  },
];

export const loadMerchants = createAsyncThunk<
  Merchant[],
  void,
  { state: RootState }
>('merchants/get', async () => {
  return testMerchants;
});

export interface MerchantsState {
  list: Merchant[];
  selected?: Merchant;
  isLoading: boolean;
  error?: string;
}

const initialState: MerchantsState = {
  list: [],
  isLoading: true,
};

export const merchantsSlice = createSlice({
  name: 'merchants',
  initialState,
  reducers: {
    selectMerchant: (
      merchant,
      { payload }: PayloadAction<Merchant | undefined>
    ) => {
      merchant.selected = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loadMerchants.pending, (merchant, action) => {
      merchant.isLoading = true;
    });
    builder.addCase(loadMerchants.fulfilled, (merchant, { payload }) => {
      merchant.list = payload;
      merchant.isLoading = false;
    });
    builder.addCase(loadMerchants.rejected, (merchant, { error }) => {
      merchant.error = error.message;
      merchant.isLoading = false;
    });
  },
});

export const { selectMerchant } = merchantsSlice.actions;
export default merchantsSlice.reducer;

export const selectMerchants = (state: RootState) =>
  state.entities.merchants.list;

export const selectFeaturedMerchants = createSelector(
  selectMerchants,
  merchants => merchants.filter(merchant => merchant.featured)
);

export const selectSelectedMerchant = (state: RootState) =>
  state.entities.merchants.selected;

export const selectIsLoading = (state: RootState) =>
  state.entities.merchants.isLoading;

export const selectError = (state: RootState) => state.entities.merchants.error;
