'use client';
import { Box, Typography } from '@mui/material';
import { useGallery } from '@/hooks/work';
import Slide from './slide';
import NavButton from './nav-buttons';
import Thumbs from './thumbs';

export default function Gallery({ slides, alt }) {
  const { index, next, prev, goTo, containerRef } = useGallery(slides.length);

  return (
    <Box
      sx={{
        position: { xs: 'static', lg: 'sticky' },
        top: 90,
        alignSelf: 'flex-start',
      }}
    >
      <Box
        ref={containerRef}
        tabIndex={0}
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          outline: 'none',
          '&:hover .gallery-nav': { opacity: 1 },
        }}
      >
        {slides.map((s, i) => (
          <Slide
            key={s.label}
            src={s.src}
            alt={`${alt} — ${s.label}`}
            url={`${alt.toLowerCase().replace(/\s+/g, '-')} / ${s.label.toLowerCase()}`}
            active={i === index}
          />
        ))}
        {slides.length > 1 && (
          <>
            <NavButton side="left" onClick={prev} />
            <NavButton side="right" onClick={next} />
            <Box
              sx={{
                position: 'absolute',
                left: 12,
                bottom: 12,
                px: 1.1,
                py: 0.4,
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(15,10,30,0.65)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.04em',
                zIndex: 3,
              }}
            >
              <Typography component="span" sx={{ fontSize: 'inherit' }}>
                {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </Typography>
            </Box>
          </>
        )}
      </Box>
      {slides.length > 1 && (
        <Thumbs slides={slides} activeIndex={index} onSelect={goTo} />
      )}
    </Box>
  );
}
