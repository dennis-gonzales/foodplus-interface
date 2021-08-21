import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';
import api from './middlewares/api';
import logger from './middlewares/logger';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
  .prepend(api)
  .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
