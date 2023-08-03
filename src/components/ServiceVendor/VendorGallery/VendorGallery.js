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

import EngagementImage from "../Gallery/img/Engagement.jpeg";
import AnniversaryImage from "../Gallery/img/Anniversery.jpg";
import BirthdayImage from "../Gallery/img/Birthday.webp";
import SocialImage from "../Gallery/img/slider-events.jpg";
import VersionImage from "../Gallery/img/version-events-thumb.jpg";
import WeddingImage from "../Gallery/img/Wedding.jpg";

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

    const images = [
        {
            id: 1,
            category: "All",
            imageUrl: EngagementImage,
        },
        {
            id: 2,
            category: "Wedding",
            imageUrl: AnniversaryImage,
        },
        {
            id: 3,
            category: "Party",
            imageUrl: BirthdayImage,
        },
        {
            id: 4,
            category: "Social",
            imageUrl: SocialImage,
        },
        {
            id: 5,
            category: "All",
            imageUrl: VersionImage,
        },
        {
            id: 6,
            category: "Wedding",
            imageUrl: WeddingImage,
        },
    ];

    const categories = ["All", "Wedding", "Party", "Social"];

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
                                to="/about"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("About")}
                                style={{
                                    color: clickedCategory === "About" ? "#F50057" : "",
                                }}
                            >
                                About
                            </Typography>
                            {/*<Typography*/}
                            {/*    component={Link}*/}
                            {/*    to="/service"*/}
                            {/*    className={classes.appBarButton}*/}
                            {/*    onClick={() => handleCategoryClick("Services")}*/}
                            {/*    style={{*/}
                            {/*        color: clickedCategory === "Services" ? "#F50057" : "",*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    Services*/}
                            {/*</Typography>*/}
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
                    <div className={classes.categoryButtons}>
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant="text"
                                color="primary"
                                onClick={() => handleCategoryClick(category)}
                                className={classes.categoryButton}
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "30",
                                }}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
                <Grid container spacing={2}>
                    {images
                        .filter((image) =>
                            clickedCategory === "All"
                                ? true
                                : image.category === clickedCategory
                        )
                        .map((image) => (
                            <Grid item xs={12} sm={6} md={4} key={image.id}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={image.imageUrl}
                                        alt={`Image ${image.id}`}
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
