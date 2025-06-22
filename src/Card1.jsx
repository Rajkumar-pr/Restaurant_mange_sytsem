<<<<<<< HEAD
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

function Product({ name, description, image }) {
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

       
      </CardContent>
   
    </Card>
  );
}

export default Product;
=======
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

function Product({ name, description, image }) {
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

       
      </CardContent>
   
    </Card>
  );
}

export default Product;
>>>>>>> b2923ed75085a17916702d9fd8ef0d4092383c4b
