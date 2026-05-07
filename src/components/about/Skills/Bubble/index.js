'use client';
import { motion } from 'framer-motion';
import Trail from './Trail';
import Sphere from './Sphere';
import Tooltip from './Tooltip';

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
      <Trail skill={skill} isActive={isActive} />
      <Sphere skill={skill} isActive={isActive} />
      {isActive && <Tooltip skill={skill} />}
    </motion.div>
  );
}
