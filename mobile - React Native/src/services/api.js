import axios from 'axios';

const api = axios.create({
   baseURL: "http://192.168.5.14:8000",
});

export default api;