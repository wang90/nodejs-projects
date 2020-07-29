import axios from "axios";

// 创建axios实例
const http = axios.create({
  baseURL: 'http://localhost:8080/xhr/v1/',
  timeout: 5000 // 请求超时时间
});

// request拦截器
http.interceptors.request.use(
  cfg => {
    return cfg;
  },
  error => {
    return Promise.reject(error);
  }
);
//respone拦截器
http.interceptors.response.use(
  res => {
    return Promise.resolve(res.data);
  },
  error => {
    return Promise.reject(error);
  }
);
export default http;