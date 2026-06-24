'use client';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        py: 2,
        borderTop: '1px solid #1E293B',
        textAlign: 'center',
      }}
    >
      <Typography variant='body2'>
        © {new Date().getFullYear()} BookMyVibe
      </Typography>
    </Box>
  );
}
