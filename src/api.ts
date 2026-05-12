import axios from 'axios';
const api = axios.create({
    baseURL: 'http://api.thecatapi.com/',
});
export default api;