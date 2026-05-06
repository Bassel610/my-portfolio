import { Box } from '@mui/material';
import { Heading, Timeline } from './components';

export default function Experience() {
  return (
    <Box id="experience">
      <Box
        sx={{
          maxWidth: { xs: '100%', sm: 600, md: 800 },
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
          pb: { xs: 4, md: 8 },
          position: 'relative',
          pt: { xs: 12, md: 14 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 180,
            top: 36,
            width: 40,
            height: 2,
            bgcolor: 'grey.300',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            left: '14px',
            top: '70px',
            width: 2,
            height: 'calc(100% - 196px)',
            bgcolor: 'grey.300',
          }}
        />
        <Heading />
        <Timeline />
      </Box>
    </Box>
  );
}
