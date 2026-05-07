import { Box } from '@mui/material';
import { Name, Role, Bio, Skills } from '@/components/about';

export default function About() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: { xs: 'auto', md: 'calc(100vh - 18px)' },
          minHeight: { xs: '100vh', md: 'auto' },
          width: '100%',
          maxWidth: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 10, md: 12 },
          pb: { xs: 4, md: 4 },
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '800px',
            width: '100%',
          }}
        >
          <Name />
          <Role />
          <Bio />
          <Skills />
        </Box>
      </Box>
    </Box>
  );
}
