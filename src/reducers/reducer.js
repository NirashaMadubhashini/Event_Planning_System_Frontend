import {
    ADD_EVENT,
    VIEW_ALL_EVENTS,
    SEARCH_EVENT,
    DELETE_EVENT,
    UPDATE_EVENT,
    ADD_SERVICE,
    VIEW_ALL_SERVICES,
    SEARCH_SERVICE,
    DELETE_SERVICE,
    UPDATE_SERVICE,
    ADD_PACKAGE,
    VIEW_ALL_PACKAGES,
    SEARCH_PACKAGE,
    DELETE_PACKAGE,
    UPDATE_PACKAGE,
    CHANGE_ADMIN_STATUS,
    FETCH_SERVICES_TYPE_WISE_SUCCESS, FETCH_SERVICES_TYPE_WISE_FAILURE
} from "../constants/actionTypes";

const initialState = {
    events: [],
    services: [],
    packages: [],
    adminStatusChanged: false,
    vendorServicesTypeWise: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        // Events
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload]
            };

        case VIEW_ALL_EVENTS:
            return {
                ...state,
                events: action.payload
            };

        case SEARCH_EVENT:
            // Assuming payload contains the found event
            return {
                ...state,
                events: state.events.map(event => event.id === action.payload.id ? action.payload : event)
            };

        case DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.payload)
            };

        case UPDATE_EVENT:
            return {
                ...state,
                events: state.events.map(event => event.id === action.payload.id ? action.payload : event)
            };

        // Services
        case ADD_SERVICE:
            return {
                ...state,
                services: [...state.services, action.payload]
            };

        case VIEW_ALL_SERVICES:
            return {
                ...state,
                services: action.payload
            };

        case SEARCH_SERVICE:
            return {
                ...state,
                services: state.services.map(service => service.id === action.payload.id ? action.payload : service)
            };

        case DELETE_SERVICE:
            return {
                ...state,
                services: state.services.filter(service => service.id !== action.payload)
            };

        case UPDATE_SERVICE:
            return {
                ...state,
                services: state.services.map(service => service.id === action.payload.id ? action.payload : service)
            };

        // Packages
        case ADD_PACKAGE:
            return {
                ...state,
                packages: [...state.packages, action.payload]
            };

        case VIEW_ALL_PACKAGES:
            return {
                ...state,
                packages: action.payload
            };

        case SEARCH_PACKAGE:
            return {
                ...state,
                packages: state.packages.map(pkg => pkg.id === action.payload.id ? action.payload : pkg)
            };

        case DELETE_PACKAGE:
            return {
                ...state,
                packages: state.packages.filter(pkg => pkg.id !== action.payload)
            };

        case UPDATE_PACKAGE:
            return {
                ...state,
                packages: state.packages.map(pkg => pkg.id === action.payload.id ? action.payload : pkg)
            };

        // Admin Status
        case CHANGE_ADMIN_STATUS:
            // Assuming that the payload contains a boolean value for the status change
            return {
                ...state,
                adminStatusChanged: action.payload
            };
        case FETCH_SERVICES_TYPE_WISE_SUCCESS:
            return {
                ...state,
                vendorServicesTypeWise: action.payload,
                error: null
            };

        case FETCH_SERVICES_TYPE_WISE_FAILURE:
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    }
};

export default reducer;
