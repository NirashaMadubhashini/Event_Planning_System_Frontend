import React, { useState, useEffect } from "react";
import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    Card,
    CardContent,
    IconButton,
    Menu,
    MenuItem,
    Grid,
    Container,
    InputAdornment,
    TextField,
} from "@material-ui/core";
import { Search, ArrowDropDown, ExitToApp, Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import useStyles from "./style";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '& > :not(style)': { m: 1, width: '35ch' },
};
const Profile = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);


    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    const [appBarPosition, setAppBarPosition] = useState("relative");
    const [clickedButtons, setClickedButtons] = useState({});
    const [clickedCategory, setClickedCategory] = useState("");

    const handleCategoryClick = (category) => {
        setClickedCategory((prevCategory) =>
            prevCategory === category ? "" : category
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setAppBarPosition("fixed");
            } else {
                setAppBarPosition("relative");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Container maxWidth="xl" className={classes.container}>
            <AppBar
                className={classes.appBar}
                position={appBarPosition}
                color="primary"
            >
                <Toolbar>
                    <div className={classes.appBarContainer}>
                        <div className={classes.appBarLeft}>
                            <IconButton component={Link} to="/" color="inherit" edge="start">
                                <img src={EventPro} alt="icon" height="60px" />
                            </IconButton>
                            <Typography
                                component={Link}
                                to="/"
                                variant="h6"
                                className={classes.menuTitle}
                            >
                                Event - Pro
                            </Typography>
                        </div>
                        <div className={classes.appBarRight}>
                            <Typography
                                component={Link}
                                to="/home"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Home")}
                                style={{
                                    color: clickedCategory === "Home" ? "#F50057" : "",
                                }}
                            >
                                Home
                            </Typography>
                            <Typography
                                component={Link}
                                to="/dashboard"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Dashboard")}
                                style={{
                                    color: clickedCategory === "Dashboard" ? "#F50057" : "",
                                }}
                            >
                                Dashboard
                            </Typography>
                            <Typography
                                component={Link}
                                to="/profile"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Profile")}
                                style={{
                                    color: clickedCategory === "Profile" ? "#F50057" : "",
                                }}
                            >
                                Profile
                            </Typography>
                            <Typography
                                component={Link}
                                to="/about"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("About")}
                                style={{
                                    color: clickedCategory === "About" ? "#F50057" : "",
                                }}
                            >
                                About
                            </Typography>
                            {/*<Typography*/}
                            {/*    component={Link}*/}
                            {/*    to="/service"*/}
                            {/*    className={classes.appBarButton}*/}
                            {/*    onClick={() => handleCategoryClick("Services")}*/}
                            {/*    style={{*/}
                            {/*        color: clickedCategory === "Services" ? "#F50057" : "",*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    Services*/}
                            {/*</Typography>*/}
                            <Typography
                                component={Link}
                                to="/booking"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Bookings")}
                                style={{
                                    color: clickedCategory === "Bookings" ? "#F50057" : "",
                                }}
                            >
                                Bookings
                            </Typography>
                            <Typography
                                component={Link}
                                to="/gallery"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Gallery")}
                                style={{
                                    color: clickedCategory === "Gallery" ? "#F50057" : "",
                                }}
                            >
                                Gallery
                            </Typography>
                            <Typography
                                component={Link}
                                to="/contact"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Contact")}
                                style={{
                                    color: clickedCategory === "Contact" ? "#F50057" : "",
                                }}
                            >
                                Contact
                            </Typography>
                            <Typography
                                component={Link}
                                to="/"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Logout")}
                                style={{
                                    color: clickedCategory === "Logout" ? "#F50057" : "",
                                }}
                            >
                                <Logout className={classes.logoutIcon} />
                            </Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" className={classes.container}>
                <div className={classes.adminDashboardSection}>
                    <Typography variant="h6" gutterBottom style={{ color: "#3F51B5" }}>
                        VIEW YOUR DETAILS
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        My Profile
                    </Typography>
                </div>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body1" gutterBottom>
                                    <strong>NIC:</strong> 200071100222
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Name:</strong> Nirasha Madubhashini
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Address:</strong> 123 Street, City
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Phone:</strong> 1234567890
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Type:</strong> Customer
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Email:</strong> nirasha0729@gmail.com
                                </Typography>

                                <div>
                                <Button onClick={handleOpen} variant="contained" color="primary" className={classes.updatebtn}>
                                    Update
                                </Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <TextField id="filled-basic" label="NIC" variant="filled" />
                                            <TextField id="filled-basic" label="Name" variant="filled" />
                                            <TextField id="filled-basic" label="Address" variant="filled" />
                                            <TextField id="filled-basic" label="Phone" variant="filled" />
                                            <Button variant="contained" color="secondary">
                                                Submit
                                            </Button>
                                        </Box>
                                    </Modal>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};

export default Profile;
