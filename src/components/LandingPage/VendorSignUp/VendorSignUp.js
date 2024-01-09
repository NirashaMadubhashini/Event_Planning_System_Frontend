import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Typography, Toolbar, Avatar, Button, Paper, Grid, Container, FormControl, InputLabel, MenuItem, Select, Snackbar} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EventPro from "../../../assets/images/BlackLogo.png";
import useStyles from './styles';
import Input from './Input';
import AuthService from "../../../api/authService";
import Alert from '@mui/material/Alert';
const VendorSignUp = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [form, setForm] = useState({
        nic: '', name: '', address: '', contactNo: '', email: '', password: '', confirmPassword: '', serviceName: '', serviceType: '', portfolio: '', price: '', city: ''
    });
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const userRole = useSelector((state) => state.adminReducer.userRole);
    const [error, setError] = useState('');

    // Snackbar state
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');

    const handleShowPassword = () => setShowPassword(!showPassword);

    const switchMode = () => {
        setForm({
            nic: '', name: '', address: '', contactNo: '', email: '', password: '', confirmPassword: '', serviceName: '', serviceType: '', portfolio: '', price: '', city: ''
        });
        setIsSignup(!isSignup);
        setShowPassword(false);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (isSignup && form.password !== form.confirmPassword) {
            setError("Passwords don't match.");
            setSnackbarMessage("Passwords don't match.");
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            return;
        }

        try {
            if (isSignup) {
                const vendorData = {
                    // Assuming these are the fields expected in VendorDTO
                    vendorNic: form.nic,
                    vendorName: form.name,
                    address: form.address,
                    contactNo: form.contactNo,
                    email: form.email,
                    password: form.password,
                    serviceName: form.serviceName,
                    serviceType: form.serviceType,
                    portfolio: form.portfolio,
                    price: form.price,
                    city: form.city
                };
                const response = await AuthService.registerVendor(vendorData);
                setIsSignup(false);
                setError('');
                setSnackbarMessage('Vendor registration successful. Please log in.');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
            } else {
                const response = await AuthService.login(form.name, form.password);
                if (response.token) {
                    localStorage.setItem('jwtToken', response.token);
                    history.push('/vendorDashboard');
                    setError('');
                    setSnackbarMessage('Login successful');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                } else {
                    setError(response.message || 'Login failed');
                    setSnackbarMessage(response.message || 'Login failed');
                    setSnackbarSeverity('error');
                    setSnackbarOpen(true);
                }
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Authentication failed';
            setError(errorMessage);
            setSnackbarMessage(errorMessage);
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };


    const handleBlur = () => {
        setError(''); // Clear error message
    };

    return (
        <>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Toolbar className={classes.toolbar}>
                    <Link to="/" className={classes.brandContainer}>
                        <img component={Link} to="/" src={EventPro} alt="icon" height="60px" />
                    </Link>
                    <div style={{ flexGrow: 1 }}></div>
                    <Button component={Link} to="/" variant="contained" color="primary">Back</Button>
                </Toolbar>
            </AppBar>

            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={6}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {isSignup ? 'Sign up' : 'Sign in'}
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignup && (
                                <>
                                    <Input name="nic" label="NIC" handleChange={handleChange} autoFocus half />
                                    <Input name="address" label="Address" handleChange={handleChange} half />
                                    <Input name="contactNo" label="Contact No" handleChange={handleChange} />
                                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                                    <Input name="serviceName" label="Service Name" handleChange={handleChange} />
                                    <FormControl fullWidth className={classes.input}>
                                        <InputLabel>Service Type</InputLabel>
                                        <Select name="serviceType" value={form.serviceType} onChange={handleChange}>
                                            <MenuItem value="Venue rental">Venue Rental</MenuItem>
                                            <MenuItem value="Catering and Bar">Catering and Bar</MenuItem>
                                            <MenuItem value="Decorations and floral arrangements">Decorations and Floral Arrangements</MenuItem>
                                            <MenuItem value="Cake and desserts">Cake and Desserts</MenuItem>
                                            <MenuItem value="Photography and Videography">Photography and Videography</MenuItem>
                                            <MenuItem value="Entertainment">Entertainment</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Input name="portfolio" label="Portfolio" handleChange={handleChange} />
                                    <Input name="price" label="Price" handleChange={handleChange} />
                                    <Input name="city" label="City" handleChange={handleChange} />
                                </>
                            )}
                            <Input
                                name="name"
                                label="Name"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                            <Input
                                name="password"
                                label="Password"
                                handleChange={handleChange}
                                type={showPassword ? 'text' : 'password'}
                                handleShowPassword={handleShowPassword}
                                handleBlur={handleBlur}
                            />
                            {isSignup && (
                                <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                            )}
                            {!isSignup && error && <Typography color="error">{error}</Typography>}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>

                        <Grid container justify="center">
                            <Grid item>
                                <Typography>
                                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button className={classes.button} onClick={switchMode}>
                                    {isSignup ? 'Sign in' : 'Sign Up'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>

            {/* Snackbar for displaying alerts */}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
                <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default VendorSignUp;
