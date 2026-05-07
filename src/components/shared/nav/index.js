'use client';
import { motion } from 'framer-motion';
import { NAV_PAGES } from '@/constants/site';
import { useNavActive } from './use-nav-active';
import Item from './Item';
import Progress from './Progress';

export default function Nav({ currentPage, totalPages, isMobile = false, onNavigate }) {
  const { isVisible, setIsVisible, activeIndex } = useNavActive({
    currentPage,
    totalPages,
    isMobile,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isVisible ? 1 : 0.3,
        y: 0,
        scale: isVisible ? 1 : 0.95,
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        pointerEvents: 'none',
        width: 'auto',
        maxWidth: 'calc(100vw - 40px)',
      }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => !isMobile && setIsVisible(false)}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50px',
          padding: isMobile ? '8px 16px' : '12px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '12px' : '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'auto',
          fontSize: isMobile ? '14px' : '16px',
          flexWrap: 'nowrap',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            fontSize: isMobile ? '16px' : '20px',
            fontWeight: 'bold',
            color: '#fff',
            marginRight: isMobile ? '5px' : '10px',
            display: isMobile ? 'none' : 'block',
          }}
          whileHover={{ scale: 1.1 }}
        >
          BS
        </motion.div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '8px' : '12px',
          }}
        >
          {NAV_PAGES.map((page, index) => (
            <Item
              key={page.id}
              page={page}
              index={index}
              activeIndex={activeIndex}
              isMobile={isMobile}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        <Progress activeIndex={activeIndex} totalPages={totalPages} />
      </div>
    </motion.div>
  );
}
