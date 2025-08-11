import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  CardMedia,
  CardActions,
  IconButton,
  Stack,
} from '@mui/material';
import { AddItem, removeItem } from './state/counter';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function TotalBill() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.count.cards);
  const total = useSelector((state) => state.count.tot);

  const handleConfirm = async () => {
    const user = sessionStorage.getItem('ud');
    if (!user) {
      alert('User not found. Please login again.');
      navigate('/signup');
      return;
    }

    try {
      const res = await fetch('https://backend-restaurant-server.onrender.com/order/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems, total: total, user }),
      });

      if (res.ok) {
        alert('Order placed successfully!');
        navigate('/Feedback');
      } else {
        alert('Failed to place order.');
      }
    } catch (error) {
      alert('Error placing order: ' + error);
    }
  };

  // Group items by ID and count quantity
  const groupedItems = cartItems.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += 1;
    } else {
      acc[item.id] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});

  const uniqueItems = Object.values(groupedItems);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        🧾 Your Total Bill
      </Typography>

      <Box textAlign="center" mt={2}>
        <Button variant="outlined" onClick={() => navigate('/menu')}>
          Go to Menu
        </Button>
      </Box>

      {uniqueItems.length === 0 ? (
        <Typography variant="h6" textAlign="center" mt={4}>
          No items in your cart.
        </Typography>
      ) : (
        <Grid container spacing={3} justifyContent="center" mt={3}>
          {uniqueItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: 2, boxShadow: 5 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image || 'https://via.placeholder.com/300x180.png?text=No+Image'}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ₹{item.price}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                    <Typography variant="body2">Quantity:</Typography>
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography>{item.quantity}</Typography>
                    <IconButton
                      color="primary"
                      size="small"
                      onClick={() => dispatch(AddItem(item))}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Box textAlign="center" mt={5}>
        <Typography variant="h5" mb={2}>
          Total Amount: ₹{total}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          Confirm & Place Order
        </Button>
      </Box>
    </Box>
  );
}

export default TotalBill;
