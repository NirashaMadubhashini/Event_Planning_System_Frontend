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
import useStyles from "./style";
import {Search, ArrowDropDown, ExitToApp, Logout} from "@mui/icons-material";
import {Link} from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";


//this is the home menu
const Packages = () => {
const [packages,setPackages] = useState([
    {
        id: 1,
        name: "Wedding Celebrations",
        hours: 8,
        guests: 200,
        services: [
            "Venue rental",
            "Catering and Bar",
            "Decorations and floral",
            "Wedding cake and desserts",
            "Photography and Videography",
           "Entertainment",
            "Transportation",
            "Invitations and stationery",
            "Hair and Makeup services"
        ],
        price: 5000,
    },
    {
        id: 2,
        name: "Engagement",
        hours: 4,
        guests: 100,
        services: [
            "Venue rental",
            "Catering and Bar",
            "Decorations and floral",
            "Photography and Videography",
           "Entertainment",
           "Transportation",
            "Invitations and stationery"
        ],
        price: 2500,
    },
    {
        id: 3,
        name: "Birthday Parties",
        hours: 3,
        guests: 50,
        services: [
           "Venue rental",
            "Catering and Bar",
            "Decorations",
            "Birthday cake and desserts",
            "Entertainment",
            "Photography",
            "Transportation",
            "Invitations and stationery"
        ],
        price: 1000,
    },
    {
        id: 4,
        name: "Anniversary Celebrations",
        hours: 6,
        guests: 150,
        services: [
            "Venue rental",
            "Catering and Bar",
            "Decorations and floral",
            "Anniversary cake and desserts",
            "Photography and Videography",
            "Entertainment",
            "Transportation",
            "Invitations and stationery"
        ],
        price: 3500,
    },
    {
        id: 5,
        name: "Baby Shower",
        hours: 2,
        guests: 30,
        services: [
            "Venue rental",
            "Catering and Bar",
            "Decorations and floral",
            "Baby shower cake and desserts",
            "Photography",
            "Entertainment",
            "Transportation",
            "Invitations and stationery"
        ],
        price: 800,
    },
    {
        id: 6,
        name: "Graduation Party",
        hours: 5,
        guests: 200,
        services: [
            "Venue rental",
            "Catering and Bar",
            "Decorations",
            "Graduation cake and desserts",
            "Photography",
            "Entertainment",
            "Transportation",
            "Invitations and stationery"
        ],
        price: 4500,
    },
    {
        id: 7,
        name: "Batch party",
        hours: 3,
        guests: 50,
        services: [
            "Venue rental",
            "Catering and Bar",
            "Decorations",
            "Batch party cake and desserts",
            "Photography",
            "Entertainment",
            "Transportation",
            "Invitations and stationery"
        ],
        price: 1200,
    },
    {
        id: 8,
        name: "Party",
        hours: 3,
        guests: 50,
        services: [
            "Venue rental",
            "Catering and Bar",
            "Decorations",
            "Cake and desserts",
            "Photography",
            "Entertainment",
            "Transportation",
            "Invitations and stationery"
        ],
        price: 1200,
    },
    {
        id: 9,
        name: "Music Festival",
        hours: 12,
        guests: 5000,
        services: [
            "Venue rental",
            "Sound and lighting equipment",
            "Staging and seating",
            "Catering and Bar",
            "Decorations",
            "Security personnel",
            "Transportation",
            "Marketing and promotion",
            "Merchandise sales"
        ],
        price: 5000,
    },
])


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


    const handleButtonClick = (id) => {
        setClickedButtons((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const handleCategoryClick = (category) => {
        setClickedCategory((prevCategory) => (prevCategory === category ? "" : category));
    };

    const services = packages[0].services;


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
                <div className={classes.packagesSection}>
                    <Typography variant="h6" gutterBottom style={{ color: "#3F51B5" }}>CHOOSE YOUR</Typography>
                    <Typography variant="h4" gutterBottom>Events Packages</Typography>
                </div>
                <Grid container spacing={2}>
                    {packages.map((packages, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={packages.id}>
                            <Card className={classes.card}>
                                <CardContent className={classes.titleSection}>
                                    <Typography variant="h5" gutterBottom className={classes.headerName}>
                                        {packages.name}
                                    </Typography>
                                    <Typography variant="h6" >
                                        From <span style={{ color: '#F50057', fontSize: '1.5em', fontWeight:"bold", }}>${packages.price}</span>
                                    </Typography>                                </CardContent>
                                <CardContent className={classes.cardContent}>
                                    {/*<Typography variant="h5" style={{ marginBottom: '0.5rem' }}>{packages.name}</Typography>*/}
                                    <Typography variant="body1" style={{fontWeight:"bold"}}>{packages.hours} Hours</Typography>
                                    <Typography variant="body1" style={{fontWeight:"bold"}}>Up to {packages.guests} Persons</Typography>
                                    {packages.services && (
                                        <div>
                                            <Typography variant="h6"></Typography>
                                            <ul>
                                                {packages.services.map((service, index) => (
                                                    <li key={index}>{service}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <Button
                                        variant="contained"
                                        color={clickedButtons[packages.id] ? "default" : "secondary"}
                                        style={{
                                            backgroundColor: clickedButtons[packages.id] ? "#0172EF" : "",
                                        }}
                                        onClick={() => handleButtonClick(packages.id)}
                                        className={classes.button}
                                    >
                                        Purchase
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </Container>
    );
}

export default Packages
