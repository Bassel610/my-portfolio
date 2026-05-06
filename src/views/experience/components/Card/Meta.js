'use client';
import { Box, Typography } from '@mui/material';
import { CalendarToday, LocationOn } from '@mui/icons-material';

export default function Meta({ period, location }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mt: 1,
        '& > *': { mr: 1.5, display: 'flex', alignItems: 'center' },
      }}
    >
      <Typography variant="body2" color="text.secondary">
        <CalendarToday fontSize="inherit" sx={{ mr: 0.5, fontSize: 16 }} />
        {period}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <LocationOn fontSize="inherit" sx={{ mr: 0.5, fontSize: 16 }} />
        {location}
      </Typography>
    </Box>
  );
}
