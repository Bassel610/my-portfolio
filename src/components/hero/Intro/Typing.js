'use client';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { TypingAnimation } from '@/atoms';
import { TYPING_TEXTS } from '@/constants/site';
import { itemVariants } from './variants';

export default function Typing() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <motion.div variants={itemVariants}>
      <Typography
        variant={isSmall ? 'h6' : 'h4'}
        component="h2"
        sx={{
          fontWeight: 400,
          color: '#E0D3FF',
          mb: 2,
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        I&apos;m a{' '}
        <TypingAnimation
          texts={TYPING_TEXTS}
          speed={140}
          deleteSpeed={70}
          delayBetweenTexts={2800}
          style={{ color: '#00d4ff', fontWeight: 600 }}
        />
      </Typography>
    </motion.div>
  );
}
