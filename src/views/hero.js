import { Stack } from '@mui/material';
import { Intro, Avatar } from '@/components/hero';

export default function Hero() {
  return (
    <Stack
      id="hero"
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 2, md: 0 }}
      sx={{
        minHeight: '100vh',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, md: 0 },
      }}
    >
      <Intro />
      <Avatar />
    </Stack>
  );
}
