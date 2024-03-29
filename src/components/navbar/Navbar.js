import React, {useEffect, useState} from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import EventPro from "../../assets/images/BlackLogo.png";
import useStyles from './style';
import AdminDashboard from "../Admin/AdminDashboard/AdminDashboard";

//Nav bar
const Navbar = () => {

    const classes = useStyles();

    const [user, setUser] = useState(null);

    // Dummy function to simulate getting user data
    const getUser = () => {
        return {
            result: {
                name: "John Doe",
                imageUrl: "https://i.pravatar.cc/300", // Replace this with the user's image URL if available
            },
        };
    };

    useEffect(() => {
        setUser(getUser());
    }, []);

    const logout = () => {
        console.log("User logged out"); // Implement your logout logic here
        setUser(null);
    };

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
                <img component={Link} to="/" src={EventPro} alt="icon" height="60px" />
            </Link>
            <Toolbar className={classes.toolbar} style={{ height: '100%' }}>

                {/*<Button component={Link} to="/home" variant="contained" color="primary">Sign In</Button>*/}
                {/*<Button component={Link} to="/adminDashboard" variant="contained" color="primary">Sign In</Button>*/}
                    <Button component={Link} to="/vendorDashboard" variant="contained" color="primary">Sign In</Button>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
