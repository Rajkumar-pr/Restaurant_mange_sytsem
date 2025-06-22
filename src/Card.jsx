
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

function ProductCard({ name, description, image, price,onAddtoCart,onRemoveCard }) {
  // State to manage the visibility of the full description
  const [isExpanded, setIsExpanded] = useState(false);

 
  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card sx={{ width: 300, margin: 2 }}>
      <img src={image} alt={name} style={{ height: 200, width: '100%', objectFit: 'cover' }} />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {isExpanded ? description : `${description.substring(0, 100)}...`}
        </Typography>

        {/* Read More button */}
        <Button onClick={handleReadMore} color="primary">
          {isExpanded ? 'Read Less' : 'Read More'}
        </Button>

        <Typography variant="h6" color="green" mt={1}>
          ${price}
        </Typography>
      </CardContent>
   <CardActions>
    <Button onClick={onAddtoCart}>
        Add To Cart
    </Button>
    <Button onClick={onRemoveCard}>
      Remove From Cart
    </Button>
   </CardActions>
    </Card>
  );
}

export default ProductCard;
   
