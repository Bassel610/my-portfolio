'use client';
import { motion } from 'framer-motion';

export default function Trail({ skill, isActive }) {
  return (
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
  );
}
