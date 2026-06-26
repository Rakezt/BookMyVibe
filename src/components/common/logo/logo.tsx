'use client';

import { Box, Typography } from '@mui/material';

export default function Logo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography
        variant='h5'
        sx={(theme) => ({
          fontWeight: 800,
          background: `linear-gradient(90deg,
            ${theme.palette.primary.main},
            ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px',
        })}
      >
        BookMyVibe
      </Typography>
    </Box>
  );
}
