import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Box,
  Typography,
  Grid,
  Container,
} from '@mui/material';
import RevCard from './RevCard';

function Reviews() {
  const [data, setData] = useState([]);

  const getReviews = async () => {
    try {
      const response = await fetch("https://backend-restaurant-server.onrender.com/api/feedback");
      const res = await response.json();
      setData(res.feedback);
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <Box sx={{ backgroundColor: '#fdfdfd', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={4}
          sx={{
            color: '#333',
            borderBottom: '2px solid #eee',
            pb: 2,
            fontFamily: 'Segoe UI',
          }}
        >
          🗣️ What Our Customers Say
        </Typography>

        {data.length === 0 ? (
          <Box textAlign="center" mt={6}>
            <Typography variant="h6" gutterBottom>
              No Reviews Found
            </Typography>
            <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
              Go To Home
            </Button>
          </Box>
        ) : (
          <>
            <Grid container spacing={4} justifyContent="center">
              {data.map((da, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <RevCard rat={da.rating} mess={da.message} />
                </Grid>
              ))}
            </Grid>

            <Box textAlign="center" mt={5}>
              <Button
                variant="contained"
                component={Link}
                to="/"
                color="primary"
                size="large"
              >
                Go To Home
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default Reviews;
