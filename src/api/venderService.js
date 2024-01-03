import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/vendor';

const axiosInstance = axios.create({
    baseURL: API_URL,
});

axiosInstance.interceptors.request.use(function (config) {
    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem('jwtToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Handle 403 Forbidden error specifically
    if (error.response && error.response.status === 403) {
        console.error('Access Forbidden: You might not have the required permissions.');
        // Additional handling like redirecting to a login page or showing a message can be added here
    }
    return Promise.reject(error);
});

const VendorService = {
    getServicesTypeWise: (serviceType) => {
        return axiosInstance.get(`/filter/order/typeWise/${serviceType}`);
    },

    // Add more vendor-specific API calls as needed

    // Example:
    addVendor: (data) => {
        return axiosInstance.post('/add/vendor', data);
    },

    getAllVendors: () => {
        return axiosInstance.get('/view-all/vendors');
    },

    searchVendor: (vendorId) => {
        return axiosInstance.get(`/${vendorId}`);
    },

    deleteVendor: (vendorId) => {
        return axiosInstance.delete(`/delete/vendor`, { params: { vendorId } });
    },

    updateVendor: (data) => {
        return axiosInstance.put('/update/vendor', data);
    },

    // ... and so on for other vendor-related operations
}

export default VendorService;
