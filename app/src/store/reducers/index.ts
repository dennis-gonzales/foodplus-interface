import { combineReducers } from 'redux';

import entitiesReducers from './entitiesReducers';
import uiReducers from './uiReducers';

export default combineReducers({
  entities: entitiesReducers,
  ui: uiReducers,
});
