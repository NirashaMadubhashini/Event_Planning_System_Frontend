import React from 'react';
import {Container} from '@mui/material';
import './index.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Packages from "./components/Customer/Packages/Packages";
import Service from "./components/Customer/Services/Service";
import Dashboard from "./components/Customer/Dashboard/Dashboard";
import EventRequest from "./components/Customer/EventRequest/EventRequest";
import Booking from "./components/Customer/Booking/Booking";
import Gallery from "./components/Customer/Gallery/Gallery";
import Contact from "./components/Customer/Contact/Contact";
import ServicePackages from "./components/Customer/ServicePackages/ServicePackages";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import Home from "./components/Customer/Home/Home";
import Profile from "./components/Customer/Profile/Profile";
import AddService from "./components/Admin/AddServices/AddServices";
import AddEvent from "./components/Admin/AddEvents/AddEvents";
import ViewBookings from "./components/Admin/ViewBookings/ViewBookings";
import ViewCustomers from "./components/Admin/ViewCustomers/ViewCustomers";
import ViewVendors from "./components/Admin/ViewEventVendors/ViewEventVendors";
import AddPackages from "./components/Admin/Packages/Packages";
import VendorDashboard from "./components/ServiceVendor/VendorDashboard/VendorDashboard";
import VendorProfile from "./components/ServiceVendor/VendorProfile/VendorProfile";
import VendorAddBusiness from "./components/ServiceVendor/VendorRegisterBusiness/VendorRegisterBusiness";
import VendorAddPackages from "./components/ServiceVendor/VendorAddPackages/VendorAddPackages";
import VendorViewBookings from "./components/ServiceVendor/VendorViewBookings/VendorViewBookings";
import VendorGallery from "./components/ServiceVendor/VendorGallery/VendorGallery";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/LandingPage/About/About";
import AdminSignUp from "./components/LandingPage/AdminSignUp/AdminSignUp";
import CustomerSignUp from "./components/LandingPage/CustomerSignUp/CustomerSignUp";
import VendorSignUp from "./components/LandingPage/VendorSignUp/VendorSignUp";

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/auth"/>}/>
                    <Route path="/auth" exact>
                        <LandingPage/>
                        {/*<Navbar />*/}
                        {/*<SignUp />*/}
                    </Route>
                    <Route path="/adminSignUp" exact component={AdminSignUp}/>
                    <Route path="/customerSignUp" exact component={CustomerSignUp}/>
                    <Route path="/vendorSignUp" exact component={VendorSignUp}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/packages" exact component={Packages}/>
                    <Route path="/service" exact component={Service}/>
                    <Route path="/servicePackages" exact component={ServicePackages}/>
                    <Route path="/eventRequest" exact component={EventRequest}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/dashboard" exact component={Dashboard}/>
                    <Route path="/booking" exact component={Booking}/>
                    <Route path="/gallery" exact component={Gallery}/>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/profile" exact component={Profile}/>
                    ---------------------------------------------------
                    <Route path="/adminDashboard" exact component={AdminDashboard}/>
                    <Route path="/addServices" exact component={AddService}/>
                    <Route path="/addEvents" exact component={AddEvent}/>
                    {/*<Route path="/adminGallery" exact component={AdminGallery} />*/}
                    <Route path="/viewBookings" exact component={ViewBookings}/>
                    <Route path="/viewCustomers" exact component={ViewCustomers}/>
                    <Route path="/viewVendors" exact component={ViewVendors}/>
                    <Route path="/addPackages" exact component={AddPackages}/>

                    --------------------------------------------------------
                    <Route path="/vendorDashboard" exact component={VendorDashboard}/>
                    <Route path="/vendorProfile" exact component={VendorProfile}/>
                    <Route path="/vendorAddPackages" exact component={VendorAddPackages}/>
                    <Route path="/vendorAddBusiness" exact component={VendorAddBusiness}/>
                    <Route path="/vendorViewBookings" exact component={VendorViewBookings}/>
                    <Route path="/vendorGallery" exact component={VendorGallery}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;