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
import {useDispatch, useSelector} from 'react-redux';
import {
    addPackage,
    deletePackage,
    getAllPackages,
    updatePackage,
    searchPackage,
    updateService, getAllServices, deleteService, addService
} from '../../../actions';
import Box from "@mui/material/Box";
import { Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';

const AddPackage = () => {
    const dispatch = useDispatch();
    const packages = useSelector(state => state.adminReducer.packages);
    const [filteredPackages, setFilteredPackages] = useState(packages);
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        packageId: "",
        packageName: "",
        packagePrice: "",
        packageDuration: "",
        guestCount: "",
        listOfServices: "",

    });

    const [priceError, setPriceError] = useState(false);
    const [guestCountError, setGuestCountError] = useState(false);
    const [duplicatePackageError, setDuplicatePackageError] = useState(false);
    const [packageNameError, setPackageNameError] = useState(false);
    const classes = useStyles();
    // State variable to hold edited package data
    const [editedPackage, setEditedPackage] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");
    const [durationError, setDurationError] = useState(false);

    const openSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const closeSnackbar = () => {
        setSnackbarOpen(false);
    };
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // Function to populate editedPackage and open update modal
    const handleEditPackage = (pack) => {
        console.log("Package event clicked:", pack);
        setEditedPackage(pack);
        setModalData(pack);
        setUpdateModalOpen(true);
    };

    const handleUpdatePackage = () => {
        if (!modalData.packageName || !modalData.packagePrice || !modalData.packageDuration || !modalData.guestCount|| !modalData.listOfServices) {
            openSnackbar("Please fill all the fields!", "error");
            return;
        }
        dispatch(updatePackage(modalData)).then(() => {
            dispatch(getAllPackages()); // Fetch the updated list of packages
            openSnackbar("Package updated successfully!", "success");
            setUpdateModalOpen(false); // Close the update modal
            setEditedPackage(null); // Reset the editedPackage state
        });
    };

    const handleSearchChange = (e) => {
        const searchInput = e.target.value.toLowerCase();
        const filtered = packages.filter(pack => pack.packageName.toLowerCase().includes(searchInput));
        setFilteredPackages(filtered);
    };

    const handleClearFields = () => {
        setModalData({
            packageId: "",
            packageName: "",
            packagePrice: "",
            packageDuration: "",
            guestCount: "",
            listOfServices: "",
        });
    };

    useEffect(() => {
        setFilteredPackages(packages);
    }, [packages]);

    const handleDeletePackage = (packageId) => {
        dispatch(deletePackage(packageId)).then(() => {
            dispatch(getAllPackages()); // Fetch the updated list of packages
            openSnackbar("Package deleted successfully!", "success");
        });
        handleDeleteConfirmationClose();
    };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    const [appBarPosition, setAppBarPosition] = useState("relative");
    const [clickedButtons, setClickedButtons] = useState({});
    const [clickedCategory, setClickedCategory] = useState("");

    const handleCategoryClick = (category) => {
        setClickedCategory((prevCategory) =>
            prevCategory === category ? "" : category
        );
    };

    useEffect(() => {
        // Fetch events when the component mounts
        dispatch(getAllPackages());
    }, [dispatch]);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                if (appBarPosition !== "fixed") {
                    setAppBarPosition("fixed");
                }
            } else {
                if (appBarPosition !== "relative") {
                    setAppBarPosition("relative");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [appBarPosition]);


    const handleDeleteConfirmationOpen = () => {
        setDeleteConfirmationOpen(true);
    };

    const handleDeleteConfirmationClose = () => {
        setDeleteConfirmationOpen(false);
    };

    // const handleUpdateModalOpen = (customizePackage) => {
    //     setModalData(customizePackage);
    //     setUpdateModalOpen(true);
    // };

    const handleUpdateModalClose = () => {
        setUpdateModalOpen(false);
    };
    const handleModalSubmit = () => {
        // Handle the submit logic here
        console.log(modalData);
        setUpdateModalOpen(false);
    };

    const validatePackageName = (name) => {
        const pattern = /^[A-Za-z\s]+$/;
        return pattern.test(name);
    };

    const validatePackagePrice = (price) => {
        const pattern = /^\d+$/;
        return pattern.test(price);
    };

    const validatePackageDuration = (duration) => {
        const pattern = /^(Morning|Evening|Night)$/;
        return pattern.test(duration);
    };

    const validateGuestCount = (count) => {
        const pattern = /^\d+$/;
        return pattern.test(count);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === "packageName" && !validatePackageName(value)) {
            setPackageNameError(true);
        } else {
            setPackageNameError(false);
        }

        if (name === "packagePrice" && !validatePackagePrice(value)) {
            setPriceError(true);
        } else {
            setPriceError(false);
        }

        if (name === "packageDuration" && !validatePackageDuration(value)) {
            setDurationError(true);
        } else {
            setDurationError(false);
        }

        if (name === "guestCount" && !validateGuestCount(value)) {
            setGuestCountError(true);
        } else {
            setGuestCountError(false);
        }

        setModalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleInputChangeUpdate = (pack) => {
        const {name, value} = pack.target;

        if (name === "packageName" && !validatePackageName(value)) {
            setPackageNameError(true);
        } else {
            setPackageNameError(false);
        }

        if (name === "packagePrice" && !validatePackagePrice(value)) {
            setPriceError(true);
        } else {
            setPriceError(false);
        }

        if (name === "packageDuration" && !validatePackageDuration(value)) {
            setDurationError(true);
        } else {
            setDurationError(false);
        }

        if (name === "guestCount" && !validateGuestCount(value)) {
            setGuestCountError(true);
        } else {
            setGuestCountError(false);
        }

        setModalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddPackage= () => {

        if (
            modalData.packageName === "" ||
            modalData.packagePrice === "" ||
            modalData.packageDuration === "" ||
            modalData.guestCount === "" ||
            modalData.listOfServices === ""
        ) {
            openSnackbar("Please fill all the fields!", "error");
            return;
        }
        const newPackageName = modalData.packageName.trim(); // Remove leading and trailing spaces
        const isDuplicatePackage = packages.some(pack => pack.packageName === newPackageName);

        if (isDuplicatePackage) {
            setDuplicatePackageError(true);
            openSnackbar("Package with this name already exists!", "error");
            return; // Stop the function if it's a duplicate package
        }

        const packData = {
            packageName: modalData.packageName,
            packagePrice: modalData.packagePrice,
            packageDuration: modalData.packageDuration,
            guestCount: modalData.guestCount,
            listOfServices: modalData.listOfServices,
        };

        dispatch(addPackage(packData)).then(() => {
            dispatch(getAllPackages());
            openSnackbar("Service added successfully!", "success");
        });

        setModalData({
            packageId: "",
            packageName: "",
            packagePrice: "",
            packageDuration: "",
            guestCount: "",
            listOfServices: "",
        });
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
                                to="/adminDashboard"
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
                                to="/addEvents"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Events")}
                                style={{
                                    color: clickedCategory === "Events" ? "#F50057" : "",
                                }}
                            >
                                Events
                            </Typography>
                            <Typography
                                component={Link}
                                to="/addServices"
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
                                to="/addPackages"
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
                                to="/viewCustomers"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Customers")}
                                style={{
                                    color: clickedCategory === "Customers" ? "#F50057" : "",
                                }}
                            >
                                Customers
                            </Typography>
                            <Typography
                                component={Link}
                                to="/viewVendors"
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Vendors")}
                                style={{
                                    color: clickedCategory === "Vendors" ? "#F50057" : "",
                                }}
                            >
                                Vendors
                            </Typography>
                            <Typography
                                component={Link}
                                to="/viewBookings"
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
                <div className={classes.addcustomizePackagesSection}>
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
                            name="packageName"
                            value={modalData.packageName}
                            onChange={handleInputChange}
                            error={packageNameError}
                            helperText={packageNameError ? "Please enter a valid package name." : ""}
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Package Price"
                            name="packagePrice"
                            value={modalData.packagePrice}
                            onChange={handleInputChange}
                            type="text"  // use text type but validate manually
                            error={priceError}  // if priceError is true, the TextField will show error styling
                            helperText={priceError ? "Please enter a valid number." : ""}  // error message
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Package Duration"
                            name="packageDuration"
                            value={modalData.packageDuration}
                            onChange={handleInputChange}
                            error={durationError}
                            helperText={durationError ? "Please enter a valid duration." : ""}
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="No.Of Guests"
                            name="guestCount"
                            value={modalData.guestCount}
                            onChange={handleInputChange}
                            error={guestCountError}  // if priceError is true, the TextField will show error styling
                            helperText={guestCountError ? "Please enter a valid number." : ""}  // error message
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Services"
                            name="listOfServices"
                            value={modalData.listOfServices}
                            onChange={handleInputChange}
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid container item xs={12} sx={{justifyContent: 'center', alignItems: 'center'}}>
                        <Grid item >
                            <Button variant="contained" color="primary" onClick={handleAddPackage}>
                                Add Package
                            </Button>
                        </Grid>
                        <Grid item>
                            <Box ml={2}>
                                <Button
                                    onClick={handleClearFields}
                                    variant="contained"
                                    color="secondary">
                                    Clear
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            placeholder="Search by Package Name"
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
                            onChange={handleSearchChange}
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
                                <TableCell>Services</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredPackages.map((pack, index) => (
                                <TableRow key={pack.packageId}>
                                    <TableCell>{pack.packageId}</TableCell>
                                    <TableCell>{pack.packageName}</TableCell>
                                    <TableCell>{pack.packagePrice}</TableCell>
                                    <TableCell>{pack.packageDuration}</TableCell>
                                    <TableCell>{pack.guestCount}</TableCell>
                                    <TableCell>{pack.listOfServices}</TableCell>
                                    <TableCell>
                                        <IconButton color="primary"
                                                    onClick={() => handleEditPackage(pack)}
                                        >
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="secondary"
                                                    onClick={() => {
                                                        setModalData(pack); // Store the package you want to delete
                                                        handleDeleteConfirmationOpen();
                                                    }}
                                        >                                            <Delete />
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
                        <Button
                            color="primary"
                            onClick={() => handleDeletePackage(modalData.packageId)}
                        >
                            Yes, Delete
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
                            name="packageId"
                            value={modalData.packageId}
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            label="Package Name"
                            name="packageName"
                            value={modalData.packageName}
                            onChange={handleInputChangeUpdate} // <-- Corrected here
                            fullWidth
                            margin="normal"
                            error={packageNameError}
                            helperText={packageNameError ? "Please enter a valid package name." : ""}
                        />
                        <TextField
                            label="Package Price"
                            name="packagePrice"
                            value={modalData.packagePrice}
                            onChange={handleInputChangeUpdate} // <-- Corrected here
                            error={priceError} // <-- Added
                            helperText={priceError ? "Please enter a valid price." : ""} // <-- Added
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Package Duration"
                            name="packageDuration"
                            value={modalData.packageDuration}
                            onChange={handleInputChangeUpdate} // <-- Corrected here
                            fullWidth
                            margin="normal"
                            error={durationError}
                            helperText={durationError ? "Please enter a valid duration." : ""}
                        />
                        <TextField
                            label="No.Of Guests"
                            name="guestCount"
                            value={modalData.guestCount}
                            onChange={handleInputChangeUpdate} // <-- Corrected here
                            error={guestCountError} // <-- Added
                            helperText={guestCountError? "Please enter a valid Guest Count." : ""} // <-- Added
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Services"
                            name="listOfServices"
                            value={modalData.listOfServices}
                            onChange={handleInputChangeUpdate} // <-- Corrected here
                            fullWidth
                            margin="normal"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleUpdateModalClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleUpdatePackage} color="primary">
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={closeSnackbar}
                >
                    <Alert onClose={closeSnackbar} severity={snackbarSeverity}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Container>
        </Container>
    );
};

export default AddPackage;
