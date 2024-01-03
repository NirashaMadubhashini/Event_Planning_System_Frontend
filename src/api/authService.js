import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api/v1';

const axiosInstance = axios.create({
    baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
});

const AuthService = {
    login: async (username, password) => {
        console.log(username,password)
        try {
            const response = await axiosInstance.post('/authenticate', { username, password });
            if (response.data.token) {
                localStorage.setItem('jwtToken', response.data.token); // Consider using secure storage
            }
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message || "Login failed");
        }
    },
    register: async (userData) => {
        try {
            const response = await axiosInstance.post('/register', userData);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message || "Registration failed");
        }
    },
    logout: () => {
        localStorage.removeItem('jwtToken');
    }
};

export default AuthService;
