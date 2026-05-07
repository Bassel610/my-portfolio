'use client';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const arrowSx = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: 'white',
  zIndex: 10,
  '&:hover': { background: 'rgba(255, 255, 255, 0.2)' },
  '&:active': { transform: 'translateY(-50%) scale(0.95)' },
};

export default function Arrows({ canPrev, canNext, onPrev, onNext }) {
  return (
    <>
      {canPrev && (
        <IconButton
          onClick={onPrev}
          disableRipple
          sx={{ ...arrowSx, left: 10 }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      )}
      {canNext && (
        <IconButton
          onClick={onNext}
          disableRipple
          sx={{ ...arrowSx, right: 10 }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </>
  );
}
