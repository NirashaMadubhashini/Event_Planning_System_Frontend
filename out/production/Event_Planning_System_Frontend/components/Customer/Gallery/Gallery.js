import React, {useEffect, useState} from "react";
import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Container,
    InputAdornment,
    TextField,
} from "@material-ui/core";
import useStyles from "./style";
import {
    Search,
    ArrowDropDown,
} from "@mui/icons-material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

const Gallery = () => {
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
        { id: 1, imageUrl: require("../Gallery/img/Engagement.jpeg")},
        { id: 2, imageUrl: require("../Gallery/img/Anniversery.jpg")},
        { id: 3, imageUrl: require("../Gallery/img/Birthday.webp")},
        { id: 4, imageUrl: require("../Gallery/img/slider-events.jpg")},
        { id: 5, imageUrl: require("../Gallery/img/version-events-thumb.jpg")},
        { id: 6, imageUrl: require("../Gallery/img/Wedding.jpg")},
    ];

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
                    <Typography variant="h6" gutterBottom style={{ color: "#3F51B5" }}>OUR RECENT EVENTS</Typography>
                    <Typography variant="h4" gutterBottom>Gallery</Typography>
                    <Typography variant="body1" gutterBottom>See Our Best Events Gallery!</Typography>
                </div>
                <Grid container spacing={2}>
                    {images.map((image) => (
                        <Grid item xs={12} sm={6} md={4} key={image.id}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={image.imageUrl}
                                    alt={`Image ${image.id}`}

                                />
                                {/*<CardContent>*/}
                                {/*    /!* Add any additional content or caption for the image *!/*/}
                                {/*</CardContent>*/}
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ margin: "20px auto", display: "block" }} // Center the button
                >
                    See More
                </Button>
            </Container>
        </Container>
    );
};

export default Gallery