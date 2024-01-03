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
    TextField, Paper,
} from "@material-ui/core";
import useStyles from "./style";
import {Search, ArrowDropDown, ExitToApp, Logout} from "@mui/icons-material";
import { Link } from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";

// This is the home menu
const AdminDashboard = () => {
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

    const data = [
        { day: "Mon", income: 500, monthlyIncome: 1500, annualIncome: 10000 },
        { day: "Tue", income: 700, monthlyIncome: 1200, annualIncome: 8000 },
        { day: "Wed", income: 900, monthlyIncome: 1400, annualIncome: 9000 },
        { day: "Thu", income: 1200, monthlyIncome: 1800, annualIncome: 11000 },
        { day: "Fri", income: 800, monthlyIncome: 1600, annualIncome: 12000 },
        { day: "Sat", income: 1000, monthlyIncome: 1300, annualIncome: 13000 },
        { day: "Sun", income: 600, monthlyIncome: 1900, annualIncome: 14000 },
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
                                to="/adminDashboard"
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
                                to="/addEvents"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Events")}
                                style={{
                                    color: clickedCategory === "Events" ? "#F50057" : "",
                                }}
                            >
                                Events
                            </Typography>
                            <Typography
                                component={Link}
                                to="/addServices"
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
                                to="/addPackages"
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
                                to="/viewCustomers"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Customers")}
                                style={{
                                    color: clickedCategory === "Customers" ? "#F50057" : "",
                                }}
                            >
                                Customers
                            </Typography>
                            <Typography
                                component={Link}
                                to="/viewVendors"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Vendors")}
                                style={{
                                    color: clickedCategory === "Vendors" ? "#F50057" : "",
                                }}
                            >
                                Vendors
                            </Typography>
                            <Typography
                                component={Link}
                                to="/viewBookings"
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
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper1}>
                            <EventAvailableIcon className={classes.icon} />
                            <Typography variant="h6">Total Bookings</Typography>
                            <Typography variant="h4">24</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper2}>
                            <RoomServiceIcon className={classes.icon} />
                            <Typography variant="h6">Total Customers</Typography>
                            <Typography variant="h4">8</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper3}>
                            <RateReviewIcon className={classes.icon} />
                            <Typography variant="h6">Total Vendors</Typography>
                            <Typography variant="h4">12</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper4}>
                            <ThumbsUpDownIcon className={classes.icon} />
                            <Typography variant="h6">Total Events</Typography>
                            <Typography variant="h4">36</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper5}>
                            <ThumbsUpDownIcon className={classes.icon} />
                            <Typography variant="h6">Total Services</Typography>
                            <Typography variant="h4">36</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    // className={classes.miPredictionButton}
                    // onClick={handleViewMIPredictions}
                >
                    View MI Predictions
                </Button>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.dailyGrid}>
                        <Typography variant="h5" className={classes.barChartTopic}>
                            Daily Income
                        </Typography>
                        <BarChart width={350} height={300} data={data} className={classes.barChart}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="income" fill="#8884d8" />
                        </BarChart>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.monthlyGrid}>
                        <Typography variant="h5" className={classes.barChartTopic}>
                            Monthly Income
                        </Typography>
                        <BarChart width={350} height={300} data={data} className={classes.barChart}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="monthlyIncome" fill="#8884d8" />
                        </BarChart>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.yearlyGrid}>
                        <Typography variant="h5" className={classes.barChartTopic}>
                            Annual Income
                        </Typography>
                        <BarChart width={350} height={300} data={data} className={classes.barChart}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="annualIncome" fill="#8884d8" />
                        </BarChart>
                    </Grid>
                </Grid>


            </Container>
        </Container>
    );
};

export default AdminDashboard;
