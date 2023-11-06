import axios, { Canceler, AxiosRequestConfig } from 'axios';
import query from '@/config/query';

const CancelToken = axios.CancelToken;

export function withCancelToken(fetcher: (data:any, config?: AxiosRequestConfig) => Promise<any>):[(data: any, config?: AxiosRequestConfig) => Promise<any>, (message?: string)=> void] {
  let abort: Canceler | null;

  function send(data:any, config?: AxiosRequestConfig) {
    cancel();

    const cancelToken = new CancelToken(cancel => (abort = cancel));
    return fetcher(data, { ...config, cancelToken });
  }

  function cancel(message = 'abort') {
    if (abort) {
      abort(message);
      abort = null;
    }
  }

  return [send, cancel];
}

const http = axios.create({
  baseURL: query.baseURL,
  withCredentials: true
});

export async function request(url: string, config?: AxiosRequestConfig) {
  const response = await http.request({ url, ...config });
  const result = response.data;
  // ...
  return result;
}

export default http;

