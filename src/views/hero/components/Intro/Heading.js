'use client';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { GradientText } from '@/atoms';
import { SITE } from '@/constants/site';
import { itemVariants } from './variants';

export default function Heading() {
  return (
    <motion.div variants={itemVariants}>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: '#E0D3FF',
          mb: 2,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
        }}
      >
        {SITE.greeting}{' '}
        <GradientText variant="cyber" animate={true}>
          {SITE.name}
        </GradientText>
      </Typography>
    </motion.div>
  );
}
