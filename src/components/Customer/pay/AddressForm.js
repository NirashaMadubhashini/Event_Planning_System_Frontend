import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';

export default function AddressForm() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    address1: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  const cities = ["Galle", "Colombo", "Matara"]; // Dummy data
  const states = ["Southern", "Western", "Sabaragamu"]; // Dummy data
  const countries = ["USA", "Canada", "Mexico"]; // Dummy data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const isNameValid = (name) => /^[a-zA-Z]+$/.test(name);

  const validateForm = () => {
    // Check for name validity and presence of all other fields
    return isNameValid(formData.firstName) &&
        isNameValid(formData.lastName) &&
        formData.address1 &&
        formData.city &&
        formData.state &&
        formData.zip &&
        formData.country;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form is valid and can be submitted.");
    } else {
      console.log("Form has errors. Please fill all fields correctly.");
    }
  };



  return (
      <React.Fragment>
        <Typography variant="h6" style={{ color: "#2a2a2a" }} gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={formData.firstName}
                onChange={handleInputChange}
                error={!isNameValid(formData.firstName) && formData.firstName !== ''}
                helperText={!isNameValid(formData.firstName) && "Only a-Z characters allowed"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                value={formData.lastName}
                onChange={handleInputChange}
                error={!isNameValid(formData.lastName) && formData.lastName !== ''}
                helperText={!isNameValid(formData.lastName) && "Only a-Z characters allowed"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
                required
                id="address1"
                name="address1"
                label="Address"
                fullWidth
                autoComplete="shipping address"
                variant="standard"
                value={formData.address1}
                onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
                options={cities}
                fullWidth
                renderInput={(params) => <TextField {...params} required label="City" variant="standard" />}
                onInputChange={(_, newValue) => setFormData(prev => ({ ...prev, city: newValue }))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
                options={states}
                fullWidth
                renderInput={(params) => <TextField {...params} label="State/Province/Region" variant="standard" />}
                onInputChange={(_, newValue) => setFormData(prev => ({ ...prev, state: newValue }))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
                value={formData.zip}
                onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
                options={countries}
                fullWidth
                renderInput={(params) => <TextField {...params} required label="Country" variant="standard" />}
                onInputChange={(_, newValue) => setFormData(prev => ({ ...prev, country: newValue }))}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="primary" name="saveAddress" value="yes" />}
                label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </React.Fragment>
  );
}
