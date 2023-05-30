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
    ArrowDropDown,
    Brush,
    MapsHomeWork,
    Fastfood,
    Celebration,
    Cake,
    CameraAlt,
    LibraryMusic,
    EmojiTransportation,
    CardGiftcard,
    SurroundSound,
    Chair,
    AdminPanelSettings,
    CropOriginal,
    Store,
    ExitToApp
} from "@mui/icons-material";
import { Event, LocationOn, Restaurant, MusicNote } from "@mui/icons-material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import { format } from "date-fns";
import {Link} from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";

const EventRequest = () => {

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const [appBarPosition, setAppBarPosition] = useState("relative");
    const classes = useStyles();
    const [clickedCategory, setClickedCategory] = useState(""); // Add this line

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
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [functionType, setFunctionType] = useState("");
    const handleFunctionTypeChange = (event) => {
        setFunctionType(event.target.value);
    };

    const [location, setLocation] = useState("");
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const [morningChecked, setMorningChecked] = useState(false);
    const [eveningChecked, setEveningChecked] = useState(false);

    const handleMorningCheckboxChange = (event) => {
        setMorningChecked(event.target.checked);
    };

    const handleEveningCheckboxChange = (event) => {
        setEveningChecked(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formattedDate = selectedDate ? format(selectedDate, "dd/MM/yyyy") : "";
        console.log("Form Submitted");
        console.log("Selected Date:", formattedDate);
        console.log("Function Type:", functionType);
        console.log("Location:", location);
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
            <Container maxWidth="lg" className={classes.container}>
                <div className={classes.serviceSection}>
                    <Typography variant="h6" gutterBottom style={{ color: "#3F51B5" }}>WE ARE HERE TO HELP YOU</Typography>
                    <Typography variant="h4" gutterBottom>Online Request</Typography>
                </div>
                <Box mt={3}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Event Date"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        renderInput={(params) => (
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                {...params}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel id="function-type-label">Function Type</InputLabel>
                                    <Select
                                        labelId="function-type-label"
                                        id="function-type"
                                        value={functionType}
                                        onChange={handleFunctionTypeChange}
                                        label="Function Type"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Corporate Event">Corporate Event</MenuItem>
                                        <MenuItem value="Wedding">Wedding</MenuItem>
                                        <MenuItem value="Birthday Party">Birthday Party</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel id="location-label">Location</InputLabel>
                                    <Select
                                        labelId="location-label"
                                        id="location"
                                        value={location}
                                        onChange={handleLocationChange}
                                        label="Location"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Location 1">Location 1</MenuItem>
                                        <MenuItem value="Location 2">Location 2</MenuItem>
                                        <MenuItem value="Location 3">Location 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={morningChecked}
                                                onChange={handleMorningCheckboxChange}
                                                name="morning"
                                            />
                                        }
                                        label="Morning"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={eveningChecked}
                                                onChange={handleEveningCheckboxChange}
                                                name="evening"
                                            />
                                        }
                                        label="Evening"
                                    />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </Container>
    );
};

export default EventRequest
