'use client';
import { Box, Typography } from '@mui/material';

export default function Bullets({ items }) {
  return (
    <Box
      component="ul"
      sx={{ pl: 2.5, mt: 2, mb: 0, '& li': { mb: 1 } }}
    >
      {items.map((bullet, i) => (
        <Typography
          key={i}
          component="li"
          variant="body1"
          color="text.secondary"
        >
          {bullet}
        </Typography>
      ))}
    </Box>
  );
}
