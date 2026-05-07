'use client';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const navBtnSx = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: 8,
  transform: 'translateY(-50%)',
  background: 'rgba(255,255,255,0.88)',
  color: '#667eea',
  zIndex: 2,
  '&:hover': { background: '#fff', color: '#764ba2' },
});

export default function Main({ src, alt, canNav, onPrev, onNext }) {
  return (
    <Box
      sx={{
        position: 'relative',
        flex: 1,
        minHeight: 0,
        borderRadius: '16px',
        overflow: 'hidden',
        border: '2px solid rgba(102,126,234,0.3)',
        boxShadow: '0 4px 20px rgba(102,126,234,0.2)',
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onError={(e) => {
            e.target.src = '/images/project-placeholder.png';
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            display: 'block',
            userSelect: 'none',
            WebkitUserDrag: 'none',
            pointerEvents: 'none',
          }}
        />
      </AnimatePresence>

      {canNav && (
        <>
          <IconButton
            onClick={onPrev}
            aria-label="Previous image"
            size="small"
            sx={navBtnSx('left')}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={onNext}
            aria-label="Next image"
            size="small"
            sx={navBtnSx('right')}
          >
            <ChevronRight />
          </IconButton>
        </>
      )}
    </Box>
  );
}
