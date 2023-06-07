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

    const services = [
        {
            id: 1,
            name: "Hotel",
            icon: <MapsHomeWork />,
        },
        {
            id: 2,
            name: "Hall",
            icon: <DeckIcon/>,
        },
        {
            id: 3,
            name: "Villa",
            icon: <OtherHousesIcon />,
        },
        {
            id: 4,
            name: "Catering and Bar services",
            icon: <Fastfood/>,
        },
        {
            id: 5,
            name: "Flora",
            icon: <LocalFloristIcon />,
        },
        {
            id: 6,
            name: "Decoration and Lightning",
            icon: <AutoAwesomeIcon />,
        },
        {
            id: 7,
            name: "Photography and Videography",
            icon: <MonochromePhotosIcon />,
        },
        {
            id: 8,
            name: "DJ and Sound",
            icon: <MusicNoteIcon />,
        },
        {
            id: 9,
            name: "Cake",
            icon: <CakeIcon/>,
        },
        {
            id: 10,
            name: "Wedding invitations and stationery",
            icon: <CardGiftcardIcon />,
        },
        {
            id: 11,
            name: "Hair and Makeup",
            icon: <Brush/>,
        },
        {
            id: 12,
            name: "Transportation",
            icon: <EmojiTransportationIcon  />,
        },
        {
            id: 13,
            name: "Poruwa",
            icon: <CorporateFareIcon  />,
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
                                    className={`${classes.card} ${
                                        selectedService?.id === service.id ? classes.selectedCard : ""
                                    }`}
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
                        {serviceVendors.map((vendor) => (
                            <Card key={vendor.id} className={classes.vendorCard}>
                                <CardContent>
                                    <Typography variant="h6">{vendor.name}</Typography>
                                    <Typography variant="body1">
                                        Description of the vendor...
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleOpenModal}
                                    >
                                        Show Packages
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
