import { combineReducers } from 'redux';

import counterReducer from '../slices/counterSlice';
import todosReducer from '../slices/todosSlice';
import userSlice from '../slices/userSlice';

export default combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  user: userSlice,
});