import React from 'react';
import { Container } from '@mui/material';
import './index.css';
import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/Auth/Auth";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Packages from "./components/Customer/Packages/Packages";
import Service from "./components/Customer/Services/Service";
import Dashboard from "./components/Customer/Dashboard/Dashboard";
import EventRequest from "./components/Customer/EventRequest/EventRequest";
import About from "./components/Customer/About/About";
import Booking from "./components/Customer/Booking/Booking";
import Gallery from "./components/Customer/Gallery/Gallery";
import Contact from "./components/Customer/Contact/Contact";
import ServicePackages from "./components/Customer/ServicePackages/ServicePackages";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/auth" />} />
                    <Route path="/auth" exact>
                        <Navbar />
                        <SignUp />
                    </Route>
                    <Route path="/packages" exact component={Packages} />
                    <Route path="/service" exact component={Service} />
                    <Route path="/servicePackages" exact component={ServicePackages} />
                    <Route path="/eventRequest" exact component={EventRequest} />
                    <Route path="/about" exact component={About} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/booking" exact component={Booking} />
                    <Route path="/gallery" exact component={Gallery} />
                    <Route path="/contact" exact component={Contact} />
                    ---------------------------------------------------
                    <Route path="/adminDashboard" exact component={AdminDashboard} />
                    {/*<Route path="/addServices" exact component={AddService} />*/}
                    {/*<Route path="/addEvents" exact component={AddEvent} />*/}
                    {/*<Route path="/adminGallery" exact component={AdminGallery} />*/}
                    {/*<Route path="/viewBookings" exact component={ViewBookings} />*/}
                    {/*<Route path="/viewCustomers" exact component={ViewCustomers} />*/}
                    {/*<Route path="/viewVendors" exact component={ViewVendors} />*/}
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;
