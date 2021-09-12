import { combineReducers } from 'redux';

import counterSlice from '../slices/counterSlice';
import todosSlice from '../slices/todosSlice';
import productsSlice from '../slices/productsSlice';
import categoriesSlice from '../slices/categoriesSlice';

export default combineReducers({
  counter: counterSlice,
  todos: todosSlice,
  products: productsSlice,
  categories: categoriesSlice,
});