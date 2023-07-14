import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyles from './styles';
import Input from './Input';

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
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      // Dummy signup logic
      console.log('User signed up:', form);
      history.push('/');
    } else {
      // Dummy signin logic
      console.log('User signed in:', form);
      history.push('/');
    }
  };

  return (
      <Container component="main" maxWidth="sm">
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
        </Paper>
      </Container>
  );
};

export default SignUp;
