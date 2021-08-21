import axios from "axios";
import { MiddlewareAPI, Dispatch, Middleware } from "redux";
import IRequest from "../../core/interfaces/IRequest";

import * as actions from '../actions/requestAction';

const api: Middleware = ({ dispatch }: MiddlewareAPI) => (next: Dispatch) => async (action: IAction<IRequest>) => {
  if (action.type !== actions.requestStarted.type) {
    return next(action);
  }

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  try {
    const response = await axios.request({
      url,
      method,
      data,
    });
    
    dispatch({ type: actions.requestSuccess.type });

    if (onSuccess) {
      dispatch({
      type: onSuccess,
      payload: response.data,
    });
    }

  } catch (error) {

    dispatch({ type: actions.requestFailed.type });

    if (onError) {
      dispatch({
        type: onError,
        payload: error.message,
      });
    }
  }
};

export default api;