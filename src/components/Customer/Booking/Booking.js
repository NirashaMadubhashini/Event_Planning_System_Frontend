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
    ExitToApp, Brush,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
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
            category: "Events",
        },
        {
            name: "Hall",
            id: 2,
            icon: <DeckIcon />,
            category: "Events",
        },
        {
            name: "Villa",
            id: 3,
            icon: <OtherHousesIcon />,
            category: "Events",
        },
        {
            name: "Catering and Bar services",
            id: 4,
            icon: <Fastfood />,
            category: "Celebrations",
        },
        {
            name: "Flora",
            id: 5,
            icon: <LocalFloristIcon />,
            category: "Celebrations",
        },
        {
            name: "Decoration and Lightning",
            id: 6,
            icon: <AutoAwesomeIcon />,
            category: "Celebrations",
        },
        {
            name: "Photography and Videography",
            id: 7,
            icon: <MonochromePhotosIcon />,
            category: "Events",
        },
        {
            name: "DJ and Sound",
            id: 8,
            icon: <MusicNoteIcon />,
            category: "Celebrations",
        },
        {
            name: "Cake",
            id: 9,
            icon: <CakeIcon />,
            category: "Celebrations",
        },
        {
            name: "Invitation Cards and stationery",
            id: 10,
            icon: <CardGiftcardIcon />,
            category: "Celebrations",
        },
        {
            name: "Hair and Makeup",
            id: 11,
            icon: <Brush />,
            category: "Celebrations",
        },
        {
            name: "Transportation",
            id: 12,
            icon: <EmojiTransportationIcon />,
            category: "Events",
        },
        {
            name: "Wedding",
            id: 13,
            icon: <AttractionsIcon />,
            category: "Celebrations",
        },
        {
            name: "Sound and lighting",
            id: 14,
            icon: <SurroundSound />,
            category: "Celebrations",
        },
        {
            name: "Seating",
            id: 15,
            icon: <Chair />,
            category: "Events",
        },
        {
            name: "Management",
            id: 16,
            icon: <AdminPanelSettings />,
            category: "Events",
        },
        {
            name: "Photobooth",
            id: 17,
            icon: <CropOriginal />,
            category: "Events",
        },
        {
            name: "Shop",
            id: 18,
            icon: <Store />,
            category: "Events",
        },
    ];

    const vendors = [
        {
            id: 1,
            name: "Vendor 1",
            category: "Events",
            services: [
                {
                    id: 1,
                    name: "Hotel",
                    packages: [
                        {
                            id: 1,
                            name: "Package 1",
                            price: 100,
                        },
                        {
                            id: 2,
                            name: "Package 2",
                            price: 150,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Hall",
                    packages: [
                        {
                            id: 1,
                            name: "Package 1",
                            price: 200,
                        },
                        {
                            id: 2,
                            name: "Package 2",
                            price: 250,
                        },
                    ],
                },
                {
                    id: 3,
                    name: "Villa",
                    packages: [
                        {
                            id: 1,
                            name: "Package 1",
                            price: 300,
                        },
                        {
                            id: 2,
                            name: "Package 2",
                            price: 350,
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            name: "Vendor 2",
            category: "Celebrations",
            services: [
                {
                    id: 4,
                    name: "Catering and Bar services",
                    packages: [
                        {
                            id: 1,
                            name: "Package 1",
                            price: 1000,
                        },
                        {
                            id: 2,
                            name: "Package 2",
                            price: 1500,
                        },
                    ],
                },
                {
                    id: 5,
                    name: "Flora",
                    packages: [
                        {
                            id: 1,
                            name: "Package 1",
                            price: 2000,
                        },
                        {
                            id: 2,
                            name: "Package 2",
                            price: 2500,
                        },
                    ],
                },
                {
                    id: 6,
                    name: "Decoration and Lightning",
                    packages: [
                        {
                            id: 1,
                            name: "Package 1",
                            price: 3000,
                        },
                        {
                            id: 2,
                            name: "Package 2",
                            price: 3500,
                        },
                    ],
                },
            ],
        },
    ];

    const handleCategoryClick = (category) => {
        setClickedCategory(category);
        setClickedService("");
    };

    const handleServiceClick = (service) => {
        setClickedService(service);
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
                const { package: pkg } = clickedButtons[category][service];
                total += pkg.price;
            });
        });

        return total;
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
                                to="/packages"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Packages")}
                                style={{
                                    color: clickedCategory === "About" ? "#F50057" : "",
                                }}
                            >
                                Packages
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
                            <Button
                                className={classes.appBarButton}
                                onClick={handleClick}
                                endIcon={<ArrowDropDown />}
                            >
                                Nirasha Madubhashini
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{ className: classes.menuList }}
                            >
                                <MenuItem onClick={handleClose} component={Link} to="/">
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <Card className={classes.categoryCard}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Categories
                                </Typography>
                                <Button
                                    className={classes.categoryButton}
                                    onClick={() => handleCategoryClick("Events")}
                                    variant={
                                        clickedCategory === "Events" ? "contained" : "outlined"
                                    }
                                >
                                    Events
                                </Button>
                                <Button
                                    className={classes.categoryButton}
                                    onClick={() => handleCategoryClick("Celebrations")}
                                    variant={
                                        clickedCategory === "Celebrations"
                                            ? "contained"
                                            : "outlined"
                                    }
                                >
                                    Celebrations
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        {clickedCategory && (
                            <Card className={classes.serviceCard}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Services
                                    </Typography>
                                    <Grid container spacing={3}>
                                        {services
                                            .filter((service) => service.category === clickedCategory)
                                            .map((service) => (
                                                <Grid item xs={12} sm={4} key={service.id}>
                                                    <Button
                                                        className={classes.serviceButton}
                                                        startIcon={service.icon}
                                                        onClick={() => handleServiceClick(service.name)}
                                                        variant={
                                                            clickedService === service.name
                                                                ? "contained"
                                                                : "outlined"
                                                        }
                                                    >
                                                        {service.name}
                                                    </Button>
                                                </Grid>
                                            ))}
                                    </Grid>
                                </CardContent>
                            </Card>
                        )}
                        {clickedService && (
                            <Card className={classes.vendorCard}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Vendors
                                    </Typography>
                                    {vendors
                                        .filter((vendor) => vendor.category === clickedCategory)
                                        .map((vendor) => (
                                            <Card key={vendor.id} className={classes.vendorInfoCard}>
                                                <CardContent>
                                                    <Typography variant="subtitle1" gutterBottom>
                                                        {vendor.name}
                                                    </Typography>
                                                    {vendor.services
                                                        .filter(
                                                            (service) => service.name === clickedService
                                                        )
                                                        .map((service) => (
                                                            <div key={service.id}>
                                                                <Typography variant="subtitle2" gutterBottom>
                                                                    {service.name}
                                                                </Typography>
                                                                {service.packages.map((pkg) => (
                                                                    <Card
                                                                        key={pkg.id}
                                                                        className={classes.packageCard}
                                                                    >
                                                                        <CardContent>
                                                                            <Typography
                                                                                variant="body2"
                                                                                gutterBottom
                                                                            >
                                                                                {pkg.name}
                                                                            </Typography>
                                                                            <Typography
                                                                                variant="body2"
                                                                                gutterBottom
                                                                            >
                                                                                Price: ${pkg.price}
                                                                            </Typography>
                                                                            <Button
                                                                                className={classes.addButton}
                                                                                onClick={() =>
                                                                                    handlePackageSelect(
                                                                                        vendor.id,
                                                                                        service.id,
                                                                                        pkg.id
                                                                                    )
                                                                                }
                                                                                variant="outlined"
                                                                                color="primary"
                                                                                disabled={
                                                                                    clickedButtons[clickedCategory] &&
                                                                                    clickedButtons[clickedCategory][
                                                                                        clickedService
                                                                                        ]
                                                                                }
                                                                            >
                                                                                Add
                                                                            </Button>
                                                                        </CardContent>
                                                                    </Card>
                                                                ))}
                                                            </div>
                                                        ))}
                                                </CardContent>
                                            </Card>
                                        ))}
                                </CardContent>
                            </Card>
                        )}
                        {Object.keys(clickedButtons).length > 0 && (
                            <Card className={classes.bookingCard}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
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
