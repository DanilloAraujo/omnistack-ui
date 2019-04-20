import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistackjs.herokuapp.com'
})

export default api
