import axios from "axios";
import { MiddlewareAPI, Dispatch, Middleware } from "redux";

import * as actions from '../actions/requestApi';

const api: Middleware = (api: MiddlewareAPI) => (next: Dispatch) => async (action: any) => {
  if (action.type !== actions.requestStarted.type) {
    return next(action);
  }

  const { url, method, data, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      url,
      method,
      data,
    });

    console.log(response.data);
    
    return next({
      type: onSuccess || actions.requestSuccess.type,
      payload: response.data,
    });
  } catch (error) {

    return next({
      type: onError || actions.requestFailed.type,
      payload: error,
    });
  }
};

export default api;