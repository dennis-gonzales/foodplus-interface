import { combineReducers } from 'redux';

import entitiesReducers from './entitiesReducers';
import sessionReducers from './sessionReducers';

export default combineReducers({
  entities: entitiesReducers,
  session: sessionReducers,
});
