'use client';

import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import Logo from '../common/logo/logo';
import FooterColumn from './FooterColumn';
import { footerSections } from './footer-links';

const Root = styled(Box)(({ theme }) => ({
  marginTop: 'auto',
  background: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Root>
      <Container maxWidth='xl'>
        <Grid container spacing={6} sx={{ py: 6 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Logo />

              <Typography variant='body2' color='text.secondary'>
                Discover. Book. Experience.
              </Typography>

              <Typography variant='body2' color='text.secondary'>
                BookMyVibe is a modern platform for discovering experiences and
                helping organizers create, manage and grow unforgettable events.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={4}>
              {footerSections.map((section) => (
                <Grid key={section.title} size={{ xs: 6, md: 3 }}>
                  <FooterColumn section={section} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        <Stack
          sx={{
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 3,
            gap: 2,
          }}
        >
          <Typography variant='body2' color='text.secondary'>
            © {currentYear} BookMyVibe. All rights reserved.
          </Typography>

          <Typography variant='body2' color='text.secondary'>
            Made with ❤️ in India
          </Typography>
        </Stack>
      </Container>
    </Root>
  );
}
