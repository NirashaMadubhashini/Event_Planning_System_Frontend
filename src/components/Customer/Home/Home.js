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
    CardMedia,
    Paper,
} from "@material-ui/core";
import useStyles from "./style";
import { Search, ArrowDropDown, ExitToApp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                                to="/about"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("About")}
                                style={{
                                    color: clickedCategory === "About" ? "#F50057" : "",
                                }}
                            >
                                About
                            </Typography>
                            <Typography
                                component={Link}
                                to="/packages"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Packages")}
                                style={{
                                    color: clickedCategory === "Packages" ? "#F50057" : "",
                                }}
                            >
                                Packages
                            </Typography>
                            <Typography
                                component={Link}
                                to="/service"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Services")}
                                style={{
                                    color: clickedCategory === "Services" ? "#F50057" : "",
                                }}
                            >
                                Services
                            </Typography>
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
                            <Button
                                className={classes.appBarButton}
                                onClick={handleClick}
                                endIcon={<ArrowDropDown />}
                            >
                                Nirasha Madubhashini
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{ className: classes.menuList }}
                            >
                                <MenuItem onClick={handleClose} component={Link} to="/">
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.card}>
                        <Carousel>
                            <div>
                                <img
                                    src="https://i.ytimg.com/vi/9Gjs83Wz19M/maxresdefault.jpg"
                                    alt="Image 1"
                                />
                                <div className="legend">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        component={Link}
                                        to="/book-event"
                                    >
                                        Book An Event
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        component={Link}
                                        to="/event-packages"
                                    >
                                        Event Packages
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="https://nobleevents.ae/wp-content/uploads/2020/11/New-Project-37.jpg"
                                    alt="Image 2"
                                />
                                <div className="legend">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        component={Link}
                                        to="/book-event"
                                    >
                                        Book An Event
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        component={Link}
                                        to="/event-packages"
                                    >
                                        Event Packages
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="https://about-events.com/wp-content/uploads/2020/08/slider-events.jpg"
                                    alt="Image 3"
                                />
                                <div className="legend">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        component={Link}
                                        to="/book-event"
                                    >
                                        Book An Event
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        component={Link}
                                        to="/event-packages"
                                    >
                                        Event Packages
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="https://www.inventiva.co.in/wp-content/uploads/2023/05/eventshub_evergreen_opengraph_1200x630_2x.jpg"
                                    alt="Image 4"
                                />
                                <div className="legend">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        component={Link}
                                        to="/book-event"
                                    >
                                        Book An Event
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        component={Link}
                                        to="/event-packages"
                                    >
                                        Event Packages
                                    </Button>
                                </div>
                            </div>
                        </Carousel>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
