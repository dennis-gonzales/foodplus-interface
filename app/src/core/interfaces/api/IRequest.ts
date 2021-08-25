import { Method } from "axios";

interface IRequest {
  url: string;
  method?: Method;
  data?: any;
  onStart?: string;
  onSuccess?: string;
  onError?: string;
}

export default IRequest;