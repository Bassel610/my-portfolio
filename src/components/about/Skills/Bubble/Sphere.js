'use client';
import { motion } from 'framer-motion';

export default function Sphere({ skill, isActive }) {
  return (
    <motion.div
      style={{
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${skill.color}, ${skill.color}88)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: skill.color === '#ffffff' ? '#000' : '#fff',
        fontWeight: 'bold',
        fontSize: '10px',
        textAlign: 'center',
        boxShadow: `0 4px 20px ${skill.color}44`,
        border: `2px solid ${skill.color}66`,
        position: 'relative',
        overflow: 'hidden',
      }}
      animate={{
        boxShadow: isActive
          ? `0 8px 32px ${skill.color}88`
          : `0 4px 20px ${skill.color}44`,
      }}
    >
      <span style={{ zIndex: 2, position: 'relative' }}>
        {skill.abbr ?? skill.name.split(/[\s.]/)[0].slice(0, 4)}
      </span>

      <motion.div
        style={{
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          right: '-2px',
          bottom: '-2px',
          borderRadius: '50%',
          border: '3px solid transparent',
          borderTopColor: skill.color,
          opacity: isActive ? 1 : 0,
        }}
        animate={{ rotate: isActive ? 360 : 0, opacity: isActive ? 1 : 0 }}
        transition={{
          rotate: { duration: 1, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 0.3 },
        }}
      />
    </motion.div>
  );
}
