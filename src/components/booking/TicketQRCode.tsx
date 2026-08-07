'use client';

import QRCode from 'react-qr-code';
import { Box } from '@mui/material';

type Props = {
  value: string;
};

export default function TicketQRCode({ value }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <QRCode value={value} size={180} />
    </Box>
  );
}
