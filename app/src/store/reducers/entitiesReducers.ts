import { combineReducers } from 'redux';

import counterReducer from '../features/counterSlice';

export default combineReducers({
  counter: counterReducer,
});