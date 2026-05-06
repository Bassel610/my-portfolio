'use client';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import CompactSkills from '@/component/animations/CompactSkills';

export default function Skills() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        mt: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <CompactSkills />
      </motion.div>
    </Box>
  );
}
