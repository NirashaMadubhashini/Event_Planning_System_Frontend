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
    LibraryMusic, EmojiTransportation, CardGiftcard, SurroundSound, Chair, AdminPanelSettings, CropOriginal, Store
} from "@mui/icons-material";
import { Event, LocationOn, Restaurant, MusicNote } from "@mui/icons-material";
import Box from "@mui/material/Box";

const Service = () => {
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
            icon: <LibraryMusic/>,
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

    return (
        <Container maxWidth="xl" className={classes.container}>
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
            <Container maxWidth="lg" className={classes.container}>
                <div className={classes.serviceSection}>
                    <Typography variant="h6" gutterBottom style={{ color: "#3F51B5" }}>OUR SERVICES</Typography>
                    <Typography variant="h4" gutterBottom>What We Offer</Typography>
                    <Typography variant="body1" gutterBottom>Each event and client is unique, and we believe our services should be as well. We know what hiring a planner is all about!</Typography>
                </div>
                <Grid container spacing={3}>
                    {services.map((service) => (
                        <Grid item xs={12} sm={6} md={3} key={service.id}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Box mb={3}>
                                        {React.cloneElement(service.icon, { style: { fontSize: 100, color: '#3F51B5' } })}
                                    </Box>
                                    <Typography variant="h5" gutterBottom style={{fontSize: '2.5 rem',fontWeight:'bold' }}>
                                        {service.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Container>
    );
};

export default Service
