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
    Container, TextField,
} from "@material-ui/core";
import useStyles from "./style";
import {
    Search,
    ArrowDropDown,
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
    ExitToApp, Brush, Logout,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import DeckIcon from "@mui/icons-material/Deck";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MonochromePhotosIcon from "@mui/icons-material/MonochromePhotos";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CakeIcon from "@mui/icons-material/Cake";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import AttractionsIcon from '@mui/icons-material/Attractions';
import EventPro from "../../../assets/images/CorrectLogo.png";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {LocalizationProvider} from '@mui/x-date-pickers-pro';
import {AdapterDayjs} from '@mui/x-date-pickers-pro/AdapterDayjs';
import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';
import {format} from "date-fns";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import {fetchServicesTypeWise, getAllServices} from "../../../actions";
import {useDispatch, useSelector} from 'react-redux';

const Service = () => {

    const dispatch = useDispatch();
    const services = useSelector(state => state.adminReducer.services); // Adjust the path based on your state structure
    const vendors = useSelector((state) => state.adminReducer.vendorServicesTypeWise);

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

    // const services = [
    //     {
    //         name: "Hotel",
    //         id: 1,
    //         icon: <MapsHomeWork/>,
    //     },
    //     {
    //         name: "Hall",
    //         id: 2,
    //         icon: <DeckIcon/>,
    //     },
    //     {
    //         name: "Villa",
    //         id: 3,
    //         icon: <OtherHousesIcon/>,
    //     },
    //     {
    //         name: "Catering and Bar services",
    //         id: 4,
    //         icon: <Fastfood/>,
    //     },
    //     {
    //         name: "Flora",
    //         id: 5,
    //         icon: <LocalFloristIcon/>,
    //     },
    //     {
    //         name: "Decoration and Lightning",
    //         id: 6,
    //         icon: <AutoAwesomeIcon/>,
    //     },
    //     {
    //         name: "Photography and Videography",
    //         id: 7,
    //         icon: <MonochromePhotosIcon/>,
    //     },
    //     {
    //         name: "DJ and Sound",
    //         id: 8,
    //         icon: <MusicNoteIcon/>,
    //     },
    //     {
    //         name: "Cake",
    //         id: 9,
    //         icon: <CakeIcon/>,
    //     },
    //     {
    //         name: "Invitation Cards and stationery",
    //         id: 10,
    //         icon: <CardGiftcardIcon/>,
    //     },
    //     {
    //         name: "Hair and Makeup",
    //         id: 11,
    //         icon: <Brush/>,
    //     },
    //     {
    //         name: "Transportation",
    //         id: 12,
    //         icon: <EmojiTransportationIcon/>,
    //     },
    //     {
    //         name: "Poruwa",
    //         id: 13,
    //         icon: <CorporateFareIcon/>,
    //     },
    // ];

    // const vendors = [
    //     {
    //         id: 1,
    //         name: "Vendor 1",
    //         services: [
    //             {
    //                 id: 1,
    //                 name: "Hotel",
    //                 packages: [
    //                     {
    //                         id: 1,
    //                         name: "Package 1",
    //                         price: 100,
    //                     },
    //                     {
    //                         id: 2,
    //                         name: "Package 2",
    //                         price: 150,
    //                     },
    //                 ],
    //             },
    //
    //         ],
    //     },
    //     {
    //         id: 2,
    //         name: "Vendor 2",
    //         services: [
    //             {
    //                 id: 2,
    //                 name: "Hall",
    //                 packages: [
    //                     {
    //                         id: 3,
    //                         name: "Package 1",
    //                         price: 1000,
    //                     },
    //                     {
    //                         id: 4,
    //                         name: "Package 2",
    //                         price: 1500,
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         id: 3,
    //         name: "Vendor 3",
    //         services: [
    //             {
    //                 id: 3,
    //                 name: "Villa",
    //                 packages: [
    //                     {
    //                         id: 5,
    //                         name: "Package 1",
    //                         price: 1000,
    //                     },
    //                     {
    //                         id: 6,
    //                         name: "Package 2",
    //                         price: 1500,
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    // ];

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

    const handlePackageSelect = (vendorId, serviceId, packageId) => {
        const selectedVendor = vendors.find((vendor) => vendor.id === vendorId);
        const selectedService = selectedVendor.services.find(
            (service) => service.id === serviceId
        );
        const selectedPackage = selectedService.packages.find(
            (pkg) => pkg.id === packageId
        );

        const newClickedButtons = {
            ...clickedButtons,
            [clickedCategory]: {
                ...clickedButtons[clickedCategory],
                [clickedService]: {
                    vendor: selectedVendor,
                    service: selectedService,
                    package: selectedPackage,
                },
            },
        };

        setClickedButtons(newClickedButtons);
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

        return total;
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
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={12}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DateRangePicker', 'MultiInputTimeRangeField']}>
                                            <DateRangePicker localeText={{start: 'Start-Date', end: 'End-Date'}}/>
                                        </DemoContainer>
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
                                            <MenuItem value="Location 1">Galle</MenuItem>
                                            <MenuItem value="Location 2">Colombo</MenuItem>
                                            <MenuItem value="Location 3">Matara</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <Button variant="contained" color="primary" type="submit">
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    {/*<Grid container spacing={3} justify="center">*/}
                    {/*    <Grid item xs={12} sm={6}>*/}
                    {/*        <Card className={classes.card}>*/}
                    {/*            <CardContent className={classes.cardContent}>*/}
                    {/*                <div>*/}
                    {/*                    <TextField id="nic" label="NIC" variant="outlined" fullWidth />*/}
                    {/*                    <TextField id="name" label="Name" variant="outlined" fullWidth />*/}
                    {/*                    <TextField id="address" label="Address" variant="outlined" fullWidth />*/}
                    {/*                    <TextField id="phone" label="Phone" variant="outlined" fullWidth />*/}
                    {/*                    <Button variant="contained" color="primary" fullWidth>*/}
                    {/*                        Submit*/}
                    {/*                    </Button>*/}
                    {/*                </div>*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
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
                    {/*<Grid item xs={12} sm={8}>*/}
                    {/*    {clickedService && (*/}
                    {/*        <Card className={classes.vendorCard}>*/}
                    {/*            <CardContent>*/}
                    {/*                <Typography variant="h6" gutterBottom>*/}
                    {/*                    Vendors*/}
                    {/*                </Typography>*/}
                    {/*                {vendors*/}
                    {/*                    .map((vendor) => (*/}
                    {/*                        <Card key={vendor.id} className={classes.vendorInfoCard}>*/}
                    {/*                            <CardContent>*/}
                    {/*                                <Typography variant="subtitle1" gutterBottom>*/}
                    {/*                                    {vendor.name}*/}
                    {/*                                </Typography>*/}
                    {/*                                {vendor.services*/}
                    {/*                                    .filter(*/}
                    {/*                                        (service) => service.name === clickedService*/}
                    {/*                                    )*/}
                    {/*                                    .map((service) => (*/}
                    {/*                                        <div key={service.id}>*/}
                    {/*                                            {service.packages.map((pkg) => (*/}
                    {/*                                                <Card*/}
                    {/*                                                    key={pkg.id}*/}
                    {/*                                                    className={classes.packageCard}*/}
                    {/*                                                >*/}
                    {/*                                                    <CardContent>*/}
                    {/*                                                        <Typography*/}
                    {/*                                                            variant="body2"*/}
                    {/*                                                            gutterBottom*/}
                    {/*                                                        >*/}
                    {/*                                                            {pkg.name}*/}
                    {/*                                                        </Typography>*/}
                    {/*                                                        <Typography*/}
                    {/*                                                            variant="body2"*/}
                    {/*                                                            gutterBottom*/}
                    {/*                                                        >*/}
                    {/*                                                            Price: ${pkg.price}*/}
                    {/*                                                        </Typography>*/}
                    {/*                                                        <Button*/}
                    {/*                                                            className={classes.addButton}*/}
                    {/*                                                            onClick={() =>*/}
                    {/*                                                                handlePackageSelect(*/}
                    {/*                                                                    vendor.id,*/}
                    {/*                                                                    service.id,*/}
                    {/*                                                                    pkg.id*/}
                    {/*                                                                )*/}
                    {/*                                                            }*/}
                    {/*                                                            variant="outlined"*/}
                    {/*                                                            color="primary"*/}
                    {/*                                                            disabled={*/}
                    {/*                                                                clickedButtons[clickedCategory] &&*/}
                    {/*                                                                clickedButtons[clickedCategory][*/}
                    {/*                                                                    clickedService*/}
                    {/*                                                                    ]*/}
                    {/*                                                            }*/}
                    {/*                                                        >*/}
                    {/*                                                            Add*/}
                    {/*                                                        </Button>*/}
                    {/*                                                        /!*<Button>*!/*/}
                    {/*                                                        /!*    Call*!/*/}
                    {/*                                                        /!*</Button>*!/*/}
                    {/*                                                        <Box*/}
                    {/*                                                            sx={{*/}
                    {/*                                                                width: 200,*/}
                    {/*                                                                display: 'flex',*/}
                    {/*                                                                alignItems: 'center',*/}
                    {/*                                                                marginTop: '20px',*/}
                    {/*                                                            }}*/}
                    {/*                                                        >*/}
                    {/*                                                            <Rating*/}
                    {/*                                                                name="hover-feedback"*/}
                    {/*                                                                value={value}*/}
                    {/*                                                                precision={0.5}*/}
                    {/*                                                                getLabelText={getLabelText}*/}
                    {/*                                                                onChange={(event, newValue) => {*/}
                    {/*                                                                    setValue(newValue);*/}
                    {/*                                                                }}*/}
                    {/*                                                                onChangeActive={(event, newHover) => {*/}
                    {/*                                                                    setHover(newHover);*/}
                    {/*                                                                }}*/}
                    {/*                                                                emptyIcon={<StarIcon*/}
                    {/*                                                                    style={{opacity: 0.55}}*/}
                    {/*                                                                    fontSize="inherit"/>}*/}
                    {/*                                                            />*/}
                    {/*                                                            {value !== null && (*/}
                    {/*                                                                <Box*/}
                    {/*                                                                    sx={{ml: 2}}>{labels[hover !== -1 ? hover : value]}</Box>*/}
                    {/*                                                            )}*/}
                    {/*                                                        </Box>*/}

                    {/*                                                    </CardContent>*/}
                    {/*                                                </Card>*/}
                    {/*                                            ))}*/}
                    {/*                                        </div>*/}
                    {/*                                    ))}*/}
                    {/*                            </CardContent>*/}
                    {/*                        </Card>*/}
                    {/*                    ))}*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*    )}*/}
                    {/*</Grid>*/}
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
                        {Object.keys(clickedButtons).length > 0 && (
                            <Card className={classes.bookingCard}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom sx={{fontWeight: 'Bold',}}>
                                        Booking Summary
                                    </Typography>
                                    {Object.keys(clickedButtons).map((category) => (
                                        <div key={category}>
                                            {Object.keys(clickedButtons[category]).map(
                                                (service) => (
                                                    <div key={service}>
                                                        <Typography
                                                            variant="subtitle1"
                                                            gutterBottom
                                                            className={classes.serviceName}
                                                        >
                                                            {service}
                                                        </Typography>
                                                        <Card className={classes.selectedPackageCard}>
                                                            <CardContent>
                                                                <Typography variant="body2" gutterBottom>
                                                                    Vendor:{" "}
                                                                    {
                                                                        clickedButtons[category][service].vendor
                                                                            .name
                                                                    }
                                                                </Typography>
                                                                <Typography variant="body2" gutterBottom>
                                                                    Service:{" "}
                                                                    {
                                                                        clickedButtons[category][service].service
                                                                            .name
                                                                    }
                                                                </Typography>
                                                                <Typography variant="body2" gutterBottom>
                                                                    Package:{" "}
                                                                    {
                                                                        clickedButtons[category][service].package
                                                                            .name
                                                                    }
                                                                </Typography>
                                                                <Typography variant="body2" gutterBottom>
                                                                    Price: $
                                                                    {
                                                                        clickedButtons[category][service].package
                                                                            .price
                                                                    }
                                                                </Typography>
                                                                <Button
                                                                    className={classes.removeButton}
                                                                    onClick={handlePackageRemove}
                                                                    variant="outlined"
                                                                    color="secondary"
                                                                >
                                                                    Remove
                                                                </Button>
                                                            </CardContent>
                                                        </Card>
                                                    </div>
                                                )
                                            )}
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
                                        // onClick={handlePackageRemove}
                                        variant="outlined"
                                        color="secondary"
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
