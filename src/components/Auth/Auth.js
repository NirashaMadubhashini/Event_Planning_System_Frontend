import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import AuthService from "../../api/authService";
import Alert from "@material-ui/lab/Alert";

const initialState = {
  nic: '',
  name: '',
  address: '',
  contactNo: '',
  email: '',
  type: '',
  password: '',
  confirmPassword: ''
};

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
    setError('');
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const closeSnackbar = () => setError('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup && form.password !== form.confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    try {
      if (isSignup) {
        await AuthService.register(form);
        history.push('/'); // Redirect after successful signup
      } else {
        await AuthService.login(form.email, form.password);
        history.push('/'); // Redirect after successful login
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Authentication failed');
    }
  };

  return (
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
                    <Grid item xs={12}>
                      <FormControl fullWidth >
                        <InputLabel>Type</InputLabel>
                        <Select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                        >
                          <MenuItem value="type1">Type 1</MenuItem>
                          <MenuItem value="type2">Type 2</MenuItem>
                          <MenuItem value="type3">Type 3</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
                  handleShowPassword={handleShowPassword}
              />
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
          {error && (
              <Snackbar open={!!error} autoHideDuration={6000} onClose={closeSnackbar}>
                <Alert onClose={closeSnackbar} severity="error">
                  {error}
                </Alert>
              </Snackbar>
          )}
        </Paper>
      </Container>
  );
};

export default SignUp;
