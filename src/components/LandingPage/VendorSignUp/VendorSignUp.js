import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AppBar, Typography, Toolbar, Avatar, Button, Paper, Grid, Container, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EventPro from "../../../assets/images/BlackLogo.png";
import useStyles from './styles';
import Input from './Input';
import AuthService from "../../../api/authService";

const VendorSignUp = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [user, setUser] = useState(null);
    const [form, setForm] = useState({
        nic: '', name: '', address: '', contactNo: '', email: '', password: '', confirmPassword: '', serviceName: '', serviceType: '', portfolio: '', price: '', city: ''
    });
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const userRole = useSelector((state) => state.adminReducer.userRole);
    const [error, setError] = useState('');
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
        setError(''); // Clear any existing errors

        if (isSignup && form.password !== form.confirmPassword) {
            setError("Passwords don't match.");
            return;
        }

        try {
            if (isSignup) {
                const userData = {
                    username: form.name,
                    password: form.password,
                    roles: [userRole]
                };
                const response = await AuthService.register(userData);
                setIsSignup(false);
                setError('');
                alert('Registration successful. Please log in.');
            } else {
                const response = await AuthService.login(form.name, form.password);
                if (response.token) {
                    localStorage.setItem('jwtToken', response.token);
                    history.push('/vendorDashboard');
                    setError('');
                } else {
                    setError(response.message || 'Login failed');
                    alert(response.message || 'Login failed');

                }
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Authentication failed';
            alert(error.response?.data?.message || 'Authentication failed')
            setError(errorMessage);
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
                                    <Input name="contactNo" label="ContactNo" handleChange={handleChange}  />
                                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                                    <Input name="serviceName" label="Service Name" handleChange={handleChange} />
                                    <FormControl fullWidth className={classes.input}>
                                        <InputLabel>Service Type</InputLabel>
                                        <Select name="serviceType" value={form.serviceType} onChange={handleChange}>
                                            <MenuItem value="serviceType1">Venue Rental</MenuItem>
                                            <MenuItem value="serviceType2">Catering and Bar</MenuItem>
                                            <MenuItem value="serviceType3">Decorations and Floral Arrangements</MenuItem>
                                            <MenuItem value="serviceType4">Cake and Desserts</MenuItem>
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
                                        handleBlur={handleBlur} // Add this

                                    />
                                    <Input
                                        name="password"
                                        label="Password"
                                        handleChange={handleChange}
                                        type={showPassword ? 'text' : 'password'}
                                        handleShowPassword={handleShowPassword}
                                        handleBlur={handleBlur} // Add this

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
        </>
    );
};

export default VendorSignUp;
