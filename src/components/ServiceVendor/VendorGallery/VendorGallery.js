import React, { useEffect, useState } from "react";
import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Container,
    CardMedia,
    CardContent,
    Card,
    Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {Search, ArrowDropDown, ExitToApp, Logout} from "@mui/icons-material";
import EventPro from "../../../assets/images/CorrectLogo.png";
import useStyles from "./style";
import Image1 from '../../../assets/images/I1.jpg';
import Image2 from '../../../assets/images/I2.webp';
import Image3 from '../../Customer/Gallery/img/Birthday.webp';
import Image4 from '../../Customer/Gallery/img/Wedding.jpg';
import Image5 from '../../Customer/Gallery/img/Engagement.jpeg';
import Image6 from '../../Customer/Gallery/img/Anniversery.jpg';

const VendorGallery= () => {
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
        setClickedCategory((prevCategory) =>
            prevCategory === category ? "" : category
        );
    };

    const galleryImages = [
        { src: Image5, category: "Engagement" },
        { src: Image2, category: "Social" },
        { src: Image3, category: "Celebration" },
        { src: Image4, category: "Engagement" },
        { src: Image1, category: "Social" },
        { src: Image6, category: "Celebration" },
        // ... (add more image objects with source and category as needed)
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");


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
                                to="/vendorDashboard"
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
                                to="/vendorProfile"
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
                                to="/vendorAddPackages"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Packages")}
                                style={{
                                    color: clickedCategory === "Packages" ? "#F50057" : "",
                                }}
                            >
                                Packages
                            </Typography>
                            <Typography
                                component={Link}
                                to="/vendorViewBookings"
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
                                to="/vendorGallery"
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
                                to="/"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Logout")}
                                style={{
                                    color: clickedCategory === "Logout" ? "#F50057" : "",
                                }}
                            >
                                <Logout className={classes.logoutIcon} />
                            </Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" className={classes.container}>
                <div className={classes.serviceSection}>
                    <Typography variant="h6" gutterBottom style={{ color: "#3F51B5" }}>
                        Gallery
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        See Our Best Events Gallery!
                    </Typography>
                </div>

                <div className={classes.categoryButtons}>
                    <Button
                        className={classes.categoryButton}
                        variant={selectedCategory === "All" ? "contained" : "outlined"}
                        color="primary"
                        onClick={() => setSelectedCategory("All")}
                    >
                        All
                    </Button>
                    {/* Dynamically create a button for each unique category */}
                    {Array.from(new Set(galleryImages.map(image => image.category))).map(category => (
                        <Button
                            key={category}
                            className={classes.categoryButton}
                            variant={selectedCategory === category ? "contained" : "outlined"}
                            color="primary"
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <Grid container spacing={3}>
                    {galleryImages
                        .filter(image => selectedCategory === "All" || image.category === selectedCategory)
                        .map((image, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        alt={`Gallery Image ${index}`}
                                        height="200"
                                        image={image.src}
                                    />
                                </Card>
                            </Grid>
                        ))}
                </Grid>

            </Container>
        </Container>
    );
};

export default VendorGallery;
