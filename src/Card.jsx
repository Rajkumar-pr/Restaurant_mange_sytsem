import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
  Box
} from '@mui/material';

function ProductCard({ name, description, image, price, onAddtoCart, onRemoveCard }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
      sx={{
        width: 320,
        borderRadius: 4,
        boxShadow: 4,
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 8
        },
        backgroundColor: '#ffffff'
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
        sx={{
          objectFit: 'cover',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" sx={{ fontWeight: 600 }}>
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {isExpanded ? description : `${description.slice(0, 100)}...`}
        </Typography>

        <Button onClick={handleReadMore} size="small" sx={{ mt: 1 }}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </Button>

        <Typography variant="h6" color="primary" sx={{ mt: 1, fontWeight: 'bold' }}>
          ₹{price}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button
          variant="contained"
          color="success"
          onClick={onAddtoCart}
          size="small"
          sx={{ borderRadius: 2, fontWeight: 500 }}
        >
          Add to Cart
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={onRemoveCard}
          size="small"
          sx={{ borderRadius: 2, fontWeight: 500 }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
