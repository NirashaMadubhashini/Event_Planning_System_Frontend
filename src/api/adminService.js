import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/admin';

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
        alert("Access Forbidden: You might not have the required permissions.")
        // Additional handling like redirecting to a login page or showing a message can be added here
    }
    return Promise.reject(error);
});

const AdminService = {
    addEvent: (data) => {
        return axiosInstance.post('/add/event', data);
    },

    addService: (data) => {
        return axiosInstance.post('/add/service', data);
    },

    addPackage: (data) => {
        return axiosInstance.post('/add/package', data);
    },

    getAllEvents: () => {
        return axiosInstance.get('/view-all/events');
    },

    getAllServices: () => {
        return axiosInstance.get('/view-all/services');
    },

    getAllPackages: () => {
        return axiosInstance.get('/view-all/packages');
    },

    searchEvent: (eventId) => {
        return axiosInstance.get(`/${eventId}`);
    },

    searchService: (serviceId) => {
        return axiosInstance.get(`/${serviceId}`);
    },

    searchPackage: (packageId) => {
        return axiosInstance.get(`/${packageId}`);
    },

    deleteEvent: (eventId) => {
        return axiosInstance.delete(`/delete/event`, { params: { eventId } });
    },

    deleteService: (serviceId) => {
        return axiosInstance.delete(`/delete/service`, { params: { serviceId } });
    },

    deletePackage: (packageId) => {
        return axiosInstance.delete(`/delete/package`, { params: { packageId } });
    },

    updateEvent: (data) => {
        return axiosInstance.put('/update/event', data);
    },

    updateService: (data) => {
        return axiosInstance.put('/update/service', data);
    },

    updatePackage: (data) => {
        return axiosInstance.put('/update/package', data);
    },

    changeStatusAdmin: (data) => {
        return axiosInstance.put('/change/status/admin', data);
    }
}

export default AdminService;
