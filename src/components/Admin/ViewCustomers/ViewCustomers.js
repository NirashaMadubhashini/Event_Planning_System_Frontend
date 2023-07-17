// ViewCustomers.js
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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import { Search, ArrowDropDown, ExitToApp, Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import useStyles from "./style";

const ViewCustomers = () => {
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

    const customersData = [
        {
            customerName: "John Doe",
            nic: "123456789",
            mobile: "187632479816",
            address: "Galle",
            email: "john@gmail.com",
            date: "2023-07-15",
            time: "12:00 PM",

        },
        {
            customerName: "John Samith",
            nic: "2451234456",
            mobile: "3487632479816",
            address: "Galle",
            email: "samith@gmail.com",
            date: "2023-07-15",
            time: "12:00 PM",
        },
        {
            customerName: "John Pholl",
            nic: "8556547676",
            mobile: "567632479816",
            address: "Galle",
            email: "phall@gmail.com",
            date: "2023-07-15",
            time: "12:00 PM",
        },
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
                <div className={classes.viewCustomersSection}>
                    <Typography variant="h4" gutterBottom style={{ color: "#3F51B5" }}>
                        View Customers
                    </Typography>
                    <Grid item xs={12} sm={6} className={classes.search}>
                        <TextField
                            variant="outlined"
                            placeholder="Search"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <Search />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </div>
                <TableContainer component={Card} className={classes.tableContainer}>
                    <Table>
                        <TableHead style={{ backgroundColor: "#C8C9CB" }}>
                            <TableRow>
                                <TableCell>Customer Name</TableCell>
                                <TableCell>NIC</TableCell>
                                <TableCell>Mobile Number</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customersData.map((customer, index) => (
                                <TableRow key={index}>
                                    <TableCell>{customer.customerName}</TableCell>
                                    <TableCell>{customer.nic}</TableCell>
                                    <TableCell>{customer.mobile}</TableCell>
                                    <TableCell>{customer.address}</TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell>{customer.date}</TableCell>
                                    <TableCell>{customer.time}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Container>
    );
};

export default ViewCustomers;
