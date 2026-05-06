'use client';
import { motion } from 'framer-motion';

export default function Bubble({ skill, index, isActive, onHoverStart, onHoverEnd }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `calc(50% + ${skill.x}px)`,
        top: `calc(50% + ${skill.y}px)`,
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: isActive ? 1.3 : 1,
        y: isActive ? -10 : 0,
      }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ scale: 1.3, y: -10 }}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: '2px',
          height: Math.sqrt(skill.x * skill.x + skill.y * skill.y),
          background: `linear-gradient(to bottom, ${skill.color}44, transparent)`,
          transformOrigin: 'bottom',
          bottom: '50%',
          left: '50%',
          transform: `translate(-50%, 100%) rotate(${
            (Math.atan2(skill.y, skill.x) * 180) / Math.PI + 90
          }deg)`,
          opacity: isActive ? 0.8 : 0.3,
        }}
        animate={{
          opacity: isActive ? 0.8 : 0.3,
          scaleY: isActive ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

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
          animate={{
            rotate: isActive ? 360 : 0,
            opacity: isActive ? 1 : 0,
          }}
          transition={{
            rotate: { duration: 1, repeat: Infinity, ease: 'linear' },
            opacity: { duration: 0.3 },
          }}
        />
      </motion.div>

      {isActive && (
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
      )}
    </motion.div>
  );
}
