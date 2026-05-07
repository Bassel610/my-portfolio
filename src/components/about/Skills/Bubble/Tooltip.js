'use client';
import { motion } from 'framer-motion';

export default function Tooltip({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        position: 'absolute',
        top: '-60px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '8px',
        fontSize: '12px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        zIndex: 20,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${skill.color}66`,
      }}
    >
      {skill.name}: {skill.level}%
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
          borderTop: '6px solid rgba(0, 0, 0, 0.9)',
        }}
      />
    </motion.div>
  );
}
