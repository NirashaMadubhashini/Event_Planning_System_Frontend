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
    Menu,
    MenuItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {ArrowDropDown, ExitToApp, Logout} from "@mui/icons-material";
import Box from "@mui/material/Box";
import useStyles from "./style";
import EventPro from "../../../assets/images/BlackLogo.png";
import Image1 from "../../../assets/images/I2.webp";
import Image2 from "../../../assets/images/slider-events.jpg";
import Image3 from "../../../assets/images/Birthday.webp";

const About = () => {
    const [appBarPosition, setAppBarPosition] = useState("relative");
    const [clickedCategory, setClickedCategory] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleCategoryClick = (category) => {
        setClickedCategory((prevCategory) =>
            prevCategory === category ? "" : category
        );
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setAppBarPosition("fixed");
        } else {
            setAppBarPosition("relative");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    return (
        <Container maxWidth="xl" className={classes.container}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Toolbar className={classes.toolbar}>
                    <Link to="/" className={classes.brandContainer}>
                        <img component={Link} to="/" src={EventPro} alt="icon" height="60px" />
                    </Link>
                    <div style={{ flexGrow: 1 }}></div> {/* This div will take up any available space and push the button to the right */}
                    <Button component={Link} to="/" variant="contained" color="primary">Back</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" className={classes.container}>
                <div className={classes.serviceSection}>
                    <Typography variant="h4" gutterBottom style={{ color: "#3F51B5" }}>
                        ABOUT US
                    </Typography>
                </div>
                <Container maxWidth="xl" className={classes.container}>
                    <Box display="flex" alignItems="center">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Our Vision
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            As the event planning company in Sri Lanka, we know that
                                            it’s not "one size fits all". Each event and client is
                                            unique, and we believe our services should be as well. We
                                            understand that it should be "Can I hire a planner?" not
                                            "Can I afford one?". We will give a very special
                                            celebration for you
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <Box>
                                    <img src={Image1} alt="Image 1" className={classes.image} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box>
                                    <img src={Image2} alt="Image 2" className={classes.image} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box>
                                    <img src={Image3} alt="Image 3" className={classes.image} />
                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Container>
            </Container>
        </Container>
    );
};

export default About;
