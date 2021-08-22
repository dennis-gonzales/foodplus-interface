import { combineReducers } from 'redux';

import counterReducer from '../features/counterSlice';
import todosReducer from '../features/todosSlice';
import userSlice from '../features/userSlice';

export default combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  user: userSlice,
});