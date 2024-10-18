import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    }
  })

  return {
    provide: {
      axios: axiosInstance
    }
  }
})