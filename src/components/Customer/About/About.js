import React, { useEffect, useState } from "react";
import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    Card,
    CardContent,
    IconButton,
    Container,
    Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { ExitToApp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Image1 from "../../../assets/images/I1.jpg";
import useStyles from "./style";
import EventPro from "../../../assets/images/CorrectLogo.png";

const About = () => {
    const [appBarPosition, setAppBarPosition] = useState("relative");
    
    const [clickedCategory, setClickedCategory] = useState("");

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

    const classes = useStyles();

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
                            <IconButton
                                component={Link}
                                to="/auth"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("ExitToApp")}
                                style={{
                                    color: clickedCategory === "ExitToApp" ? "#F50057" : "",
                                }}
                                color="inherit"
                                edge="end"
                            >
                                <ExitToApp />
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" className={classes.container}>
                <div className={classes.serviceSection}>
                    <Typography variant="h6" gutterBottom style={{ color: "#3F51B5" }}>
                        HELLO!
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        We Are an Event Planning Agency
                    </Typography>
                    {/*<Typography variant="body1" gutterBottom>*/}
                    {/*    As the event planning company in Sri Lanka, we know that it’s not*/}
                    {/*    “one size fits all”. Each event and client is unique and we believe*/}
                    {/*    our services should be as well. We know that it should be “Can I*/}
                    {/*    hire a planner?” not “Can I afford one?”.*/}
                    {/*</Typography>*/}
                </div>
                <Container maxWidth="xl" className={classes.container}>
                    <Box display="flex" alignItems="center">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <img src={Image1} alt="Image 1" className={classes.image} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h4" gutterBottom>
                                            We will give a very special celebration for you
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            As the event planning company in Sri Lanka, we know that
                                            it’s not "one size fits all". Each event and client is
                                            unique, and we believe our services should be as well. We
                                            understand that it should be "Can I hire a planner?" not
                                            "Can I afford one?".
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Container>
        </Container>
    );
};

export default About;
