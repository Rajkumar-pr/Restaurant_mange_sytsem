
import React from 'react';
import { Card, CardContent, Typography, Box, Rating } from '@mui/material';

function RevCard({ rat, mess }) {
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', my: 2 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 3, padding: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom color="primary">
            User Review
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Typography variant="subtitle1">Rating:</Typography>
            <Rating value={rat} readOnly precision={0.5} />
            <Typography variant="body2" color="text.secondary">
              ({rat}/5)
            </Typography>
          </Box>

          <Typography variant="body1" color="text.primary">
            {mess}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default RevCard;

