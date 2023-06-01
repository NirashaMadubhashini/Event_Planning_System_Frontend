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
    Grid,
    Paper,
} from "@material-ui/core";
import {
    Search,
    ArrowDropDown,
    ExitToApp,
    Event,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import useStyles from "./style";

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

    const data = [
        { name: "Jan", events: 5 },
        { name: "Feb", events: 8 },
        { name: "Mar", events: 15 },
        { name: "Apr", events: 12 },
        { name: "May", events: 10 },
        { name: "Jun", events: 20 },
        { name: "Jul", events: 18 },
        { name: "Aug", events: 22 },
        { name: "Sep", events: 25 },
        { name: "Oct", events: 30 },
        { name: "Nov", events: 28 },
        { name: "Dec", events: 35 },
    ];

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
                            <IconButton
                                component={Link}
                                to="/"
                                color="inherit"
                                edge="start"
                            >
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
            <div className={classes.pageContent}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper1}>
                            <EventAvailableIcon className={classes.icon} />
                            <Typography variant="h6">Total Events</Typography>
                            <Typography variant="h4">24</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper2}>
                            <RoomServiceIcon className={classes.icon} />
                            <Typography variant="h6">Total Services</Typography>
                            <Typography variant="h4">8</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper3}>
                            <RateReviewIcon className={classes.icon} />
                            <Typography variant="h6">Total Reviews</Typography>
                            <Typography variant="h4">12</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper4}>
                            <ThumbsUpDownIcon className={classes.icon} />
                            <Typography variant="h6">Total Likes</Typography>
                            <Typography variant="h4">36</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6">Monthly Events</Typography>
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart data={data}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="events" stroke="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default Dashboard;
