'use client';

import Link from 'next/link';
import { Box, Link as MuiLink, Typography } from '@mui/material';
import { FooterSection } from './footer-links';

type FooterColumnProps = {
  section: FooterSection;
};

export default function FooterColumn({ section }: FooterColumnProps) {
  return (
    <Box>
      <Typography variant='subtitle1' sx={{ fontWeight: 700 }} gutterBottom>
        {section.title}
      </Typography>

      <Box sx={{ 'display ': 'flex', 'flexDirection ': 'column', gap: 1 }}>
        {section.links.map((link) => (
          <MuiLink
            key={link.label}
            component={Link}
            href={link.href}
            underline='hover'
            color='text.secondary'
          >
            {link.label}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
}
