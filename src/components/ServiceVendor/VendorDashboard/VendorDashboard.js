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
    Paper,
} from "@material-ui/core";
import useStyles from "./style";
import { Search, ArrowDropDown, ExitToApp, Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";



// This is the home menu
const VendorDashboard = () => {
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

    const salesData = [
        {name: 'Jan', sales: 4000},
        {name: 'Feb', sales: 3000},
        {name: 'Mar', sales: 5000},
        {name: 'Apr', sales: 4500},
        {name: 'May', sales: 6000},
        {name: 'Jun', sales: 3000},
        {name: 'Jul', sales: 2000},
    ];

    const earningData = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
    ];

    const pieColors = ["#3D5AFE", "#FF6D00", "#FFD740", "#00E676"];

    const [clickedEntry, setClickedEntry] = useState("");

    // Function to handle pie chart segment click
    const handlePieClick = (entry) => {
        setClickedEntry(entry.name);
    };

    const bookingHistory = [
        { date: "2023-07-28", event: "Wedding", customer: "John Doe", package: "Premium" },
        { date: "2023-07-29", event: "Birthday", customer: "Jane Doe", package: "Basic" },
        { date: "2023-07-30", event: "Conference", customer: "Alice", package: "Standard" },
        { date: "2023-07-31", event: "Party", customer: "Bob", package: "Premium" },
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
                                to="/vendorDashboard"
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
                                to="/vendorProfile"
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
                                to="/vendorAddBusiness"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Business")}
                                style={{
                                    color: clickedCategory === "Business" ? "#F50057" : "",
                                }}
                            >
                                Business
                            </Typography>
                            <Typography
                                component={Link}
                                to="/vendorAddPackages"
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
                                to="/vendorViewBookings"
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
                                to="/vendorGallery"
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
                            <Typography variant="h6">Total Services</Typography>
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

                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" className={classes.barChartTopic}>
                                Sales Report
                            </Typography>
                            <LineChart width={500} height={340} data={salesData}>
                                <Line type="monotone" dataKey="sales" stroke="#FF1744" />                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                            </LineChart>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" className={classes.barChartTopic}>
                                Earnings
                            </Typography>
                            <div className={classes.pieChartContainer}>
                                <PieChart width={300} height={300}>
                                    <Pie
                                        dataKey="value"
                                        isAnimationActive={false}
                                        data={earningData}
                                        cx={150} // Half of the width (300 / 2)
                                        cy={150} // Half of the height (300 / 2)
                                        innerRadius={80}
                                        outerRadius={90}
                                        fill="#8884d8"
                                        label={({ value }) => `${value}`} // Show only the value
                                        onClick={handlePieClick} // Attach the click handler to the pie chart
                                    >
                                        {earningData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={pieColors[index % pieColors.length]}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </div>
                            <Typography variant="subtitle1" style={{ marginTop: 10 }}>
                                Clicked Entry: {clickedEntry}
                            </Typography>
                        </Paper>
                    </Grid>



                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" className={classes.barChartTopic}>
                                Booking History
                            </Typography>
                            <TableContainer className={classes.tableContainer}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow style={{ backgroundColor: "#3F51B4", color: "#FFFFFF" }}>
                                            <TableCell style={{ color: "#FFFFFF" }}>Date</TableCell>
                                            <TableCell style={{ color: "#FFFFFF" }}>Event</TableCell>
                                            <TableCell style={{ color: "#FFFFFF" }}>Customer</TableCell>
                                            <TableCell style={{ color: "#FFFFFF" }}>Package</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {bookingHistory.map((row) => (
                                            <TableRow key={row.date}>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>{row.event}</TableCell>
                                                <TableCell>{row.customer}</TableCell>
                                                <TableCell>{row.package}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>



                </Grid>
            </Container>
        </Container>
    );
};

export default VendorDashboard;
