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
    TextField,
    Grid,
} from "@material-ui/core";
import useStyles from "./style";
import { Link } from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {LocationOn, Phone, Email, ArrowDropDown, Logout} from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Contact = () => {
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
        setClickedCategory((prevCategory) => (prevCategory === category ? "" : category));
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
                            {/*<Typography*/}
                            {/*    component={Link}*/}
                            {/*    to="/profile"*/}
                            {/*    className={classes.appBarButton}*/}
                            {/*    onClick={() => handleCategoryClick("Profile")}*/}
                            {/*    style={{*/}
                            {/*        color: clickedCategory === "Profile" ? "#F50057" : "",*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    Profile*/}
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
                <div className={classes.serviceSection}>
                    <Typography variant="h6" gutterBottom style={{ color: "#3F51B5" }}>
                        GET IN TOUCH
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Contact Us
                    </Typography>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Your Name"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Your Email"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Your Phone"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Subject"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Your Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <div className={classes.companySection}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="h6" gutterBottom>
                                Company
                            </Typography>
                            <Typography variant="body2">Address:</Typography>
                            <Typography variant="body2">
                                No: 49/12- Circular Road, Galle
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="h6" gutterBottom>
                                Phone & Email
                            </Typography>
                            <Typography variant="body2">
                                Phone: +94 76 131 9259
                            </Typography>
                            <Typography variant="body2">
                                Email: eventpro@gamil.com
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="h6" gutterBottom>
                                Open Hours
                            </Typography>
                            <Typography variant="body2">Monday-Friday: 9am-6pm</Typography>
                            <Typography variant="body2">Saturday: 10am-4pm</Typography>
                            <Typography variant="body2">Sunday: Closed</Typography>
                        </Grid>
                    </Grid>
                </div>
                {/*<div className={classes.mapSection}>*/}
                {/*    <Typography variant="h6" gutterBottom>*/}
                {/*        Location*/}
                {/*    </Typography>*/}
                {/*    /!* Add your map component or embed the map code here *!/*/}
                {/*</div>*/}
            </Container>
            <footer className={classes.footer}>
                <div className={classes.footerIcons}>
                    <IconButton
                        color="inherit"
                        component="a"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        component="a"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        component="a"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon />
                    </IconButton>
                </div>
                <Typography variant="body2" align="center" color="inherit">
                    © {new Date().getFullYear()} Event-Pro. All rights reserved.
                </Typography>
            </footer>
        </Container>
    );
};

export default Contact;
