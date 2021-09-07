import { SerializedError } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { selectIsLoggedIn, unregistered } from '../slices/userSlice';

const auth: Middleware = ({ getState, dispatch }) => next => async (action: IAction<SerializedError>) => {
  if (!action.type.endsWith('/pending')) {
    return next(action);
  }

  if (selectIsLoggedIn(getState())) {
    return next(action);
  }

  dispatch({ type: unregistered.type, payload: { message: 'You are not logged in' } });

};

export default auth;
