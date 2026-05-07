'use client';
import { motion } from 'framer-motion';

export default function Hub({ active }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '12px',
        boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
        zIndex: 10,
      }}
      animate={{
        rotate: 360,
        scale: active ? 1.1 : 1,
      }}
      transition={{
        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
        scale: { duration: 0.3 },
      }}
    >
      Skills
    </motion.div>
  );
}
