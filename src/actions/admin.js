import {
    ADD_EVENT,
    ADD_SERVICE,
    ADD_PACKAGE,
    VIEW_ALL_EVENTS,
    VIEW_ALL_SERVICES,
    VIEW_ALL_PACKAGES,
    SEARCH_EVENT,
    SEARCH_SERVICE,
    SEARCH_PACKAGE,
    DELETE_EVENT,
    DELETE_SERVICE,
    DELETE_PACKAGE,
    UPDATE_EVENT,
    UPDATE_SERVICE,
    UPDATE_PACKAGE,
    CHANGE_ADMIN_STATUS
} from '../constants/actionTypes';

import AdminService from '../api/adminService';


export const addEvent = (data) => async (dispatch) => {
    console.log('data',data)
    try {
        const response = await AdminService.addEvent(data);
        dispatch({ type: ADD_EVENT, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}

export const addService = (data) => async (dispatch) => {
    try {
        const response = await AdminService.addService(data);
        dispatch({ type: ADD_SERVICE, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}

export const addPackage = (data) => async (dispatch) => {
    try {
        const response = await AdminService.addPackage(data);
        dispatch({ type: ADD_PACKAGE, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}

// ... continue for all other methods similarly ...

export const getAllEvents = () => async (dispatch) => {
    try {
        const response = await AdminService.getAllEvents();
        dispatch({ type: VIEW_ALL_EVENTS, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}

export const searchEvent = (eventId) => async (dispatch) => {
    try {
        const response = await AdminService.searchEvent(eventId);
        dispatch({ type: SEARCH_EVENT, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteEvent = (eventId) => async (dispatch) => {
    try {
        await AdminService.deleteEvent(eventId);
        dispatch({ type: DELETE_EVENT, payload: eventId });
    } catch (error) {
        console.error(error.message);
    }
}

export const updateEvent = (data) => async (dispatch) => {
    try {
        const response = await AdminService.updateEvent(data);
        dispatch({ type: UPDATE_EVENT, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}

export const changeAdminStatus = (data) => async (dispatch) => {
    try {
        const response = await AdminService.changeStatusAdmin(data);
        dispatch({ type: CHANGE_ADMIN_STATUS, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}
export const getAllServices = () => async (dispatch) => {
    try {
        const response = await AdminService.getAllServices();
        dispatch({ type: VIEW_ALL_SERVICES, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}

export const getAllPackages = () => async (dispatch) => {
    try {
        const response = await AdminService.getAllPackages();
        dispatch({ type: VIEW_ALL_PACKAGES, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}

export const searchService = (serviceId) => async (dispatch) => {
    try {
        const response = await AdminService.searchService(serviceId);
        dispatch({ type: SEARCH_SERVICE, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}

export const searchPackage = (packageId) => async (dispatch) => {
    try {
        const response = await AdminService.searchPackage(packageId);
        dispatch({ type: SEARCH_PACKAGE, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteService = (serviceId) => async (dispatch) => {
    try {
        await AdminService.deleteService(serviceId);
        dispatch({ type: DELETE_SERVICE, payload: serviceId });
    } catch (error) {
        console.error(error.message);
    }
}

export const deletePackage = (packageId) => async (dispatch) => {
    try {
        await AdminService.deletePackage(packageId);
        dispatch({ type: DELETE_PACKAGE, payload: packageId });
    } catch (error) {
        console.error(error.message);
    }
}

export const updateService = (data) => async (dispatch) => {
    try {
        const response = await AdminService.updateService(data);
        dispatch({ type: UPDATE_SERVICE, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}

export const updatePackage = (data) => async (dispatch) => {
    try {
        const response = await AdminService.updatePackage(data);
        dispatch({ type: UPDATE_PACKAGE, payload: response.data });
    } catch (error) {
        console.error(error.message);
    }
}
