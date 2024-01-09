import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Card, CardContent, Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import useStyles from './style';
import EventPro from '../../../assets/images/BlackLogo.png';

const ServiceDetails = () => {
    const [appBarPosition, setAppBarPosition] = useState("relative");
    const { vendorId } = useParams(); // Getting the vendorId from URL parameters
    const classes = useStyles();

    useEffect(() => {
        // Here, you would fetch the details of the service/vendor using the vendorId
        // For now, I'll just log it to the console
        console.log("Vendor ID:", vendorId);

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
    }, [vendorId]);

    return (
        <Container maxWidth="xl" className={classes.container}>
            <AppBar className={classes.appBar} position={appBarPosition} color="inherit">
                <Toolbar className={classes.toolbar}>
                    <Link to="/" className={classes.brandContainer}>
                        <img src={EventPro} alt="icon" height="60px" />
                    </Link>
                    <div style={{ flexGrow: 1 }}></div> {/* This div takes up any available space */}
                    <Button component={Link} to="/" variant="contained" color="primary">Back</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" className={classes.container}>
                <div className={classes.serviceSection}>
                    <Typography variant="h4" gutterBottom style={{ color: "#3F51B5" }}>
                        SERVICE DETAILS
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
                                            {/* You can display specific vendor/service details here */}
                                            {/* This is just placeholder content */}
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
                        </Grid>
                    </Box>
                </Container>
            </Container>
        </Container>
    );
};

export default ServiceDetails;
