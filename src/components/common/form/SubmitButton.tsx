'use client';

import { Button, CircularProgress } from '@mui/material';

type Props = {
  loading: boolean;
  children: React.ReactNode;
};

export default function SubmitButton({ loading, children }: Props) {
  return (
    <Button
      type='submit'
      variant='contained'
      fullWidth
      size='large'
      disabled={loading}
      sx={{
        py: 1.5,
        mt: 2,
      }}
    >
      {loading ? <CircularProgress size={22} color='inherit' /> : children}
    </Button>
  );
}
