'use client';

import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

import { Paper, Stack, Typography } from '@mui/material';

const stats = [
  {
    value: '500+',
    label: 'Events',
    icon: CelebrationRoundedIcon,
  },
  {
    value: '50K+',
    label: 'Tickets Sold',
    icon: ConfirmationNumberRoundedIcon,
  },
  {
    value: '100+',
    label: 'Organizers',
    icon: GroupsRoundedIcon,
  },
];

export default function HeroStats() {
  return (
    <Stack
      direction='row'
      spacing={3}
      sx={{
        mt: 6,
      }}
    >
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Paper
            key={item.label}
            sx={(theme) => ({
              flex: 1,
              p: 3,
              borderRadius: theme.custom.shape.radius.lg,
              background: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
            })}
          >
            <Stack spacing={2}>
              <Icon color='primary' />

              <Typography
                variant='h4'
                sx={{
                  fontWeight: 700,
                }}
              >
                {item.value}
              </Typography>

              <Typography color='text.secondary'>{item.label}</Typography>
            </Stack>
          </Paper>
        );
      })}
    </Stack>
  );
}
