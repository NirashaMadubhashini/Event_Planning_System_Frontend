import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Menu,MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    landingPage: {
        background: `url("https://cfw.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoicGlua2Nhdmlhci5jb20uYXUiLCJ2IjoxOTIwMDgwMzQxLCJpIjoiODFjODBjMjItMzZmMC00OWI5LTRlYmYtNjA4NGVmOTllNDAwIn0/wp-content/uploads/2023/03/event-decorations-beautiful-corporate-theme-party-1080x810.jpg")`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        height: '97vh',
        width: '209vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        overflowX: 'hidden', // Prevent horizontal scrollbar
        overflowY: 'hidden', // Prevent horizontal scrollbar
    },
    websiteName: {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    heading: {
        fontSize: '4rem',
        marginBottom: '1rem',
    },
    subHeading: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
    },
    buttonContainer: {
        display: 'flex',
        gap: '2rem',
        '& button': {
            padding: '10px 20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'scale(1.05)',
            },
        },
    },
}));

const LandingPage = () => {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleGetStartedClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleGetStartedClose = () => {
        setAnchorEl(null);
    };

    const handleRoleSelection = (role) => {
        let routePath = '';
        if (role === 'admin') {
            routePath = '/adminSignUp';
        } else if (role === 'customer') {
            routePath = '/customerSignUp';
        } else if (role === 'vendor') {
            routePath = '/vendorSignUp';
        }
        history.push(routePath);
        handleGetStartedClose();
    };
    // const handleGetStarted = (role) => {
    //     history.push(`/get-started/${role}`);
    // };

    return (
        <div className={classes.landingPage}>
            <div className={classes.websiteName}>Event-Pro</div>
            <div className={classes.heading}>Event Planner</div>
            <div className={classes.subHeading}>EVERY EVENT SHOULD BE PERFECT</div>
            <div className={classes.buttonContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push('/about')}
                >
                    About Us
                </Button>
                <div className={classes.buttonContainer}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleGetStartedClick}
                    >
                        Get Started !
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleGetStartedClose}
                    >
                        <MenuItem onClick={() => handleRoleSelection('admin')}>As an Admin</MenuItem>
                        <MenuItem onClick={() => handleRoleSelection('customer')}>As a Customer</MenuItem>
                        <MenuItem onClick={() => handleRoleSelection('vendor')}>As a Vendor</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
