<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Box, Typography, Rating, TextField, Button, Alert } from '@mui/material';
import { Link } from "react-router-dom"; // ✅ correct import
import { blue } from '@mui/material/colors';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ud, setUd] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    const uid = sessionStorage.getItem("ud");

    if (!username || !uid) {
      setShowError(true);
    } else {
      setUd(uid);
      setShowError(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://backend-restaurant-server.onrender.com/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating, message, userId: ud })
    });

    if (response.ok) {
      setSubmitted(true);
      setMessage('');
      setRating(0);
    } else {
      alert("Failed to post feedback. Try again.");
    }
  };

  if (showError) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <Typography variant="h6" color="error">
          Please login or sign up to give feedback.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        margin: '40px auto',
        padding: 3,
        border: '1px solid #ddd',
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        We value your feedback
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Rate your experience:
      </Typography>

      <Rating
        name="feedback-rating"
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
        size="large"
      />

      <TextField
        label="Your message"
        multiline
        fullWidth
        required
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ my: 3 }}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit Feedback
      </Button>

      {submitted && (
        <>
          <Alert severity="success" sx={{ mt: 2 }}>
            Thank you for your feedback!
          </Alert>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button sx={{ mt: 2, backgroundColor: blue[500] }} variant="contained" fullWidth>
              Go to Homepage
            </Button>
          </Link>
        </>
      )}
    </Box>
  );
};

export default Feedback;



