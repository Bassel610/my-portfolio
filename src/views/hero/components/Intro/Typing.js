'use client';
import { useEffect, useState } from 'react';
import { Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { TypingAnimation } from '@/atoms';
import { TYPING_TEXTS } from '@/constants/site';
import { itemVariants } from './variants';

export default function Typing() {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const check = () =>
      setIsMobile(window.innerWidth < theme.breakpoints.values.sm);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [theme.breakpoints.values.sm]);

  return (
    <motion.div variants={itemVariants}>
      <Typography
        variant={isMobile ? 'h6' : 'h4'}
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
