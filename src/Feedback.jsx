import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Rating,
  TextField,
  Button,
  Alert,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

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
        <Alert severity="error">Please login or sign up to give feedback.</Alert>
      </Box>
    );
  }

  return (
    <Card
      sx={{
        maxWidth: 550,
        mx: 'auto',
        my: 8,
        p: 3,
        borderRadius: 4,
        boxShadow: 6
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <EmojiEmotionsIcon color="primary" />
          <Typography variant="h5" fontWeight={600}>
            Share Your Experience
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <form onSubmit={handleSubmit}>
          <Typography sx={{ mb: 1 }}>Rate us:</Typography>

          <Rating
            name="feedback-rating"
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
            size="large"
          />

          <TextField
            label="Your message"
            multiline
            rows={4}
            fullWidth
            required
            sx={{ mt: 3 }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {!submitted && (
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
              Submit Feedback
            </Button>
          )}
        </form>

        {submitted && (
          <>
            <Alert severity="success" sx={{ mt: 3 }}>
              Thank you for your feedback!
            </Alert>
            <Button
              component={Link}
              to="/"
              variant="contained"
              sx={{ mt: 2 }}
              fullWidth
              color="success"
            >
              Go to Home
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Feedback;



