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
    TextField, Paper,CircularProgress
} from "@material-ui/core";
import useStyles from "./style";
import {Search, ArrowDropDown, ExitToApp, Logout} from "@mui/icons-material";
import { Link } from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell} from "recharts";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import MLService from "../../../api/MlService";
import {Divider} from "@mui/material";

// This is the home menu
const AdminDashboard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const [loading, setLoading] = useState(false); // Added loading state


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [appBarPosition, setAppBarPosition] = useState("relative");
    const [clickedButtons, setClickedButtons] = useState({});
    const [clickedCategory, setClickedCategory] = useState("");


    const handlePredictionsClick = () => {
        setLoading(true); // Start loading
        MLService.runPrediction()
            .then(res => {
                // Handle successful prediction
            })
            .catch(err => {
                // Handle error
            })
            .finally(() => {
                setLoading(false); // Stop loading
            });
    }
    const handleRankingsClick = () => {
        setLoading(true); // Start loading
        MLService.runPrediction()
            .then(res => {
                // Handle successful prediction
            })
            .catch(err => {
                // Handle error
            })
            .finally(() => {
                setLoading(false); // Stop loading
            });
    }
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

    // Mock data for the new charts
    const vendorRankingData = [
        { name: "Ayesha Perera", ranking: 296},
        { name: "Priyanka Silva", ranking: 286 },
        { name: "Rashmi Silva", ranking: 278 },
        { name: "Lakshan Kumara", ranking: 265 },
        { name: "Chamari Bandara", ranking: 263 },
        { name: "Priyanka Fernando", ranking: 256},
        { name: "Thilini Perera", ranking: 248 },
        { name: "Dinesh Fernando", ranking: 240 },
        { name: "Kamal Jayasuriya", ranking: 234 },
        { name: "Sunil Bandara", ranking: 231 },
        // ... more vendors
    ];

    const pieChartData = [
        { name: "Ayesha Perera", value: 12.8},
        { name: "Priyanka Silva", value: 11.7},
        { name: "Rashmi Silva", value: 10.9 },
        { name: "Lakshan Kumara", value: 10.5},
        { name: "Chamari Bandara", value: 10.4},
        { name: "Priyanka Fernando", value: 9.6},
        { name: "Thilini Perera", value: 9.2},
        { name: "Dinesh Fernando", value: 8.5},
        { name: "Kamal Jayasuriya", value: 8.3},
        { name: "Sunil Bandara", value: 8.2},
        // ... more categories
    ];

    // Colors for the vendor ranking bar chart
    const vendorColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CD5"];

    // Colors for the pie chart
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CD5"];

    const renderCustomizedLabel = ({
                                       cx, cy, midAngle, innerRadius, outerRadius, percent,
                                   }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                style={{ fontSize: '10px' }} // Reduced font size
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    const renderOutsideLabel = (props) => {
        const { cx, cy, midAngle, outerRadius, fill, name } = props;
        const RADIAN = Math.PI / 180;
        const radius = outerRadius + 20; // Position the label outside the pie
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill={fill}
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                style={{ fontSize: '12px' }} // Reduced font size
            >
                {name}
            </text>
        );
    };

    const calculateMidAngle = (entry, data) => {
        let startAngle = 0;
        for (let i = 0; i < data.length; i++) {
            const { value } = data[i];
            const degree = value / data.reduce((acc, item) => acc + item.value, 0) * 360;
            if (entry.name === data[i].name) {
                return startAngle + degree / 2;
            }
            startAngle += degree;
        }
    };


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
                {/*<Divider style={{ margin: '20px 0' }} />  Or an empty div: <div style={{ height: '20px' }} /> */}
                <Typography variant="h5" className={classes.barChartTopic}>
                    MI Sales Predictions
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePredictionsClick}
                    style={{ marginTop: '25px' }}
                    disabled={loading} // Disable button when loading
                >
                    {loading ? <CircularProgress size={24} /> : "View MI Predictions"}
                </Button>
                <Grid container spacing={5} style={{ marginTop: '15px' }}>
                    {/* Horizontal Vendor Ranking Bar Chart */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" className={classes.barChartTopic}>
                            Vendor Ranking
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleRankingsClick}
                            style={{ marginTop: '25px' }}
                            disabled={loading} // Disable button when loading
                        >
                            {loading ? <CircularProgress size={24} /> : "View Vendor Ranking"}
                        </Button>
                        <BarChart
                            layout="vertical"
                            width={600}
                            height={400}
                            data={vendorRankingData}
                            className={classes.barChart}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={80} // Adjust width to fit labels
                                tick={{ fontSize: 12 }} // Adjust font size of ticks
                            />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="ranking" fill="#82ca9d" barSize={30}>
                                {vendorRankingData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={vendorColors[index % vendorColors.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </Grid>


                    {/* Pie Chart */}
                    <Grid item xs={12} sm={6} md={4} lg={2} style={{ marginTop: '70px',marginLeft:"25px" }}> {/* Added marginTop */}
                        <PieChart width={500} height={500}>
                            <Pie
                                data={pieChartData}
                                cx={250}
                                cy={250}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            {pieChartData.map((entry, index) => renderOutsideLabel({
                                ...entry,
                                cx: 250,
                                cy: 250,
                                midAngle: calculateMidAngle(entry, pieChartData),
                                outerRadius: 120,
                                fill: COLORS[index % COLORS.length]
                            }))}
                        </PieChart>
                    </Grid>
                    <Grid container spacing={5} style={{ marginTop: '20px' }}>
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
                </Grid>
            </Container>
        </Container>
    );
};

export default AdminDashboard;
