// index.js

// Importing necessary modules from React and Redux libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importing the main application component
import './index.css'; // Importing styles
import { applyMiddleware, compose, createStore } from "redux"; // Importing Redux functions
import thunk from "redux-thunk"; // Importing Redux Thunk middleware
import { Provider } from "react-redux"; // Importing the Redux Provider component
import { reducers } from "./reducers"; // Importing the Redux reducers

// Creating a Redux store using the provided reducers and applying Redux Thunk middleware
const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

// Rendering the React application inside the root DOM element, wrapped in Redux Provider
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
