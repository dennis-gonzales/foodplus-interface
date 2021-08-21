import {  Middleware } from 'redux';

const logger: Middleware = api => next => action => {
  console.log('dispatching', action);
  next(action);
};

export default logger;
