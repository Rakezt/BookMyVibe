'use client';

import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Logo() {
  return (
    <Link
      href='/'
      style={{
        textDecoration: 'none',
      }}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(1),
        })}
      >
        <Typography
          variant='h5'
          sx={{
            fontWeight: 700,
            background: (theme) => theme.custom.gradients.primary,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          BookMyVibe
        </Typography>
      </Box>
    </Link>
  );
}
