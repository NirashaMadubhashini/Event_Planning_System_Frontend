import React from 'react';
import { Container } from '@mui/material';
import './index.css';
import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/Auth/Auth";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Packages from "./components/Customer/Packages/Packages";
import Service from "./components/Customer/Services/Service";
import Dashboard from "./components/Customer/Dashboard/Dashboard";
import EventRequest from "./components/Customer/EventRequest/EventRequest";
import About from "./components/Customer/About/About";
import Booking from "./components/Customer/Booking/Booking";
import Feedback from "./components/Customer/Feedback/Feedback";



const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/auth" />} />
                    <Route path="/auth" exact component={SignUp} />
                    <Route path="/packages" exact component={Packages} />
                    <Route path="/service" exact component={Service} />
                    <Route path="/eventRequest" exact component={EventRequest} />
                    <Route path="/about" exact component={About} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/booking" exact component={Booking} />
                    <Route path="/feedback" exact component={Feedback} />
                </Switch>
            </Container>
        </BrowserRouter>

    );
};

export default App;
