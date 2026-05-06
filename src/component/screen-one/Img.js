'use client'
import {  Box, Avatar, styled  } from "@mui/material";
import { SITE } from "@/constants/site";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  boxShadow: theme.shadows[4],
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)'
  }
}));


export default function Img() {

    return (
   <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 2, md: 3 },
        py: { xs: 3, md: 6 },
        px: 2,
        borderBottom: { xs: 'none', md: `1px solid #973763` },
        borderTop: { xs: `1px solid #973763`, md: 'none' },
        mt: { xs: 2, md: 0 }
      }}
    >
      {/* Circular photo with formal styling */}
      <StyledAvatar
        src={SITE.avatarSrc}
        alt={SITE.name}
        sx={{
          width: { xs: 180, sm: 220, md: 250 },
          height: { xs: 180, sm: 220, md: 250 },
          border: `4px solid #973763`
        }}
      />
      </Box>
    )
}