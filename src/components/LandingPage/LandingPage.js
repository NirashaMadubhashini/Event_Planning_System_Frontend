import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import {setUserRole} from "../../actions";

const useStyles = makeStyles((theme) => ({
    landingPage: {
        background: 'url("https://www.datocms-assets.com/9759/1590743134-18th-black-white-birthday-party-kent-013.jpg") no-repeat center center',
        backgroundSize: 'cover',
        margin:'-24px',
        padding: 0,
        width: '100vw',
        height: '105vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        overflow: 'hidden',
    },
    websiteName: {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#FFFFFF', // White for contrast
        textShadow: '2px 2px 4px #000000', // Optional shadow for better readability
    },
    heading: {
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#F1E4F3', // A light purple that matches the image
        textShadow: '2px 2px 4px #000000',
    },
    subHeading: {
        fontSize: '1.5rem',
        fontWeight: 'normal', // Less prominent than the main heading
        marginBottom: '2rem',
        color: '#F8E8F8', // A lighter shade for subheading
        textShadow: '1px 1px 2px #000000',
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
        '& .MuiButton-containedPrimary': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
            color: '#303F9F', // Purple text
        },
        '& .MuiButton-containedSecondary': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
            color: '#F50057', // Pink text
        },
    },
}));

const LandingPage = () => {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        // Apply styles to body when component mounts
        document.body.style.margin = '0';
        document.body.style.padding = '0';
       /* document.body.style.overflow = 'hidden'; // Prevent scrolling on the entire body*/


        // Reset body styles when component unmounts
        return () => {
            document.body.style.margin = '';
            document.body.style.padding = '';
            document.body.style.overflow = '';
        };
    }, []);

    const handleGetStartedClick = (event) => {

        setAnchorEl(event.currentTarget);
    };

    const handleGetStartedClose = () => {
        setAnchorEl(null);
    };

    const handleRoleSelection = (role) => {
        dispatch(setUserRole(role))
        let routePath = '';
        if (role === 'ROLE_ADMIN') {
            routePath = '/adminSignUp';
        } else if (role === 'ROLE_USER') {
            routePath = '/customerSignUp';
        } else if (role === 'ROLE_VENDOR') {
            routePath = '/vendorSignUp';
        }

        history.push(routePath);
        handleGetStartedClose();
    };

    return (
        <div className={classes.landingPage}>
            <div className={classes.websiteName}>Event-Pro</div>
            <div className={classes.heading}>Event Planner</div>
            <div className={classes.subHeading}>EVERY EVENT SHOULD BE PERFECT</div>
            <div className={classes.buttonContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    /*  onClick={() => history.push('/about')}*/
                    onClick={() => history.push('/')}
                >
                    About Us
                </Button>
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
                    <MenuItem onClick={() => handleRoleSelection('ROLE_ADMIN')}>As an Admin</MenuItem>
                    <MenuItem onClick={() => handleRoleSelection('ROLE_USER')}>As a Customer</MenuItem>
                    <MenuItem onClick={() => handleRoleSelection('ROLE_VENDOR')}>As a Vendor</MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default LandingPage;
