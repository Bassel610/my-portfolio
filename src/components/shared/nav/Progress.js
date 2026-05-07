'use client';
import { motion } from 'framer-motion';

export default function Progress({ activeIndex, totalPages }) {
  return (
    <div
      style={{
        width: '60px',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '2px',
        overflow: 'hidden',
        marginLeft: '10px',
      }}
    >
      <motion.div
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #00d4ff, #ff00ff)',
          borderRadius: '2px',
        }}
        initial={{ width: '0%' }}
        animate={{ width: `${((activeIndex + 1) / totalPages) * 100}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
}
