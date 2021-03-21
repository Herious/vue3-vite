import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';


interface IResponse {
  code: number,
  message: string
  date?: any
}

const baseURL: string = 'http://localhost:3096';

const api = axios.create({
  baseURL,
  timeout: 8000
});

api.interceptors.request.use((req: AxiosRequestConfig) => {
  const token: string = localStorage.getItem("token") as string;
  return req;
})

api.interceptors.response.use((res: AxiosResponse) => {
  const response: IResponse = res.data;
  if (0 !== response.code) {
    console.warn(response.message)
  }
  return res
}, error => {
  console.log(error);
})

export default api;