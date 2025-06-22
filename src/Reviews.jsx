
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography, Grid } from '@mui/material';
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
    <Box sx={{ p: 4 }}>
      {data.length === 0 ? (
        <Box textAlign="center" mt={4}>
          <Typography variant="h6" gutterBottom>No Reviews Found</Typography>
          <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
            Go To Home
          </Button>
        </Box>
      ) : (
        <Box>
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
            What People Say
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {data.map((da, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <RevCard rat={da.rating} mess={da.message} />
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={4}>
            <Button variant="contained" component={Link} to="/" color="primary">
              Go To Home
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Reviews;

