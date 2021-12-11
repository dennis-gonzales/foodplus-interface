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
  {
    id: 883,
    title: 'Brazo Sundae',
    price: 38,
    image:
      'https://d1r3vc4fck3z1b.cloudfront.net/images/1636301973_mobile_alacarte_F8cg5etf.png',
    category: 'Dessert',
    description: 'Brazo Sundae',
    rating: {
      count: 451,
      rate: 4.5,
    },
  },
  {
    id: 881,
    title: 'Ube Pastillas Sundae',
    price: 38.0,
    image:
      'https://d1r3vc4fck3z1b.cloudfront.net/images/1636301663_mobile_alacarte_FTeTPUiT.png',
    category: 'Dessert',
    description: 'Ube Pastillas Sundae',
    rating: {
      count: 451,
      rate: 4.5,
    },
  },
  {
    id: 779,
    title: "Medium Fries N' McFloat Combo",
    price: 79.0,
    image:
      'https://d1r3vc4fck3z1b.cloudfront.net/images/1633400233_mobile_variace_CDlR7DRY.png',
    category: 'Fries',
    description: "Medium Fries N' McFloat Combo",
    rating: {
      count: 451,
      rate: 4.5,
    },
  },
  {
    id: 925,
    title: 'Spicy Chicken McDo Good for 10',
    price: 580.0,
    image:
      'https://d1r3vc4fck3z1b.cloudfront.net/images/1638319809_web_variance_qgSUanh4.png',
    category: 'Chicken',
    description: 'Spicy Chicken McDo Good for 10',
    rating: {
      count: 451,
      rate: 4.5,
    },
  },
  {
    id: 604,
    title: 'Sausage McMuffin Meal',
    price: 124.0000,
    image:
      'https://d1r3vc4fck3z1b.cloudfront.net/images/1631351799_web_variance_fhLqtrJk.png',
    category: 'Sausage',
    description: 'Sausage McMuffin Meal',
    rating: {
      count: 451,
      rate: 4.5,
    },
  },
  {
    id: 605,
    title: "Egg McMuffin Meal",
    price: 135.0000,
    image: "https://d1r3vc4fck3z1b.cloudfront.net/images/1631353059_web_variance_ZvfFRZby.png",
    category: 'Egg',
    description: "Egg McMuffin Meal",
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
      products.list = payload;
      products.filterableList = payload;
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
