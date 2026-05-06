'use client';
import { Box, Typography, Chip } from '@mui/material';

export default function Header({ title, company, isCurrent }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6" fontWeight="600" ml={2}>
        {title} • {company}
      </Typography>
      {isCurrent && (
        <Chip label="Current" size="small" color="success" sx={{ ml: 1 }} />
      )}
    </Box>
  );
}
