import { combineReducers } from 'redux';

import counterReducer from '../features/counterSlice';
import todoReducer from '../features/todoSlice';

export default combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});