import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { isServer } from './util';

const API_TIMEOUT_INTERVAL = 60 * 1000 // 请求超时时间


const BASE_URL = isServer ? 'http://localhost:8081' : `/api`

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL, // 在客户端中发送请求会自动添加上 当前网站的域名地址
  // headers: { 'Content-Type': 'application/json;charset=UTF-8;' },
  timeout: API_TIMEOUT_INTERVAL,
  withCredentials: false // 跨域请求是要不要携带cookie
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error.data.error.message)
  }
)

instance.interceptors.response.use(
  function (config) {
    if (config.status == 200) {
      return Promise.resolve(config)
    } else {
      return Promise.reject(config)
    }
  },
  async function (error) {
    const { response } = error

    if (response) {
      const config = error.config
      const [RETRY_COUNT, RETRY_DELAY] = [3, 1000]

      if (config && RETRY_COUNT) {
        config.__retryCount = config.__retryCount || 0
        if (config.__retryCount >= RETRY_COUNT) {
          return Promise.reject(response || { message: error.message })
        }
        config.__retryCount++
        const rollback = new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve()
          }, RETRY_DELAY || 1)
        })
        await rollback
        return await instance(config)
      }

      return Promise.reject(response)
    }
  }
)

export default instance
