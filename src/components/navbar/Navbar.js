import React, {useEffect, useState} from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import EventpPro from '../../images/logo.png';
import useStyles from './style';

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
                <img component={Link} to="/" src={EventpPro} alt="icon" height="100px" />
            </Link>
            <Toolbar className={classes.toolbar} style={{ height: '100%' }}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="primary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/home" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
