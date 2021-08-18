import { MiddlewareAPI, Dispatch, Middleware } from "redux";

const logger: Middleware = (api: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  console.log({ api });
  console.log({ next });
  console.log({ action });
  next(action);
};

export default logger;