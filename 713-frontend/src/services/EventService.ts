import axios from 'axios'
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(pageNo: number, pageSize: number) {
    return apiClient.get('/events?pageNo=' + pageNo + '&pageSize=' + pageSize)
  },
  getEvent(id: number) {
    return apiClient.get(`/events/${id}`)
  }
}
