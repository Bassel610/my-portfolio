'use client';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { SITE } from '@/constants/site';
import { itemVariants } from './variants';

export default function Tagline() {
  return (
    <motion.div variants={itemVariants}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          color: 'rgba(224, 211, 255, 0.8)',
          mb: 4,
          maxWidth: { xs: '100%', sm: '500px', md: '600px' },
          mx: 'auto',
          lineHeight: 1.6,
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
          px: { xs: 1, sm: 0 },
        }}
      >
        {SITE.taglinePrefix}{' '}
        <motion.span
          style={{ color: '#FF9FDB', fontWeight: 600 }}
          whileHover={{ scale: 1.05 }}
        >
          {SITE.tagline}
        </motion.span>
        .
      </Typography>
    </motion.div>
  );
}
