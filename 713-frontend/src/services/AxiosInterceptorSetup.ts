import apiClient from './AxiosClient'
apiClient.interceptors.request.use(
  (request) => {
    console.log('Interceptor executed!');
    const token = localStorage.getItem('token')
    console.log('token', token)
    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`
    }
    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)
