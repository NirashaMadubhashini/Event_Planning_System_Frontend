import React, {useEffect, useState} from "react";
import {
    AppBar,
    Button,
    Card,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Toolbar,
    Typography,
} from "@material-ui/core";
import {Delete, Edit, Logout, Search,} from "@mui/icons-material";
import {Link} from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import useStyles from "./style";
import {useDispatch, useSelector} from 'react-redux';
import {addService, deleteService, getAllServices, updateService} from '../../../actions/admin';
import Box from "@mui/material/Box";
import { Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
const AddService = () => {
    const dispatch = useDispatch();
    const services = useSelector(state => state.adminReducer.services);
    const [filteredServices, setFilteredServices] = useState(services);

    const [anchorEl, setAnchorEl] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        serviceId: "",
        serviceName: "",
        description: "",
        servicePrice: "",

    });
    const [priceError, setPriceError] = useState(false);
    const [duplicateServiceError, setDuplicateServiceError] = useState(false);
    const [serviceNameError, setServiceNameError] = useState(false);
    const classes = useStyles();
    // State variable to hold edited service data
    const [editedService, setEditedService] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");

    const openSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const closeSnackbar = () => {
        setSnackbarOpen(false);
    };
    // const handleClick = (service) => {
    //     setAnchorEl(service.currentTarget);
    // };

    // Function to populate editedService and open update modal
    const handleEditService = (service) => {
        console.log("Service event clicked:", service);
        setEditedService(service);
        setModalData(service);
        setUpdateModalOpen(true);
    };

    const handleUpdateService = () => {
        if (!modalData.serviceName || !modalData.description || !modalData.servicePrice) {
            openSnackbar("Please fill all the fields!", "error");
            return;
        }
        dispatch(updateService(modalData)).then(() => {
            dispatch(getAllServices()); // Fetch the updated list of services
            openSnackbar("Service updated successfully!", "success");
            setUpdateModalOpen(false); // Close the update modal
            setEditedService(null); // Reset the editedService state
        });
    };

    const handleSearchChange = (e) => {
        const searchInput = e.target.value.toLowerCase();
        const filtered = services.filter(service => service.serviceName.toLowerCase().includes(searchInput));
        setFilteredServices(filtered);
    };

    const handleClearFields = () => {
        setModalData({
            serviceId: "",
            serviceName: "",
            description: "",
            servicePrice: "",
        });
    };

    useEffect(() => {
        setFilteredServices(services);
    }, [services]);


    const handleDeleteService = (serviceId) => {
        dispatch(deleteService(serviceId)).then(() => {
            dispatch(getAllServices()); // Fetch the updated list of services
            openSnackbar("Service deleted successfully!", "success");
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
        dispatch(getAllServices());
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

    // const handleUpdateModalOpen = (service) => {
    //     setModalData(service);
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
    const handleInputChange = (service) => {
        const {name, value} = service.target;

        if (name === "serviceName" && !/^[a-zA-Z\s]*$/.test(value)) {
           setServiceNameError(true);
        } else {
            setServiceNameError(false);
        }

        if (name === "servicePrice" && isNaN(value)) {
            setPriceError(true);
        } else {
            setPriceError(false);
        }

        setModalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleInputChangeUpdate = (service) => {
        const {name, value} = service.target;

        if (name === "serviceName" && !/^[a-zA-Z\s]*$/.test(value)) {
            setServiceNameError(true);
        } else {
            setServiceNameError(false);
        }

        if (name === "servicePrice" && isNaN(value)) {
            setPriceError(true);
        } else {
            setPriceError(false);
        }

        setModalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddService = () => {
        // Check if any field is empty
        if (
            modalData.serviceName === "" ||
            modalData.description === "" ||
            modalData.servicePrice === ""
        ) {
            openSnackbar("Please fill all the fields!", "error");
            return;
        }

        const isDuplicateService = services.some(service => service.serviceName === modalData.serviceName);

        if (isDuplicateService) {
            setDuplicateServiceError(true);
            openSnackbar("Service with this name already exists!", "error");
            return; // Stop the function if it's a duplicate service
        }

        const serviceData = {
            serviceName: modalData.serviceName,
            description: modalData.description,
            servicePrice: modalData.servicePrice,
        };

        dispatch(addService(serviceData)).then(() => {
            dispatch(getAllServices());
            openSnackbar("Service added successfully!", "success");
        });

        setModalData({
            serviceId: "",
            serviceName: "",
            description: "",
            servicePrice: "",
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
                                <img src={EventPro} alt="icon" height="60px"/>
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
                                <Logout className={classes.logoutIcon}/>
                            </Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" className={classes.container}>
                <div className={classes.addServicesSection}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        style={{color: "#3F51B5"}}
                    >
                        Add and Manage Services
                    </Typography>
                </div>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Service Name"
                            name="serviceName"
                            value={modalData.serviceName}
                            onChange={handleInputChange}
                            error={serviceNameError}
                            helperText={serviceNameError ? "Only alphabetic characters allowed." : ""}
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Description"
                            name="description"
                            value={modalData.description}
                            onChange={handleInputChange}
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Service Price"
                            name="servicePrice"
                            value={modalData.servicePrice}
                            onChange={handleInputChange}
                            type="text"  // use text type but validate manually
                            error={priceError}  // if priceError is true, the TextField will show error styling
                            helperText={priceError ? "Please enter a valid number." : ""}  // error message
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid container item xs={12} sx={{justifyContent: 'center', alignItems: 'center'}}>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleAddService}>
                                Add Service
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
                            placeholder="Search by Service Name"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <Search/>
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
                        <TableHead style={{backgroundColor: "#C8C9CB"}}>
                            <TableRow>
                                <TableCell>Service Id</TableCell>
                                <TableCell>Service Name</TableCell>
                                <TableCell>Service Description</TableCell>
                                <TableCell>Service Price</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredServices.map((service, index) => (
                                <TableRow key={service.serviceId}>
                                    <TableCell>{service.serviceId}</TableCell>
                                    <TableCell>{service.serviceName}</TableCell>
                                    <TableCell>{service.description}</TableCell>
                                    <TableCell>{service.servicePrice}</TableCell>
                                    <TableCell>
                                        <IconButton color="primary"
                                                    onClick={() => handleEditService(service)}
                                        >
                                            <Edit/>
                                        </IconButton>
                                        <IconButton color="secondary"
                                                    onClick={() => {
                                                        setModalData(service); // Store the service you want to delete
                                                        handleDeleteConfirmationOpen();
                                                    }}
                                        >
                                            <Delete/>
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
                            Are you sure you want to delete this Service?
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDeleteConfirmationClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            onClick={() => handleDeleteService(modalData.serviceId)}
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
                            label="Service Id"
                            name="serviceId"
                            value={modalData.serviceId}
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            label="Service Name"
                            name="serviceName"
                            value={modalData.serviceName}
                            onChange={handleInputChangeUpdate} // <-- Corrected here
                            error={serviceNameError} // <-- Added
                            helperText={serviceNameError ? "Only alphabetic characters allowed." : ""}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Service Description"
                            name="description"
                            value={modalData.description}
                            onChange={handleInputChangeUpdate} // <-- Corrected here
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Service Price"
                            name="servicePrice"
                            value={modalData.servicePrice}
                            onChange={handleInputChangeUpdate} // <-- Corrected here
                            error={priceError} // <-- Added
                            helperText={priceError ? "Please enter a valid price." : ""} // <-- Added
                            fullWidth
                            margin="normal"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleUpdateModalClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleUpdateService} color="primary">
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
                {/*<Dialog*/}
                {/*    open={duplicateServiceError}*/}
                {/*    onClose={() => setDuplicateServiceError(false)}*/}
                {/*    fullWidth*/}
                {/*    maxWidth="xs" // You can adjust the size as needed*/}
                {/*>*/}
                {/*    <DialogTitle style={{backgroundColor: "#ff2222", color: "white"}}>*/}
                {/*        Duplicate Service Name*/}
                {/*    </DialogTitle>*/}
                {/*    <DialogContent>*/}
                {/*        <Typography variant="body1">*/}
                {/*            An service with the same name already exists.*/}
                {/*        </Typography>*/}
                {/*    </DialogContent>*/}
                {/*    <DialogActions>*/}
                {/*        <Button*/}
                {/*            onClick={() => setDuplicateServiceError(false)}*/}
                {/*            color="primary"*/}
                {/*            style={{color: "white"}}*/}
                {/*        >*/}
                {/*            OK*/}
                {/*        </Button>*/}
                {/*    </DialogActions>*/}
                {/*</Dialog>*/}

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

export default AddService;
