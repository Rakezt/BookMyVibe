'use client';

import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded';
import { Box, Typography } from '@mui/material';

interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <Box
      sx={{
        py: 10,
        textAlign: 'center',
      }}
    >
      <SearchOffRoundedIcon
        sx={{
          fontSize: 70,
          color: 'text.disabled',
          mb: 2,
        }}
      />

      <Typography
        variant='h5'
        sx={{
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: 'text.secondary',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
