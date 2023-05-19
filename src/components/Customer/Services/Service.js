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
    Store,
} from "@mui/icons-material";
import Box from "@mui/material/Box";


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
                        packages: [
                            { id: 1, name: "Package 1" },
                            { id: 2, name: "Package 2" },
                        ],
                    },
                    {
                        id: 2,
                        name: "Service Vendor 2",
                        packages: [
                            { id: 3, name: "Package 3" },
                            { id: 4, name: "Package 4" },
                        ],
                    },
                    {
                        id: 3,
                        name: "Service Vendor 3",
                        packages: [
                            { id: 5, name: "Package 5" },
                            { id: 6, name: "Package 6" },
                        ],
                    },
                    {
                        id: 4,
                        name: "Service Vendor 4",
                        packages: [
                            { id: 5, name: "Package 7" },
                            { id: 6, name: "Package 8" },
                        ],
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
            name: "Venue rental",
            icon: <MapsHomeWork />,
        },
        {
            id: 2,
            name: "Catering and Bar",
            icon: <Fastfood />,
        },
        {
            id: 3,
            name: "Decorations and floral arrangements",
            icon: <Celebration />,
        },
        {
            id: 4,
            name: "Cake and desserts",
            icon: <Cake />,
        },
        {
            id: 5,
            name: "Photography and Videography",
            icon: <CameraAlt />,
        },
        {
            id: 6,
            name: "Entertainment",
            icon: <LibraryMusic />,
        },
        {
            id: 7,
            name: "Transportation",
            icon: <EmojiTransportation />,
        },
        {
            id: 8,
            name: "Invitations and stationery",
            icon: <CardGiftcard />,
        },
        {
            id: 9,
            name: "Hair and Makeup services",
            icon: <Brush />,
        },
        {
            id: 10,
            name: "Sound and lighting equipment",
            icon: <SurroundSound />,
        },
        {
            id: 11,
            name: "Staging and seating",
            icon: <Chair />,
        },
        {
            id: 12,
            name: "Security personnel",
            icon: <AdminPanelSettings />,
        },
        {
            id: 13,
            name: "Marketing and promotion",
            icon: <CropOriginal />,
        },
        {
            id: 14,
            name: "Merchandise sales",
            icon: <Store />,
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
                                <MenuItem onClick={handleClose} className={classes.menuItem}>
                                    Wedding Celebrations
                                </MenuItem>
                                <MenuItem onClick={handleClose}>Engagement</MenuItem>
                                <MenuItem onClick={handleClose}>Birthday Parties</MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Anniversary Celebrations
                                </MenuItem>
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
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
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
                                        Show Vendors
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Container>
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>Select Packages</DialogTitle>
                <DialogContent>
                    <Grid container spacing={3}>
                        {serviceVendors.map((vendor) => (
                            <Grid
                                item
                                xs={12}
                                sm={4}
                                key={vendor.id}
                                className={classes.packageContainer}
                            >
                                <Card className={classes.vendorCard}>
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
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Service;
