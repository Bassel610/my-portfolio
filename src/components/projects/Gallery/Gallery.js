'use client';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Main from './Main';
import Thumbs from './Thumbs';

const PLACEHOLDER = '/images/project-placeholder.png';

export default function Gallery({ images, alt, compact = false }) {
  const safe = images?.length ? images : [PLACEHOLDER];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [safe[0]]);

  const next = () => setIndex((i) => (i + 1) % safe.length);
  const prev = () => setIndex((i) => (i - 1 + safe.length) % safe.length);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        gap: compact ? 0.75 : 1,
      }}
    >
      <Main
        src={safe[index]}
        alt={alt}
        canNav={safe.length > 1}
        onPrev={prev}
        onNext={next}
      />
      {safe.length > 1 && (
        <Thumbs
          images={safe}
          activeIndex={index}
          onSelect={setIndex}
          compact={compact}
        />
      )}
    </Box>
  );
}
