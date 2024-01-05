import React, {useEffect, useState} from "react";
import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    Card,
    CardContent,
    IconButton,
    Grid,
    Container
} from "@material-ui/core";
import useStyles from "./style";
import {Logout,} from "@mui/icons-material";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import {format} from "date-fns";
import {fetchServicesTypeWise, getAllServices} from "../../../actions";
import {useDispatch, useSelector} from 'react-redux';

const Service = () => {

    const dispatch = useDispatch();
    const services = useSelector(state => state.adminReducer.services); // Adjust the path based on your state structure
    const vendors = useSelector((state) => state.adminReducer.vendorServicesTypeWise);
    const [selectedVendors, setSelectedVendors] = useState([]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const [appBarPosition, setAppBarPosition] = useState("relative");
    const [clickedButtons, setClickedButtons] = useState({});
    const [clickedCategory, setClickedCategory] = useState("");
    const [clickedService, setClickedService] = useState("");
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };



    const handleRemoveVendor = (vendorId) => {
        const updatedVendors = selectedVendors.filter(vendor => vendor.vendorId !== vendorId);
        setSelectedVendors(updatedVendors);
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY < 80;

            if (isScrolling) {
                setAppBarPosition("relative");
            } else {
                setAppBarPosition("fixed");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Fetch events when the component mounts
        dispatch(getAllServices());
    }, [dispatch]);



    const handleCategoryClick = (category) => {
        setClickedCategory((prevCategory) =>
            prevCategory === category ? "" : category
        );
    };

    const handleServiceClick = (service) => {
        setClickedService((prevService) =>
            prevService === service ? "" : service
        );

        dispatch(fetchServicesTypeWise(service));
    };

    const handlePackageSelect = (vendorId) => {
        const selectedVendor = vendors.find((vendor) => vendor.vendorId === vendorId);

        console.log( selectedVendor)
        // Check if the vendor is already selected to avoid duplicates
        if(!selectedVendors.some(v => v.vendorId === selectedVendor.vendorId)) {
            setSelectedVendors(prevVendors => [...prevVendors, selectedVendor]);
        }
    };

    const handlePackageRemove = () => {
        const newClickedButtons = {
            ...clickedButtons,
            [clickedCategory]: {
                ...clickedButtons[clickedCategory],
            },
        };
        delete newClickedButtons[clickedCategory][clickedService];

        setClickedButtons(newClickedButtons);
    };



    const getTotalPrice = () => {
        let total = 0;

        Object.keys(clickedButtons).forEach((category) => {
            Object.keys(clickedButtons[category]).forEach((service) => {
                const {package: pkg} = clickedButtons[category][service];
                total += pkg.price;
            });
        });
        return selectedVendors.reduce((total, vendor) => total + vendor.price, 0);
        /*return total;*/
    };

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
    const handleSubmit = (event) => {
        event.preventDefault();
        const formattedDate = selectedDate ? format(selectedDate, "dd/MM/yyyy") : "";
        console.log("Form Submitted");
        console.log("Selected Date:", formattedDate);
        console.log("Function Type:", functionType);
        console.log("Location:", location);
    };
    return (
        <div>
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
                                <img src={EventPro} alt="icon" height="60px"/>
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
                                <Logout className={classes.logoutIcon}/>

                            </Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12}>
                        <div className={classes.serviceSection}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                style={{color: "#3F51B5"}}
                            >
                                OUR SERVICES
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                Book Services
                            </Typography>
                        </div>
                    </Grid>
                    <Grid container spacing={3} justify="center">
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {services.map((service) => (
                            <Card
                                className={`${classes.serviceCard} ${clickedService === service.serviceName ? classes.selectedService : ''}`}
                                key={service.serviceId}
                            >
                                <CardContent
                                    className={classes.serviceButton}
                                    onClick={() => handleServiceClick(service.serviceName)}
                                >
                                    <IconButton>
                                        <StarIcon />
                                    </IconButton>
                                    <Typography variant="h6" gutterBottom>
                                        {service.serviceName}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        {clickedService && (
                            <Card className={classes.vendorCard}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Vendors
                                    </Typography>
                                    {vendors && vendors.length > 0 && vendors.map((vendor) => (
                                        <Card key={vendor.vendorId} className={classes.vendorInfoCard}>
                                            <CardContent>
                                                <Typography variant="subtitle1" gutterBottom>
                                                    {vendor.vendorName}
                                                </Typography>
                                                <div>
                                                    <Typography variant="body2" gutterBottom>
                                                        Service: {vendor.serviceName}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        Type: {vendor.serviceType}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        Price: ${vendor.price}
                                                    </Typography>
                                                    <Button
                                                        className={classes.addButton}
                                                        onClick={() => handlePackageSelect(vendor.vendorId)}
                                                        variant="outlined"
                                                        color="primary"
                                                    >
                                                        Add
                                                    </Button>
                                                    <Box
                                                        sx={{
                                                            width: 200,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            marginTop: '20px',
                                                        }}
                                                    >
                                                        <Rating
                                                            name="hover-feedback"
                                                            value={value}
                                                            precision={0.5}
                                                            getLabelText={getLabelText}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                            onChangeActive={(event, newHover) => {
                                                                setHover(newHover);
                                                            }}
                                                            emptyIcon={
                                                                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                                                            }
                                                        />
                                                        {value !== null && (
                                                            <Box sx={{ ml: 2 }}>
                                                                {labels[hover !== -1 ? hover : value]}
                                                            </Box>
                                                        )}
                                                    </Box>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </CardContent>
                            </Card>
                        )}
                    </Grid>


                    <Grid item xs={12} sm={12}>
                        {selectedVendors && selectedVendors.length > 0 && (
                            <Card className={classes.bookingCard}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom sx={{fontWeight: 'Bold',}}>
                                        Booking Summary
                                    </Typography>
                                    {selectedVendors.map((vendor) => (
                                        <div key={vendor.vendorId}>
                                            <Typography
                                                variant="subtitle1"
                                                gutterBottom
                                                className={classes.serviceName}
                                            >
                                                {vendor.serviceName}
                                            </Typography>
                                            <Card className={classes.selectedPackageCard}>
                                                <CardContent>
                                                    <Typography variant="body2" gutterBottom>
                                                        Vendor: {vendor.vendorName}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        Service: {vendor.serviceName}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        Type: {vendor.serviceType}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        Price: ${vendor.price}
                                                    </Typography>
                                                    <Button
                                                        className={classes.removeButton}
                                                        onClick={() => handleRemoveVendor(vendor.vendorId)}
                                                        variant="outlined"
                                                        color="secondary"
                                                    >
                                                        Remove
                                                    </Button>

                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))}
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        className={classes.totalPrice}
                                    >
                                        Total Price: ${getTotalPrice()}
                                    </Typography>

                                    <Button
                                        className={classes.bookButton}
                                        variant="outlined"
                                        color="secondary"
                                        component={Link}
                                        to="/checkout"
                                    >
                                        Purchase
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Service;
