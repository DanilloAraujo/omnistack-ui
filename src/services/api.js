import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistackjs-api.herokuapp.com'
})

export default api
