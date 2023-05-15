import React, {useEffect, useState} from "react";
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
import {
    Search,
    ArrowDropDown, PlayArrow,
} from "@mui/icons-material";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import backgroundImage from ".//back3.jpg";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import DatePicker from "@mui/lab/DatePicker";

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
        <Container
            maxWidth="xl"
            className={classes.container}
            style={{
                backgroundSize: 'cover',
            }}
        >
            <div className={classes.cover} style={{ backgroundImage: `url(${backgroundImage})`, position: "relative" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white" }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        className={classes.textGlowAnimation}
                        style={{ fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", marginBottom: "1rem" }}
                    >
                        <span style={{ color: '#3F51B5', fontWeight: "bold" }}>We create</span>
                        <br />
                        You celebrate
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<PlayArrow />}
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "150px", // Adjust the width value as needed
                            borderRadius: "10px", // Adjust the radius value as needed
                            backgroundColor: "#F50057" // Set the desired color value
                        }}
                    >
                        Online Request
                    </Button>


                </div>
            </div>

            <AppBar className={classes.appBar} position={appBarPosition} color="primary">
                <Toolbar >
                    <div className={classes.appBarContainer}>
                        <div className={classes.appBarLeft}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <Typography variant="h6" className={classes.menuTitle}>
                                    Event's
                                </Typography>
                                <ArrowDropDown />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} className={classes.menuItem} >Wedding Celebrations</MenuItem>
                                <MenuItem onClick={handleClose}>Engagement</MenuItem>
                                <MenuItem onClick={handleClose}>Birthday Parties</MenuItem>
                                <MenuItem onClick={handleClose}>Anniversary Celebrations</MenuItem>
                                <MenuItem onClick={handleClose}>Baby Shower</MenuItem>
                            </Menu>
                            <TextField
                                variant="outlined"
                                color="inherit"
                                size="small"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className={classes.appBarRight}>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Home")}
                                style={{
                                    color: clickedCategory === "Home" ? "#F50057" : "",
                                }}
                            >
                                Home
                            </Button>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("About")}
                                style={{
                                    color: clickedCategory === "About" ? "#F50057" : "",
                                }}
                            >
                                About
                            </Button>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Packages")}
                                style={{
                                    color: clickedCategory === "Packages" ? "#F50057" : "",
                                }}
                            >
                                Packages
                            </Button>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Services")}
                                style={{
                                    color: clickedCategory === "Services" ? "#F50057" : "",
                                }}
                            >
                                Services
                            </Button>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Bookings")}
                                style={{
                                    color: clickedCategory === "Bookings" ? "#F50057" : "",
                                }}
                            >
                                Bookings
                            </Button>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Gallery")}
                                style={{
                                    color: clickedCategory === "Gallery" ? "#F50057" : "",
                                }}
                            >
                                Gallery
                            </Button>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Contact")}
                                style={{
                                    color: clickedCategory === "Contact" ? "#F50057" : "",
                                }}
                            >
                                Contact
                            </Button>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>

        </Container>

    );
};

export default Dashboard
