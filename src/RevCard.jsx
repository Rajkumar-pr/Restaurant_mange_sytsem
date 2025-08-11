import React from 'react';
import { Card, CardContent, Typography, Box, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function RevCard({ rat, mess }) {
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', my: 2 }}>
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: 4,
          backgroundColor: '#fffefc',
          border: '1px solid #e0e0e0',
          p: 2,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 600 }}>
            ⭐ User Review
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <Rating value={rat} readOnly precision={0.5} />
            <Typography variant="body2" color="text.secondary">
              ({rat}/5)
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontStyle: 'italic',
              color: '#555',
              position: 'relative',
              pl: 2,
              '&::before': {
                content: 'open-quote',
                fontSize: '2rem',
                position: 'absolute',
                left: 0,
                top: -10,
                color: '#bbb',
              },
            }}
          >
            {mess}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default RevCard;
