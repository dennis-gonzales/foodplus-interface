import { Middleware } from 'redux';

const logger: Middleware = api => next => action => {
  console.log('dispatching', action.type);
  return next(action);
};

export default logger;
