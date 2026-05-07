'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NAV_PAGES } from '@/constants/site';

export default function Nav({ currentPage, totalPages, isMobile = false, onNavigate }) {
  const [isVisible, setIsVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const sectionHeight = docHeight / totalPages;
        const currentSection = Math.min(
          Math.floor(scrollTop / sectionHeight),
          totalPages - 1
        );
        setActiveIndex(currentSection);
        setIsVisible(true);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      const currentIndex = NAV_PAGES.findIndex((p) => p.id === currentPage);
      setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
    }
  }, [currentPage, totalPages, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [currentPage, isMobile]);

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
            <motion.div
              key={page.id}
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
                color:
                  activeIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '500',
              }}
              whileHover={{ scale: 1.05, color: '#fff' }}
              whileTap={{ scale: 0.95 }}
            >
              {activeIndex === index && (
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
                    fontWeight: activeIndex === index ? '600' : '500',
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
                    width: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  whileHover={{ width: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {page.name}
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

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
      </div>
    </motion.div>
  );
}
