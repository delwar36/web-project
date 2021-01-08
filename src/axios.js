import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8889'
    // baseURL: 'https://umediad.ca/'
});

export default instance;

