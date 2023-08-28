import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, Paper, Grid, Container, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import EventPro from "../../../assets/images/BlackLogo.png";
import useStyles from './styles';
import Input from './Input';

const VendorSignUp = () => {
    const classes = useStyles();
    const history = useHistory();

    const [form, setForm] = useState({
        nic: '', name: '', address: '', contactNo: '', email: '', password: '', confirmPassword: '',
        serviceName: '', serviceType: '', portfolio: '', price: '', city: ''
    });
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    const switchMode = () => {
        setForm({
            nic: '', name: '', address: '', contactNo: '', email: '', password: '', confirmPassword: '',
            serviceName: '', serviceType: '', portfolio: '', price: '', city: ''
        });
        setIsSignup(!isSignup);
        setShowPassword(false);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            console.log('Vendor signed up:', form);
            history.push('/');
        } else {
            console.log('Vendor signed in:', form);
            history.push('/');
        }
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
                                    <Input name="name" label="Name" handleChange={handleChange} half />
                                    <Input name="address" label="Address" handleChange={handleChange} half />
                                    <Input name="contactNo" label="ContactNo" handleChange={handleChange} half />
                                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                                    <Typography variant="h6" className={classes.businessDetails}>Business Details</Typography>
                                    <Input name="serviceName" label="Service Name" handleChange={handleChange} />
                                    <FormControl fullWidth>
                                        <InputLabel id="serviceType-label">Service Type</InputLabel>
                                        <Select
                                            labelId="serviceType-label"
                                            id="serviceType"
                                            name="serviceType"
                                            value={form.serviceType}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="Type1">Type1</MenuItem>
                                            <MenuItem value="Type2">Type2</MenuItem>
                                            <MenuItem value="Type3">Type3</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Input name="portfolio" label="Portfolio" handleChange={handleChange} />
                                    <Input name="price" label="Price" handleChange={handleChange} />
                                    <Input name="city" label="City" handleChange={handleChange} />
                                </>
                            )}
                            {!isSignup && (
                                <>
                                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                                    <Input
                                        name="password"
                                        label="Password"
                                        handleChange={handleChange}
                                        type={showPassword ? 'text' : 'password'}
                                        handleShowPassword={handleShowPassword}
                                    />
                                </>
                            )}
                            {isSignup && (
                                <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                            )}
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
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
