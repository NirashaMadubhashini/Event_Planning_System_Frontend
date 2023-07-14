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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Modal,
    Paper,
} from "@material-ui/core";
import useStyles from "./style";
import {ArrowDropDown, CheckCircle, HourglassEmpty, Cancel, Logout} from "@mui/icons-material";
import { Link } from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";

const Booking = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [classes, setClasses] = useState(useStyles());
    const [appBarPosition, setAppBarPosition] = useState("relative");
    const [clickedButtons, setClickedButtons] = useState({});
    const [clickedCategory, setClickedCategory] = useState("");
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setAppBarPosition("fixed");
        } else {
            setAppBarPosition("relative");
        }
    };

    const handleRowClick = (booking) => {
        setSelectedBooking(booking);
        setOpenModal(true);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Dummy data for the table
    const bookings = [
        {
            date: "2023-06-24",
            event: "Wedding",
            customerName: "John Doe",
            vendorName: "EventPro",
            service: "Decoration",
            status: "Confirmed",
        },
        {
            date: "2023-06-25",
            event: "Birthday Party",
            customerName: "Jane Smith",
            vendorName: "EventPro",
            service: "Catering",
            status: "Pending",
        },
        // Add more booking data if needed
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case "Confirmed":
                return <CheckCircle style={{ color: "#4CAF50" }} />;
            case "Pending":
                return <HourglassEmpty style={{ color: "#FFC107" }} />;
            case "Cancelled":
                return <Cancel style={{ color: "#F44336" }} />;
            default:
                return null;
        }
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
                        VIEW YOUR
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        My Booking History
                    </Typography>
                </div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead style={{ backgroundColor: "#C8C9CB" }}>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Event</TableCell>
                                <TableCell>Customer Name</TableCell>
                                <TableCell>Vendor Name</TableCell>
                                <TableCell>Service</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookings.map((booking, index) => (
                                <TableRow
                                    key={index}
                                    onClick={() => handleRowClick(booking)}
                                    className={classes.tableRow}
                                >
                                    <TableCell>{booking.date}</TableCell>
                                    <TableCell>{booking.event}</TableCell>
                                    <TableCell>{booking.customerName}</TableCell>
                                    <TableCell>{booking.vendorName}</TableCell>
                                    <TableCell>{booking.service}</TableCell>
                                    <TableCell>
                                        <span
                                            style={{
                                                color:
                                                    booking.status === "Confirmed"
                                                        ? "green"
                                                        : booking.status === "Pending"
                                                            ? "orange"
                                                            : "red",
                                            }}
                                        >
                                            {booking.status}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="booking-details"
                aria-describedby="booking-details-modal"
            >
                <div className={classes.modal}>
                    {selectedBooking && (
                        <div className={classes.modalContent}>
                            <Typography variant="h5" gutterBottom>
                                Booking Details
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Date: {selectedBooking.date}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Event: {selectedBooking.event}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Customer Name: {selectedBooking.customerName}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Vendor Name: {selectedBooking.vendorName}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Service: {selectedBooking.service}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Status: {selectedBooking.status}
                            </Typography>
                        </div>
                    )}
                </div>
            </Modal>
        </Container>
    );
};

export default Booking;
