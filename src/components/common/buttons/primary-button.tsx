'use client';

import Button, { ButtonProps } from '@mui/material/Button';

type PrimaryButtonProps = ButtonProps;

export default function PrimaryButton({
  children,
  sx,
  ...props
}: PrimaryButtonProps) {
  return (
    <Button
      variant='contained'
      {...props}
      sx={{
        borderRadius: 3,
        px: 3,
        py: 1.2,
        fontWeight: 700,
        background: 'linear-gradient(135deg,#6C5CE7,#00D4FF)',
        color: '#fff',
        transition: '0.3s',

        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 12px 30px rgba(108,92,231,.45)',
        },

        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
