import { combineReducers } from 'redux';

import productsSlice from '../slices/productsSlice';
import categoriesSlice from '../slices/categoriesSlice';

export default combineReducers({
  products: productsSlice,
  categories: categoriesSlice,
});