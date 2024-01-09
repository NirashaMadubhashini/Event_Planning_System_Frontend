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


const VendorAddBusiness = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        businessId: "",
        businessName: "",
        businessDescription: "",
        businessType: "",

    });
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };
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

    const handleUpdateModalOpen = (service) => {
        setModalData(service);
        setUpdateModalOpen(true);
    };

    const handleUpdateModalClose = () => {
        setUpdateModalOpen(false);
    };
    const handleModalSubmit = () => {
        // Handle the submit logic here
        console.log(modalData);
        console.log(image); // The selected image file
        setUpdateModalOpen(false);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setModalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const businessesData = [
        {
            businessId: "B001",
            businessName: "Hotel",
            businessDescription: "Hotels and halls for functions",
            businessType: "Large Business",
            // businessImage:""
        },
        {
            businessId: "B002",
            businessName: "Saloon",
            businessDescription: "Beauty service for customers",
            businessType: "Small Business",
        },
        {
            businessId: "B003",
            businessName: "Saloon",
            businessDescription: "Beauty service for customers",
            businessType: "Small Business",
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
                            {/*<Typography*/}
                            {/*    component={Link}*/}
                            {/*    to="/vendorProfile"*/}
                            {/*    className={classes.appBarButton}*/}
                            {/*    onClick={() => handleCategoryClick("Profile")}*/}
                            {/*    style={{*/}
                            {/*        color: clickedCategory === "Profile" ? "#F50057" : "",*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    Profile*/}
                            {/*</Typography>*/}
                            {/*<Typography*/}
                            {/*    component={Link}*/}
                            {/*    to="/vendorAddPackages"*/}
                            {/*    className={classes.appBarButton}*/}
                            {/*    onClick={() => handleCategoryClick("Packages")}*/}
                            {/*    style={{*/}
                            {/*        color: clickedCategory === "Packages" ? "#F50057" : "",*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    Packages*/}
                            {/*</Typography>*/}
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
                <div className={classes.addBusinessesSection}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        style={{ color: "#3F51B5" }}
                    >
                        Add and Manage Business
                    </Typography>
                </div>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Business Name"
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Business Description"
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Business Type"
                            // Add necessary onChange and value properties
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        type="file"
                        fullWidth
                        variant="outlined"
                        // label="Business Image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange} // Add the handleImageChange method for image upload
                        margin="normal"
                    />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                            Add Business
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
                                <TableCell>Business Id</TableCell>
                                <TableCell>Business Name</TableCell>
                                <TableCell>Business Description</TableCell>
                                <TableCell>Business Type</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {businessesData.map((business, index) => (
                                <TableRow key={index}>
                                    <TableCell>{business.businessId}</TableCell>
                                    <TableCell>{business.businessName}</TableCell>
                                    <TableCell>{business.businessDescription}</TableCell>
                                    <TableCell>{business.businessType}</TableCell>
                                    <TableCell>
                                        {business.image && <img src={business.image} alt="Business" height="50px" />}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton color="primary"
                                                    onClick={() => handleUpdateModalOpen(business)}
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
                            Are you sure you want to delete this Business?
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
                    <DialogTitle>Update Business</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Business Id"
                            name="businessId"
                            value={modalData.businessId}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            label="Business Name"
                            name="businessName"
                            value={modalData.businessName}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Business Description"
                            name="businessDescription"
                            value={modalData.businessDescription}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Business Type"
                            name="businessType"
                            value={modalData.businessType}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange} // Add the handleImageChange method for image upload
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

export default VendorAddBusiness;
