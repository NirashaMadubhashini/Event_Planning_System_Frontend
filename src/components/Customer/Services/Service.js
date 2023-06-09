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
    InputAdornment,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
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
    Store, ExitToApp,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import DeckIcon from '@mui/icons-material/Deck';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import CakeIcon from '@mui/icons-material/Cake';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

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
    const [selectedService, setSelectedService] = useState(null);
    const [serviceVendors, setServiceVendors] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedPackages, setSelectedPackages] = useState([]);

    const handleButtonClick = (id) => {
        const clickedService = services.find((service) => service.id === id);
        setSelectedService(clickedService);
        setServiceVendors([]);
        if (clickedService) {
            setTimeout(() => {
                const mockServiceVendors = [
                    {
                        id: 1,
                        name: "Service Vendor 1",
                    },
                    {
                        id: 2,
                        name: "Service Vendor 2",
                    },
                    {
                        id: 3,
                        name: "Service Vendor 3",
                    },
                    {
                        id: 4,
                        name: "Service Vendor 4",
                    },
                    {
                        id: 5,
                        name: "Service Vendor 5",
                    },
                    {
                        id: 6,
                        name: "Service Vendor 6",
                    },
                ];
                setServiceVendors(mockServiceVendors);
            }, 1000);
        }
        setClickedButtons((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const handleCategoryClick = (category) => {
        setClickedCategory((prevCategory) =>
            prevCategory === category ? "" : category
        );
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedPackages([]);
    };

    const handlePackageSelect = (packageId) => {
        const packageExists = selectedPackages.includes(packageId);

        if (packageExists) {
            setSelectedPackages((prevSelectedPackages) =>
                prevSelectedPackages.filter((id) => id !== packageId)
            );
        } else {
            setSelectedPackages((prevSelectedPackages) => [
                ...prevSelectedPackages,
                packageId,
            ]);
        }
    };

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
            id: 1,
            name: "Hotel",
            icon: <MapsHomeWork />,
            category: "Events",
        },
        {
            id: 2,
            name: "Hall",
            icon: <DeckIcon/>,
            category: "Events",
        },
        {
            id: 3,
            name: "Villa",
            icon: <OtherHousesIcon />,
            category: "Events",
        },
        {
            id: 4,
            name: "Catering and Bar services",
            icon: <Fastfood/>,
            category: "Celebrations",
        },
        {
            id: 5,
            name: "Flora",
            icon: <LocalFloristIcon />,
            category: "Celebrations",
        },
        {
            id: 6,
            name: "Decoration and Lightning",
            icon: <AutoAwesomeIcon />,
            category: "Celebrations",
        },
        {
            id: 7,
            name: "Photography and Videography",
            icon: <MonochromePhotosIcon />,
            category: "Events",
        },
        {
            id: 8,
            name: "DJ and Sound",
            icon: <MusicNoteIcon />,
            category: "Celebrations",
        },
        {
            id: 9,
            name: "Cake",
            icon: <CakeIcon/>,
            category: "Celebrations",
        },
        {
            id: 10,
            name: "Wedding invitations and stationery",
            icon: <CardGiftcardIcon />,
            category: "Celebrations",
        },
        {
            id: 11,
            name: "Hair and Makeup",
            icon: <Brush/>,
            category: "Celebrations",
        },
        {
            id: 12,
            name: "Transportation",
            icon: <EmojiTransportationIcon  />,
            category: "Events",
        },
        {
            id: 13,
            name: "Poruwa",
            icon: <CorporateFareIcon  />,
            category: "Events",
        },
    ];

    const vendors = [
        {
            id: 1,
            name: "Vendor 1",
            services: [
                {
                    id: 1,
                    name: "Photography",
                    packages: [
                        {
                            id: 1,
                            name: "Package 1",
                            price: "$100",
                        },
                        {
                            id: 2,
                            name: "Package 2",
                            price: "$200",
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            name: "Vendor 2",
            services: [
                {
                    id: 2,
                    name: "Music",
                    packages: [
                        {
                            id: 3,
                            name: "Package 3",
                            price: "$150",
                        },
                        {
                            id: 4,
                            name: "Package 4",
                            price: "$250",
                        },
                    ],
                },
            ],
        },
        {
            id: 3,
            name: "Vendor 3",
            services: [
                {
                    id: 3,
                    name: "Transportation",
                    packages: [
                        {
                            id: 5,
                            name: "Package 5",
                            price: "$120",
                        },
                        {
                            id: 6,
                            name: "Package 6",
                            price: "$220",
                        },
                    ],
                },
            ],
        },
        {
            id: 4,
            name: "Vendor 4",
            services: [
                {
                    id: 4,
                    name: "Gifts",
                    packages: [
                        {
                            id: 7,
                            name: "Package 7",
                            price: "$80",
                        },
                        {
                            id: 8,
                            name: "Package 8",
                            price: "$180",
                        },
                    ],
                },
            ],
        },
        {
            id: 5,
            name: "Vendor 5",
            services: [
                {
                    id: 5,
                    name: "Catering",
                    packages: [
                        {
                            id: 9,
                            name: "Package 9",
                            price: "$90",
                        },
                        {
                            id: 10,
                            name: "Package 10",
                            price: "$190",
                        },
                    ],
                },
            ],
        },
        {
            id: 6,
            name: "Vendor 6",
            services: [
                {
                    id: 6,
                    name: "Decoration",
                    packages: [
                        {
                            id: 11,
                            name: "Package 11",
                            price: "$110",
                        },
                        {
                            id: 12,
                            name: "Package 12",
                            price: "$210",
                        },
                    ],
                },
            ],
        },
    ];

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
            <Container maxWidth="lg" className={classes.container}>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <div className={classes.serviceSection}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                style={{ color: "#3F51B5" }}
                            >
                                OUR SERVICES
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                What We Offer
                            </Typography>
                        </div>
                    </Grid>
                            <Grid item xs={12} sm={4}>
                                <div className={classes.serviceSection2}>
                            {services.map((service) => (
                                <Card
                                    key={service.id}
                                    className={classes.card}
                                    onClick={() => handleButtonClick(service.id)}
                                >
                                    <CardContent className={classes.cardContent}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexDirection: "column",
                                                height: "100%",
                                            }}
                                        >
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                {service.icon}
                                            </Box>
                                            <Typography variant="h6" sx={{ mt: 2 }}>
                                                {service.name}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        {selectedService && (
                            <Card className={classes.vendorContainer}>
                                <CardContent>
                                    <Typography variant="h5" className={classes.vendorTitle}>
                                        {selectedService.name} Vendors
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {serviceVendors.map((vendor) => (
                                            <Grid item xs={12} sm={6} md={4} key={vendor.id}>
                                                <Card className={classes.vendorCard}>
                                                    <CardContent>
                                                        <Typography variant="h6">{vendor.name}</Typography>
                                                        <Button
                                                            variant={
                                                                clickedButtons[selectedService.id] ? "contained" : "contained"
                                                            }
                                                            color="primary"
                                                            onClick={handleOpenModal}
                                                            className={classes.packageButton}
                                                        >
                                                            Select Package
                                                        </Button>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </CardContent>
                            </Card>
                        )}
                        <Dialog open={openModal} onClose={handleCloseModal}>
                            <DialogTitle>Select Packages</DialogTitle>
                            <DialogContent>
                                {selectedService &&
                                    vendors.map((vendor) => {
                                        const service = vendor.services.find(
                                            (service) => service.id === selectedService.id
                                        );
                                        return (
                                            service &&
                                            service.packages.map((packageItem) => (
                                                <Box key={packageItem.id} marginBottom={2}>
                                                    <Card>
                                                        <CardContent>
                                                            <Grid container spacing={2} alignItems="center">
                                                                <Grid item>
                                                                    <Typography variant="h6">
                                                                        {packageItem.name}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography variant="subtitle1">
                                                                        {packageItem.price}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Button
                                                                        variant={
                                                                            selectedPackages.includes(packageItem.id)
                                                                                ? "contained"
                                                                                : ""
                                                                        }
                                                                        color="primary"
                                                                        onClick={() =>
                                                                            handlePackageSelect(packageItem.id)
                                                                        }
                                                                    >
                                                                        Select
                                                                    </Button>
                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </Card>
                                                </Box>
                                            ))
                                        );
                                    })}
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseModal} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleCloseModal} color="primary">
                                    Done
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};

export default Service;
