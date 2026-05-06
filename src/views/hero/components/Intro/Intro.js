'use client';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Heading from './Heading';
import Typing from './Typing';
import Tagline from './Tagline';
import { containerVariants } from './variants';

export default function Intro() {
  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', md: '33vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, sm: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        flex: { xs: 'none', md: 1 },
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: '100%' }}
      >
        <Heading />
        <Typing />
        <Tagline />
      </motion.div>
    </Box>
  );
}
