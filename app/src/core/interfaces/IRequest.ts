interface IRequest {
  url: string;
  method?: string;
  onStart?: string;
  onSuccess?: string;
  onError?: string;
}

export default IRequest;