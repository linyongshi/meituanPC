import axios from 'axios'
axios.defaults.baseURL = 'https://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  config.params = {
    ...config.params,
    appkey: 'candice_1573119076189'
  }
  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
