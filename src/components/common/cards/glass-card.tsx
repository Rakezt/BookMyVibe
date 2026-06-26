'use client';

import Card, { CardProps } from '@mui/material/Card';

export default function GlassCard({ children, sx, ...props }: CardProps) {
  return (
    <Card
      {...props}
      sx={{
        backdropFilter: 'blur(20px)',
        background: 'rgba(18,26,46,.75)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 5,
        boxShadow: '0 12px 40px rgba(0,0,0,.25)',
        ...sx,
      }}
    >
      {children}
    </Card>
  );
}
