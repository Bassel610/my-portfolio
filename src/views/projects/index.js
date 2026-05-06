'use client';
import { useTheme, useMediaQuery, Box } from '@mui/material';
import { PROJECTS } from '@/constants/projects';
import { DesktopShell, MobileShell } from './components';

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="projects">
      {isMobile ? (
        <MobileShell projects={PROJECTS} />
      ) : (
        <DesktopShell projects={PROJECTS} />
      )}
    </Box>
  );
}
