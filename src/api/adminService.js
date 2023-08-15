import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/admin';

const axiosInstance = axios.create({
    baseURL: API_URL,
});

axiosInstance.interceptors.request.use(function (config) {
    // Here, you can still perform actions before the request is sent
    return config;
}, function (error) {
    // If there's an error in the request, reject the Promise
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
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
