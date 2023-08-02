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
} from "@material-ui/core";
import {
    Search,
    ArrowDropDown,
    ExitToApp,
    Logout,
    Edit,
    Delete,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import useStyles from "./style";
import service from "../../Customer/Services/Service";

const VendorAddPackages = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        packageId: "",
        packageName: "",
        packagePrice: "",
        packageDuration: "",
        packageNoOfGuests: "",
        packageDescription: "",

    });
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

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleDeleteConfirmationOpen = () => {
        setDeleteConfirmationOpen(true);
    };

    const handleDeleteConfirmationClose = () => {
        setDeleteConfirmationOpen(false);
    };

    const handleUpdateModalOpen = (customizePackage) => {
        setModalData(customizePackage);
        setUpdateModalOpen(true);
    };

    const handleUpdateModalClose = () => {
        setUpdateModalOpen(false);
    };
    const handleModalSubmit = () => {
        // Handle the submit logic here
        console.log(modalData);
        setUpdateModalOpen(false);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setModalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const packagesData = [
        {
            packageId: "P001",
            packageName: "Wedding Celebration",
            packagePrice: "$5000",
            packageDuration: "8H",
            packageNoOfGuests: "Up to 200 Persons",
            packageDescription: "Catering,Venue,Decoration,Photography",

        },
        {
            packageId: "P002",
            packageName: "Engagement Celebration",
            packagePrice: "$2500",
            packageDuration: "4H",
            packageNoOfGuests: "Up to 100 Persons",
            packageDescription: "Catering,Venue,Decoration,Photography",


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
                                to="/vendorAddBusiness"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Business")}
                                style={{
                                    color: clickedCategory === "Business" ? "#F50057" : "",
                                }}
                            >
                                Business
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
                <div className={classes.addPackagesSection}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        style={{ color: "#3F51B5" }}
                    >
                        Add and Manage Packages
                    </Typography>
                </div>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Package Name"
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Package Price"
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Package Duration"
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="No.Of Guests"
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Description"
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                            Add Package
                        </Button>
                    </Grid>
                </Grid>
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
                                <TableCell>Package Id</TableCell>
                                <TableCell>Package Name</TableCell>
                                <TableCell>Package Price</TableCell>
                                <TableCell>Package Duration</TableCell>
                                <TableCell>No.Of Guests</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customizePackagesData.map((customizePackage, index) => (
                                <TableRow key={index}>
                                    <TableCell>{customizePackage.customizePackageId}</TableCell>
                                    <TableCell>{customizePackage.customizePackageName}</TableCell>
                                    <TableCell>{customizePackage.customizePackagePrice}</TableCell>
                                    <TableCell>{customizePackage.customizePackageDuration}</TableCell>
                                    <TableCell>{customizePackage.customizePackageNoOfGuests}</TableCell>
                                    <TableCell>{customizePackage.customizePackageDescription}</TableCell>
                                    <TableCell>
                                        <IconButton color="primary"
                                                    onClick={() => handleUpdateModalOpen(customizePackage)}
                                        >
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="secondary"
                                                    onClick={handleDeleteConfirmationOpen}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Dialog
                    open={deleteConfirmationOpen}
                    onClose={handleDeleteConfirmationClose}
                >
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogContent>
                        <Typography variant="body1">
                            Are you sure you want to delete this Package?
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
                    open={updateModalOpen}
                    onClose={handleUpdateModalClose}
                >
                    <DialogTitle>Update Service</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Package Id"
                            name="customizePackageId"
                            value={modalData.customizePackageId}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            label="Package Name"
                            name="customizePackageName"
                            value={modalData.customizePackageName}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Package Price"
                            name="customizePackagePrice"
                            value={modalData.customizePackagePrice}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Package Duration"
                            name="customizePackageDuration"
                            value={modalData.customizePackageDuration}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="No.Of Guests"
                            name="customizePackageNoOfGuests"
                            value={modalData.customizePackageNoOfGuests}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Services"
                            name="customizePackageServices"
                            value={modalData.customizePackageServices}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleUpdateModalClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleModalSubmit} color="primary">
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </Container>
    );
};

export default VendorAddPackages;
