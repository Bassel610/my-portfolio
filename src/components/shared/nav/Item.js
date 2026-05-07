'use client';
import { motion } from 'framer-motion';

export default function Item({ page, index, activeIndex, isMobile, onNavigate }) {
  const active = activeIndex === index;
  return (
    <motion.div
      onClick={() => onNavigate?.(page.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onNavigate?.(page.id);
        }
      }}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: isMobile ? '6px 10px' : '8px 12px',
        borderRadius: '25px',
        cursor: 'pointer',
        color: active ? '#fff' : 'rgba(255, 255, 255, 0.6)',
        fontSize: isMobile ? '12px' : '14px',
        fontWeight: '500',
      }}
      whileHover={{ scale: 1.05, color: '#fff' }}
      whileTap={{ scale: 0.95 }}
    >
      {active && (
        <motion.div
          layoutId="activeNav"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
            borderRadius: '25px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}

      <span
        style={{
          fontSize: isMobile ? '14px' : '16px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {page.icon}
      </span>

      {isMobile ? (
        <span
          style={{
            position: 'relative',
            zIndex: 1,
            whiteSpace: 'nowrap',
            fontSize: '11px',
            fontWeight: active ? '600' : '500',
          }}
        >
          {page.name}
        </span>
      ) : (
        <motion.span
          style={{
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: active ? 'auto' : 0,
            opacity: active ? 1 : 0,
          }}
          whileHover={{ width: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {page.name}
        </motion.span>
      )}
    </motion.div>
  );
}
