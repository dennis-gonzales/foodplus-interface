import { combineReducers } from 'redux';

import productsSlice from '../slices/productsSlice';
import categoriesSlice from '../slices/categoriesSlice';
import ordersSlice from '../slices/ordersSlice';
import merchantsSlice from '../slices/merchantsSlice';

export default combineReducers({
  categories: categoriesSlice,
  merchants: merchantsSlice,
  orders: ordersSlice,
  products: productsSlice,
});