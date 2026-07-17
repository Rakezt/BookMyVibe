'use client';

import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import SportsSoccerRoundedIcon from '@mui/icons-material/SportsSoccerRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function AuthLayout({ title, subtitle, children }: Props) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: '1.1fr 0.9fr',
        },
      }}
    >
      {/* Left */}
      <Box
        sx={(theme) => ({
          position: 'relative',
          overflow: 'hidden',
          display: {
            xs: 'none',
            md: 'flex',
          },
          flexDirection: 'column',
          justifyContent: 'center',
          px: 10,
          background: `linear-gradient(
            135deg,
            ${theme.palette.primary.dark} 0%,
            ${theme.palette.secondary.dark} 50%,
            #0F172A 100%
          )`,

          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top left, rgba(255,255,255,.08), transparent 45%)',
          },
        })}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant='body2'
            sx={{
              color: 'primary.light',
              letterSpacing: 3,
              mb: 3,
              fontWeight: 'inherit',
            }}
          >
            BOOKMYVIBE
          </Typography>

          <Typography
            variant='h2'
            sx={{
              color: 'common.white',
              lineHeight: 1.2,
              maxWidth: 520,
            }}
          >
            Discover Amazing Events Near You
          </Typography>

          <Typography
            variant='body1'
            sx={{
              mt: 3,
              color: 'rgba(255,255,255,.72)',
              maxWidth: 520,
              lineHeight: 1.8,
            }}
          >
            Find concerts, sports, workshops, exhibitions and business events
            happening around you. Book tickets instantly and never miss your
            next experience.
          </Typography>

          <Stack
            direction='row'
            spacing={2}
            sx={{
              mt: 6,
              flexWrap: 'wrap',
            }}
          >
            <Chip
              icon={<MusicNoteRoundedIcon />}
              label='Concerts'
              color='primary'
            />

            <Chip
              icon={<SportsSoccerRoundedIcon />}
              label='Sports'
              color='primary'
            />

            <Chip
              icon={<BusinessCenterRoundedIcon />}
              label='Business'
              color='primary'
            />

            <Chip
              icon={<SchoolRoundedIcon />}
              label='Workshops'
              color='primary'
            />
          </Stack>
        </Box>
      </Box>

      {/* Right */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 3,

          bgcolor: 'background.default',
        }}
      >
        <Paper
          elevation={0}
          sx={(theme) => ({
            width: '100%',
            maxWidth: 470,
            p: 6,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: theme.custom.shadows.dialog,
            transition: theme.custom.transitions.normal,

            '&:hover': {
              boxShadow: theme.custom.shadows.hover,
            },
          })}
        >
          <Typography
            variant='body2'
            sx={{
              color: 'primary.main',
              letterSpacing: 3,
              mb: 2,
              fontWeight: 'inherit',
            }}
          >
            BOOKMYVIBE
          </Typography>

          <Typography
            variant='h4'
            sx={{
              mb: 1,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant='body1'
            sx={{
              color: 'text.secondary',
              mb: 5,
            }}
          >
            {subtitle}
          </Typography>

          {children}
        </Paper>
      </Box>
    </Box>
  );
}
