import axios from 'axios';

const API_URL = 'http://localhost:5000'; // The base URL for your Flask API

const axiosInstance = axios.create({
    baseURL: API_URL,
});

axiosInstance.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

const MLService = {
    runPrediction: () => {
        return axiosInstance.get('/predict');
    },
}

export default MLService;
