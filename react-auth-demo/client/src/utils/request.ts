import axios, { AxiosResponse } from "axios";

type Opts = {
  method: "get" | "post" | "delete" | "put" | "patch";
  [key: string]: any;
};

interface IRequest {
  <T extends IRequest = any>(url: string, opts: Opts): Promise<
    AxiosResponse<T>
  >;
  <T = any>(url: string, opts: Opts): Promise<T>;
}

const config: any = {
  // baseURL: 'http://127.0.0.1:8001',
  timeout: 30 * 1000,
  headers: {},
};

// 构建实例
const instance = axios.create(config);

instance.interceptors.request.use(
  (request: any) => {
    request.headers["access_token"] = localStorage.getItem("access_token");
    return request;
  },
  (err) => {
    Promise.reject(err.response);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data);

    if (response.data.code === 401) {
      //token过期或者错误
      window.location.replace("/login");
    }
    return response.data.data;
  },
  (err) => {
    Promise.reject(err.response);
  }
);
// axios方法映射
const InstanceMapper = {
  get: instance.get,
  post: instance.post,
  delete: instance.delete,
  put: instance.put,
  patch: instance.patch,
};

const request: IRequest = (url: string, opts: Opts) => {
  const method = opts.method;
  return InstanceMapper[method](url, opts.data);
};

export default request;
