import { useEffect, useState } from 'react';
import { NAV_PAGES } from '@/constants/site';

export function useNavActive({ currentPage, totalPages, isMobile }) {
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
    }
    const currentIndex = NAV_PAGES.findIndex((p) => p.id === currentPage);
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [currentPage, totalPages, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [currentPage, isMobile]);

  return { isVisible, setIsVisible, activeIndex };
}
