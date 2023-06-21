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
    Store, ExitToApp, Call, Message,
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
    const [clickedService, setClickedService] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [serviceVendors, setServiceVendors] = useState([]);
    const [openModal, setOpenModal] = useState(false);



    const handleCategoryClick = (category) => {
        setClickedCategory((prevCategory) =>
            prevCategory === category ? "" : category
        );
    };

   const handleServiceClick = (service) => {
        setClickedService((prevService) =>
            prevService=== service ? "" : service
        );
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedPackages([]);
    };

    const handlePackageSelect = (vendorId, packageId) => {
        setSelectedPackages((prevPackages) => {
            const isPackageSelected = prevPackages.some(
                (pkg) => pkg.vendorId === vendorId && pkg.packageId === packageId
            );
            if (isPackageSelected) {
                return prevPackages.filter(
                    (pkg) => pkg.vendorId !== vendorId || pkg.packageId !== packageId
                );
            } else {
                return [
                    ...prevPackages,
                    {
                        vendorId,
                        packageId,
                    },
                ];
            }
        });
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
            name: "Hotel",
            id: 1,
            icon: <MapsHomeWork />,
            category: "Events",
        },
        {
            name: "Hall",
            id: 2,
            icon: <DeckIcon/>,
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
            icon: <Fastfood/>,
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
            icon: <CakeIcon/>,
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
            icon: <Brush/>,
            category: "Celebrations",
        },
        {
            name: "Transportation",
            id: 12,
            icon: <EmojiTransportationIcon  />,
            category: "Events",
        },
        {
            name: "Poruwa",
            id: 13,
            icon: <CorporateFareIcon  />,
            category: "Events",
        },
    ];

    const vendors = [
        {
            id: 1,
            name: "Vendor 1",
            service:"Hotel",
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
            name: "Vendor 2",
            service:"Hall",
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
            name: "Vendor 3",
            service:"Villa",
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
        {
            id: 4,
            name: "Vendor 4",
            service:"Catering and Bar services"
        },
        {
            id: 5,
            name: "Vendor 5",
            service:"Flora"
        },
        {
            id: 6,
            name: "Vendor 6",
            service:"Decoration and Lightning"
        },
        {
            id: 7,
            name: "Vendor 7",
            service:"Hotel"
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
                                    onClick={() => handleServiceClick(service.name)}
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
                        {vendors
                            .filter(
                                (vendor) =>
                                    vendor.service === clickedService ||
                                    clickedService === ""
                            )
                            .map((vendor) => (
                            <Card
                                className={classes.vendorCard}
                                key={vendor.id}
                            >
                                <CardContent>
                                    <Typography variant="h5" className={classes.vendorTitle}>
                                        {vendor.name}
                                    </Typography>
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
                                    <Button
                                        startIcon={<Call />}
                                    >
                                        Call
                                    </Button>
                                    <Button
                                        startIcon={<Message />}
                                    >
                                        Message
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};

export default Service;
