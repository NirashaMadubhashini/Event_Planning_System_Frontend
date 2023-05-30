import React, { useEffect, useState } from "react";
import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Container,
    InputAdornment,
    TextField,
    Grid,
} from "@material-ui/core";
import { Search, ArrowDropDown, ExitToApp, Event } from "@mui/icons-material";
import useStyles from "./style";
import { Link } from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";

const Dashboard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [appBarPosition, setAppBarPosition] = useState("relative");
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
                                to="/dashboard"
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
                            <IconButton
                                component={Link}
                                to="/auth"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("ExitToApp")}
                                style={{
                                    color: clickedCategory === "ExitToApp" ? "#F50057" : "",
                                }}
                                color="inherit"
                                edge="end"
                            >
                                <ExitToApp />
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Grid container spacing={3} className={classes.cardContainer}>
                <Grid item xs={3}>
                    <div className={`${classes.card} ${classes.cardColor1}`}>
                        <Event style={{ fontSize: 60 }} />
                        <Typography variant="h6">Card Title 1</Typography>
                        <Typography variant="h4">Count 1</Typography>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className={`${classes.card} ${classes.cardColor2}`}>
                        <Event style={{ fontSize: 60 }} />
                        <Typography variant="h6">Card Title 2</Typography>
                        <Typography variant="h4">Count 2</Typography>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className={`${classes.card} ${classes.cardColor3}`}>
                        <Event style={{ fontSize: 60 }} />
                        <Typography variant="h6">Card Title 3</Typography>
                        <Typography variant="h4">Count 3</Typography>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className={`${classes.card} ${classes.cardColor4}`}>
                        <Event style={{ fontSize: 60 }} />
                        <Typography variant="h6">Card Title 4</Typography>
                        <Typography variant="h4">Count 4</Typography>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
