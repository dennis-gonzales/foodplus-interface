import { combineReducers } from 'redux';

import productsSlice from '../slices/productsSlice';
import categoriesSlice from '../slices/categoriesSlice';
import ordersSlice from '../slices/ordersSlice';

export default combineReducers({
  products: productsSlice,
  categories: categoriesSlice,
  orders: ordersSlice,
});