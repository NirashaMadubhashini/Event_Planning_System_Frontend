import React, {useState, useEffect} from "react";
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
import {Link} from "react-router-dom";
import EventPro from "../../../assets/images/CorrectLogo.png";
import useStyles from "./style";
import service from "../../Customer/Services/Service";
import {useDispatch, useSelector} from 'react-redux';
import {addEvent, getAllEvents, deleteEvent, updateEvent} from '../../../actions/admin';
import Box from "@mui/material/Box";

const AddEvent = () => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.adminReducer.events);
    const [filteredEvents, setFilteredEvents] = useState(events);

    const [anchorEl, setAnchorEl] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        eventId: "",
        eventName: "",
        eventDescription: "",
        eventPrice: "",
    });
    const [priceError, setPriceError] = useState(false);
    const [duplicateEventError, setDuplicateEventError] = useState(false);
    const [eventNameError, setEventNameError] = useState(false);

    const classes = useStyles();

    // State variable to hold edited event data
    const [editedEvent, setEditedEvent] = useState(null);

    // Function to populate editedEvent and open update modal
    const handleEditEvent = (event) => {
        console.log("Edit event clicked:", event);
        setEditedEvent(event);
        setModalData(event);
        setUpdateModalOpen(true);
    };

    const handleUpdateEvent = () => {
        dispatch(updateEvent(modalData)).then(() => {
            dispatch(getAllEvents()); // Fetch the updated list of events
            setUpdateModalOpen(false); // Close the update modal
            setEditedEvent(null); // Reset the editedEvent state
        });
    };

    const handleSearchChange = (e) => {
        const searchInput = e.target.value.toLowerCase();
        const filtered = events.filter(event => event.eventName.toLowerCase().includes(searchInput));
        setFilteredEvents(filtered);
    };

    const handleClearFields = () => {
        setModalData({
            eventId: "",
            eventName: "",
            eventDescription: "",
            eventPrice: "",
        });
    };
    useEffect(() => {
        setFilteredEvents(events);
    }, [events]);


    const handleDeleteEvent = (eventId) => {
        dispatch(deleteEvent(eventId)).then(() => {
            dispatch(getAllEvents()); // Fetch the updated list of events
        });
        handleDeleteConfirmationClose();
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
        // Fetch events when the component mounts
        dispatch(getAllEvents());
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

    const handleUpdateModalClose = () => {
        setUpdateModalOpen(false);
    };
    const handleModalSubmit = () => {
        // Handle the submit logic here
        console.log(modalData);
        setUpdateModalOpen(false);
    };
    const handleInputChange = (event) => {
        const {name, value} = event.target;

        if (name === "eventName" && !/^[a-zA-Z\s]*$/.test(value)) {
            setEventNameError(true);
        } else {
            setEventNameError(false);
        }

        if (name === "eventPrice" && isNaN(value)) {
            setPriceError(true);
        } else {
            setPriceError(false);
        }

        setModalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleInputChangeUpdate = (event) => {
        const {name, value} = event.target;

        if (name === "eventName" && !/^[a-zA-Z\s]*$/.test(value)) {
            setEventNameError(true);
        } else {
            setEventNameError(false);
        }

        if (name === "eventPrice" && isNaN(value)) {
            setPriceError(true);
        } else {
            setPriceError(false);
        }

        setModalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddEvent = () => {
        const newEventName = modalData.eventName.trim(); // Remove leading and trailing spaces
        const isDuplicateEvent = events.some(event => event.eventName === newEventName);

        if (isDuplicateEvent) {
            setDuplicateEventError(true);
            return; // Stop the function if it's a duplicate event
        }

        const eventData = {
            eventName: modalData.eventName,
            eventDescription: modalData.eventDescription,
            eventPrice: modalData.eventPrice,
        };

        dispatch(addEvent(eventData)).then(() => {
            dispatch(getAllEvents());
        });

        setModalData({
            eventId: "",
            eventName: "",
            eventDescription: "",
            eventPrice: "",
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
                <div className={classes.addEventsSection}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        style={{color: "#3F51B5"}}
                    >
                        Add and Manage Events
                    </Typography>
                </div>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Event Name"
                            name="eventName"
                            value={modalData.eventName}
                            onChange={handleInputChange}
                            error={eventNameError}
                            helperText={eventNameError ? "Only alphabetic characters allowed." : ""}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Event Description"
                            name="eventDescription"
                            value={modalData.eventDescription}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Event Price"
                            name="eventPrice"
                            value={modalData.eventPrice}
                            onChange={handleInputChange}
                            type="text"  // use text type but validate manually
                            error={priceError}
                            helperText={priceError ? "Please enter a valid number." : ""}
                        />
                    </Grid>
                    <Grid container item xs={12} sx={{justifyContent: 'center', alignItems: 'center'}}>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleAddEvent}>
                                Add Event
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
                            placeholder="Search by Event Name"
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
                        <TableHead style={{backgroundColor: "#C8C9CB"}}>
                            <TableRow>
                                <TableCell>Event Id</TableCell>
                                <TableCell>Event Name</TableCell>
                                <TableCell>Event Description</TableCell>
                                <TableCell>Event Price</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredEvents.map((event, index) => (
                                <TableRow key={event.eventId}>
                                    <TableCell>{event.eventId}</TableCell>
                                    <TableCell>{event.eventName}</TableCell>
                                    <TableCell>{event.eventDescription}</TableCell>
                                    <TableCell>{event.eventPrice}</TableCell>
                                    <TableCell>
                                        <IconButton color="primary"
                                                    onClick={() => handleEditEvent(event)}
                                        >
                                            <Edit/>
                                        </IconButton>
                                        <IconButton color="secondary"
                                            onClick={() => {
                                                setModalData(event); // Store the event you want to delete
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
                            Are you sure you want to delete this Event?
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDeleteConfirmationClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            onClick={() => handleDeleteEvent(modalData.eventId)}
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
                            label="Event Id"
                            name="eventId"
                            value={modalData.eventId}
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Event Name"
                            name="eventName"
                            value={modalData.eventName}
                            onChange={handleInputChangeUpdate} // <-- Corrected here
                            error={eventNameError} // <-- Added
                            helperText={eventNameError ? "Only alphabetic characters allowed." : ""}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Event Description"
                            name="eventDescription"
                            value={modalData.eventDescription}
                            onChange={handleInputChangeUpdate} // <-- Corrected here
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Event Price"
                            name="eventPrice"
                            value={modalData.eventPrice}
                            onChange={handleInputChangeUpdate}
                            error={priceError} // <-- Added
                            helperText={priceError ? "Please enter a valid price." : ""} // <-- Added
                            fullWidth
                            margin="normal"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleUpdateModalClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleUpdateEvent} color="primary">
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={duplicateEventError}
                    onClose={() => setDuplicateEventError(false)}
                    fullWidth
                    maxWidth="xs" // You can adjust the size as needed
                >
                    <DialogTitle style={{backgroundColor: "#ff2222", color: "white"}}>
                        Duplicate Event Name
                    </DialogTitle>
                    <DialogContent>
                        <Typography variant="body1">
                            An event with the same name already exists.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => setDuplicateEventError(false)}
                            color="primary"
                            style={{color: "white"}}
                        >
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>

            </Container>
        </Container>
    );
};

export default AddEvent;
