import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import _ from 'lodash';

import { RootState } from '..';
import Product from '../../core/types/Product';

const testProducts: Product[] = [
  {
    id: 860,
    title: '6-pc. Chicken McShare Box',
    price: 330,
    image:
      'https://d1r3vc4fck3z1b.cloudfront.net/images/1634788068_web_variance_sicuUZRQ.png',
    category: 'Chicken',
    description: 'Chicken McShare Box',
    rating: {
      count: 451,
      rate: 4.5,
    },
  },
  {
    id: 861,
    title: 'Breakfast Sandwich Duo',
    price: 249,
    image:
      'https://d1r3vc4fck3z1b.cloudfront.net/images/1635123439_mobile_variance_u68wjYea.png',
    category: 'Breakfast',
    description: 'Breakfast Sandwich Duo',
    rating: {
      count: 451,
      rate: 4.5,
    },
  },
  {
    id: 862,
    title: 'Breakfast Rice Bowl Duo',
    price: 289,
    image:
      'https://d1r3vc4fck3z1b.cloudfront.net/images/1635123731_mobile_variance_jrkXSV9m.png',
    category: 'Breakfast',
    description: 'Breakfast Rice Bowl Duo',
    rating: {
      count: 451,
      rate: 4.5,
    },
  },
];

export const loadProducts = createAsyncThunk<
  Product[],
  { merchantId: string; category?: string },
  { state: RootState }
>('products/get', async () => {
  try {
    // let uri = `https://fakestoreapi.com/products`;
    // // if (category && category !== 'All') uri += `/category/${category}`;
    // const response = await axios.get(uri);
    // return response.data;

    return testProducts;
  } catch (err) {
    throw err;
  }
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
      products.list = payload.slice(0, 5);
      products.filterableList = payload.slice(0, 5);
      products.isLoading = false;
    });
    builder.addCase(loadProducts.rejected, (products, { error }) => {
      products.error = error.message;
      products.isLoading = false;
    });
  },
});

export const { filterProducts, selectProduct, setSearchTerm } =
  productsSlice.actions;
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
