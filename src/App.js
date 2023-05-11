import React from 'react';
import { Container } from '@mui/material';
import './index.css';
import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/Auth/Auth";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Service from "./components/Services/Service";
import Dashboard from "./components/Dashboard/Dashboard";



const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/auth" />} />
                    <Route path="/auth" exact component={SignUp} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/service" exact component={Service} />
                    <Route path="/dashboard" exact component={Dashboard} />
                </Switch>
            </Container>
        </BrowserRouter>

    );
};

export default App;
