import React, { useState, useEffect } from "react";
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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Modal,
    Paper,
} from "@material-ui/core";
import {
    Search,
    ArrowDropDown,
    ExitToApp,
    Logout,
    Edit,
    Delete,
    Call,
    Message,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import useStyles from "./style";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const VendorViewBookings = () => {
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
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [updateConfirmationOpen, setUpdateConfirmationOpen] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        name: "",
        contactNumber: "",
        businessName: "",
        services: "",
        rating: "",
        numOfBookings: "",
    });

    const handleCategoryClick = (category) => {
        setClickedCategory((prevCategory) =>
            prevCategory === category ? "" : category
        );
    };

    const handleDeleteConfirmationOpen = () => {
        setDeleteConfirmationOpen(true);
    };

    const handleDeleteConfirmationClose = () => {
        setDeleteConfirmationOpen(false);
    };

    const handleUpdateConfirmationOpen = () => {
        setUpdateConfirmationOpen(true);
    };

    const handleUpdateConfirmationClose = () => {
        setUpdateConfirmationOpen(false);
    };

    const handleUpdateModalOpen = (vendor) => {
        setModalData(vendor);
        setUpdateModalOpen(true);
    };

    const handleUpdateModalClose = () => {
        setUpdateModalOpen(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setModalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleModalSubmit = () => {
        // Handle the submit logic here
        console.log(modalData);
        setUpdateConfirmationOpen(false);
        setUpdateModalOpen(false);
    };
    const handleCallAction = () => {
        // Implement the call action logic here
        console.log("Calling...");
    };

    const handleMessageAction = () => {
        // Implement the message action logic here
        console.log("Sending a message...");
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

    const bookingData = [
        {
            customerName: "Nirasha Madubhashini",
            contactNo:"0761319259",
            event: "Wedding",
            vendorName: "Vendor 1",
            numOfServices: 3,
            date: "2023-07-15",
            time: "12:00 PM",
            paymentStatus: "Paid",
        },
        {
            customerName: "Anupama Sathsarani",
            contactNo:"0766430010",
            event: "Birthday Party",
            vendorName: "Vendor 2",
            numOfServices: 5,
            date: "2023-07-16",
            time: "2:00 PM",
            paymentStatus: "Pending",
        },
        {
            customerName: "Geeth Malinda",
            contactNo:"0764910300",
            event: "Birthday Party",
            vendorName: "Vendor 2",
            numOfServices: 5,
            date: "2023-07-16",
            time: "2:00 PM",
            paymentStatus: "Cancel",
        },
    ];

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
                <div className={classes.vendorViewBookingSection}>
                    <Typography variant="h4" gutterBottom style={{ color: "#3F51B5" }}>
                        View and Manage Bookings
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            placeholder="Search"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <Search />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
                <TableContainer component={Card} className={classes.tableContainer}>
                    <Table>
                        <TableHead style={{ backgroundColor: "#C8C9CB" }}>
                            <TableRow>
                                <TableCell>Customer Name</TableCell>
                                <TableCell>Contact No</TableCell>
                                <TableCell>Event</TableCell>
                                <TableCell>Vendor Name</TableCell>
                                <TableCell>No. of Services</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Payment Status</TableCell>
                                {/*<TableCell>Actions</TableCell>*/}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookingData.map((customer, index) => (
                                <TableRow key={index}>
                                    <TableCell>{customer.customerName}</TableCell>
                                    <TableCell>{customer.contactNo}</TableCell>
                                    <TableCell>{customer.event}</TableCell>
                                    <TableCell>{customer.vendorName}</TableCell>
                                    <TableCell>{customer.numOfServices}</TableCell>
                                    <TableCell>{customer.date}</TableCell>
                                    <TableCell>{customer.time}</TableCell>
                                    <TableCell>
                                        <Typography
                                            style={{
                                                color:
                                                    customer.paymentStatus === "Paid"
                                                        ? "green"
                                                        : customer.paymentStatus === "Pending"
                                                            ? "orange"
                                                            : "red",
                                            }}
                                        >
                                            {customer.paymentStatus}
                                        </Typography>
                                    </TableCell>
                                    {/*<TableCell>*/}
                                    {/*    <IconButton color="secondary" onClick={handleMessageAction}>*/}
                                    {/*        <MailOutlineIcon />*/}
                                    {/*    </IconButton>*/}
                                    {/*</TableCell>*/}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Dialog
                open={deleteConfirmationOpen}
                onClose={handleDeleteConfirmationClose}
            >
                <DialogTitle>Delete Confirmation</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        Are you sure you want to delete this booking?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteConfirmationClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteConfirmationClose} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={updateConfirmationOpen}
                onClose={handleUpdateConfirmationClose}
            >
                <DialogTitle>Approve Confirmation</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        Are you sure you want to Approve this booking?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpdateConfirmationClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleUpdateConfirmationClose} color="secondary">
                        Approve
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default VendorViewBookings;
