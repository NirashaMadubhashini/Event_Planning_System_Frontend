import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
  const [cardName, setCardName] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');
  const [expDate, setExpDate] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [errors, setErrors] = React.useState({
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });

  const validateCardName = (value) => {
    if (!/^[A-Za-z\s]+$/.test(value)) {
      return 'Name should only contain letters';
    }
    return '';
  };

  const validateCardNumber = (value) => {
    if (!/^[0-9]{16}$/.test(value)) {
      return 'Card number should be 16 digits';
    }
    return '';
  };

  const validateExpDate = (value) => {
    if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(value)) {
      return 'Expiry date should be in the format MM/YY';
    }
    return '';
  };

  const validateCvv = (value) => {
    if (!/^[0-9]{3}$/.test(value)) {
      return 'CVV should be 3 digits';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let error = '';
    switch (id) {
      case 'cardName':
        error = validateCardName(value);
        setCardName(value);
        break;
      case 'cardNumber':
        error = validateCardNumber(value);
        setCardNumber(value);
        break;
      case 'expDate':
        error = validateExpDate(value);
        setExpDate(value);
        break;
      case 'cvv':
        error = validateCvv(value);
        setCvv(value);
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [id]: error }));
  };

  const isFormValid = !Object.values(errors).some((error) => error);

  const processPayment = (cardDetails) => {
    // In a real-world scenario, you would use an API call to process the payment.
    // This is a dummy function that simulates payment processing.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (cardDetails.cardNumber === "1234567812345678") {
          reject("Payment failed: Invalid card number.");
        } else {
          resolve("Payment successful.");
        }
      }, 2000);
    });
  };

  return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
                required
                id="cardName"
                label="Name on card"
                value={cardName}
                onChange={handleInputChange}
                error={!!errors.cardName}
                helperText={errors.cardName}
                fullWidth
                autoComplete="cc-name"
                variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
                required
                id="cardNumber"
                label="Card number"
                value={cardNumber}
                onChange={handleInputChange}
                error={!!errors.cardNumber}
                helperText={errors.cardNumber}
                fullWidth
                autoComplete="cc-number"
                variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
                required
                id="expDate"
                label="Expiry date"
                value={expDate}
                onChange={handleInputChange}
                error={!!errors.expDate}
                helperText={errors.expDate}
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
                required
                id="cvv"
                label="CVV"
                value={cvv}
                onChange={handleInputChange}
                error={!!errors.cvv}
                helperText={errors.cvv || "Last three digits on signature strip"}
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="primary" name="saveCard" value="yes" />}
                label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>
      </React.Fragment>
  );
}
