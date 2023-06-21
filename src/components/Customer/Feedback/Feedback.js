import React, { useEffect, useState } from "react";
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
} from "@material-ui/core";
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
    ExitToApp,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import useStyles from "./style";

const Service = () => {
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

    const services = [
        {
            name: "Hotel",
            id: 1,
            icon: <MapsHomeWork />,
        },
        {
            name: "Hall",
            id: 2,
            icon: <Fastfood />,
        },
        {
            name: "Villa",
            id: 3,
            icon: <Fastfood />,
        },
        {
            name: "Catering and Bar services",
            id: 4,
            icon: <Fastfood />,
        },
        {
            name: "Flora",
            id: 5,
            icon: <Fastfood />,
        },
        {
            name: "Decoration and Lightning",
            id: 6,
            icon: <Fastfood />,
        },
        {
            name: "Photography and Videography",
            id: 7,
            icon: <Fastfood />,
        },
        {
            name: "DJ and Sound",
            id: 8,
            icon: <Fastfood />,
        },
        {
            name: "Cake",
            id: 9,
            icon: <Fastfood />,
        },
        {
            name: "Invitation Cards and stationery",
            id: 10,
            icon: <Fastfood />,
        },
        {
            name: "Hair and Makeup",
            id: 11,
            icon: <Fastfood />,
        },
        {
            name: "Transportation",
            id: 12,
            icon: <Fastfood />,
        },
        {
            name: "Wedding",
            id: 13,
            icon: <Fastfood />,
        },
        {
            name: "Gifts",
            id: 14,
            icon: <Fastfood />,
        },
        {
            name: "Music",
            id: 15,
            icon: <Fastfood />,
        },
    ];

    const vendors = [
        { name: "Vendor 1", id: 1 },
        { name: "Vendor 2", id: 2 },
        { name: "Vendor 3", id: 3 },
        { name: "Vendor 4", id: 4 },
        { name: "Vendor 5", id: 5 },
        { name: "Vendor 6", id: 6 },
        { name: "Vendor 7", id: 7 },
        { name: "Vendor 8", id: 8 },
        { name: "Vendor 9", id: 9 },
        { name: "Vendor 10", id: 10 },
    ];

    const handleServiceButtonClick = (service) => {
        setClickedService(service);
    };

    const handleBookButtonClick = (serviceId) => {
        setClickedButtons((prevState) => ({
            ...prevState,
            [serviceId]: !prevState[serviceId],
        }));
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;

        services.forEach((service) => {
            if (clickedButtons[service.id]) {
                totalPrice += 10; // Replace with actual price calculation logic
            }
        });

        return totalPrice;
    };

    return (
        <div className={classes.root}>
            <AppBar position={appBarPosition} className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        My App
                    </Typography>
                    <IconButton color="inherit">
                        <ArrowDropDown />
                    </IconButton>
                    <Button color="inherit" component={Link} to="/login">
                        <ExitToApp />
                    </Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Box mt={8}>
                    <Typography variant="h4" gutterBottom>
                        Book a Service
                    </Typography>
                </Box>
                <Box mt={4} mb={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Services
                            </Typography>
                            <Box mb={2}>
                                {services.map((service) => (
                                    <Card key={service.id} className={classes.serviceCard}>
                                        <CardContent>
                                            <Box display="flex" alignItems="center">
                                                <Box mr={2}>{service.icon}</Box>
                                                <Typography variant="h6">{service.name}</Typography>
                                            </Box>
                                            <Box mt={2}>
                                                <Button
                                                    variant={
                                                        clickedButtons[service.id] ? "contained" : "outlined"
                                                    }
                                                    color="primary"
                                                    onClick={() => handleBookButtonClick(service.id)}
                                                >
                                                    Book
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    onClick={() => handleServiceButtonClick(service.name)}
                                                >
                                                    Vendors
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Selected Services
                            </Typography>
                            {services
                                .filter((service) => clickedButtons[service.id])
                                .map((service) => (
                                    <Card key={service.id} className={classes.selectedCard}>
                                        <CardContent>
                                            <Box display="flex" alignItems="center">
                                                <Box mr={2}>{service.icon}</Box>
                                                <Typography variant="h6">{service.name}</Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))}
                            {calculateTotalPrice() > 0 && (
                                <Card className={classes.selectedCard}>
                                    <CardContent>
                                        <Box display="flex" alignItems="center">
                                            <Typography variant="h6">Total Price:</Typography>
                                            <Box ml={2}>
                                                <Typography variant="h6">{calculateTotalPrice()} USD</Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            {clickedService && (
                                <Card className={classes.selectedCard}>
                                    <CardContent>
                                        <Typography variant="h6">
                                            Vendors for {clickedService} Service
                                        </Typography>
                                        {vendors.map((vendor) => (
                                            <Card key={vendor.id} className={classes.vendorCard}>
                                                <CardContent>
                                                    <Box display="flex" alignItems="center">
                                                        <Box mr={2}>
                                                            <CropOriginal />
                                                        </Box>
                                                        <Typography variant="h6">{vendor.name}</Typography>
                                                    </Box>
                                                    <Box mt={2}>
                                                        <Button variant="contained" color="primary">
                                                            Contact Vendor
                                                        </Button>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </CardContent>
                                </Card>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Service;
