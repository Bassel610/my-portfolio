'use client';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../Card';
import Arrows from './Arrows';
import Dots from './Dots';
import { useMobileSlider } from '../../hooks';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

export default function MobileSlider({ projects }) {
  const total = projects.length;
  const {
    currentIndex,
    direction,
    isDragging,
    goNext,
    goPrev,
    goTo,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useMobileSlider(total);

  const current = projects[currentIndex];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        touchAction: 'pan-y pinch-zoom',
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              overflow: 'auto',
              pointerEvents: isDragging ? 'none' : 'auto',
            }}
          >
            <Card {...current} />
          </motion.div>
        </AnimatePresence>
      </Box>

      <Arrows
        canPrev={currentIndex > 0}
        canNext={currentIndex < total - 1}
        onPrev={goPrev}
        onNext={goNext}
      />

      <Dots count={total} currentIndex={currentIndex} onSelect={goTo} />

      {currentIndex === 0 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: 60,
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.85rem',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          ← Swipe to navigate →
        </motion.div>
      )}
    </Box>
  );
}
