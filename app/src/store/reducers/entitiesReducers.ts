import { combineReducers } from 'redux';

import counterReducer from '../features/counterSlice';
import todosReducer from '../features/todosSlice';

export default combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});