import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  const [isVisible, setIsVisible] = useState(true);
  const totalAmount = products.reduce((acc, product) => acc + parseFloat(product.price.substring(1)), 0);

  if (!isVisible) {
    return (
        <Button variant="contained" color="primary" onClick={() => setIsVisible(true)}>
          Show Order Summary
        </Button>
    );
  }

  return (
      <div>
        <Typography variant="h4" gutterBottom>
          Order Summary
        </Typography>
        <List disablePadding>
          {products.map((product) => (
              <ListItem key={product.name}>
                <ListItemText primary={product.name} secondary={product.desc} />
                <Typography variant="body1">{product.price}</Typography>
              </ListItem>
          ))}
          <ListItem>
            <ListItemText primary="Total" />
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              ${totalAmount.toFixed(2)}
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h5" gutterBottom>
          Shipping Details
        </Typography>
        <Typography gutterBottom>{addresses.join(', ')}</Typography>
        <Typography variant="h5" gutterBottom>
          Payment Details
        </Typography>
        <List disablePadding>
          {payments.map((payment) => (
              <ListItem key={payment.name}>
                <ListItemText primary={payment.name} />
                <Typography variant="body1">{payment.detail}</Typography>
              </ListItem>
          ))}
        </List>
      </div>
  );
}
