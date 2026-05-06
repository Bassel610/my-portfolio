'use client'
import { Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CompactSkills from '../../animations/CompactSkills';
import GradientText from '../../ui/GradientText';
import TiltCard from '../../ui/TiltCard';
import { SITE } from '@/constants/site';

export default function AboutSection() {
  return (
    <Box sx={{
      position: 'relative',
      height: { xs: 'auto', md: 'calc(100vh - 18px)' },
      minHeight: { xs: '100vh', md: 'auto' },
      width: '100%',
      maxWidth: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textAlign: 'center',
      px: { xs: 2, sm: 3, md: 4 },
      py: { xs: 4, md: 0 },
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      {/* Background overlay */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
      }} />

      {/* Content */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '800px',
        width: '100%'
      }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: { xs: 2, md: 3 },
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            textShadow: '0 2px 10px rgba(0,0,0,0.7)'
          }}
        >
          <GradientText variant="primary" animate={true}>
            {SITE.name}
          </GradientText>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            mb: { xs: 3, md: 4 },
            textShadow: '0 1px 5px rgba(0,0,0,0.5)',
            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' }
          }}
        >
          <GradientText mb="5px" variant="accent" animate={true}>
            {SITE.role}
          </GradientText>
        </Typography>

        <Typography
          paragraph
          sx={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            mb: 4,
            textShadow: '0 1px 3px rgba(0,0,0,0.4)'
          }}
        >
          {SITE.bio}
        </Typography>

        {/* Compact Skills Display */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          mt: 2
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <CompactSkills />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}