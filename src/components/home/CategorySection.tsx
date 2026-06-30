'use client';

import { useRouter } from 'next/navigation';
import { Container, Paper, Stack, Typography } from '@mui/material';
import { EVENT_CATEGORIES } from '@/src/features/events/constants/event-category';

export default function CategorySection() {
  const router = useRouter();

  return (
    <Container
      maxWidth='xl'
      sx={{
        py: 10,
      }}
    >
      <Typography
        variant='h3'
        sx={{
          fontWeight: 700,
          mb: 6,
        }}
      >
        Browse By Category
      </Typography>

      <Stack
        direction='row'
        spacing={3}
        sx={{
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {EVENT_CATEGORIES.map((category) => {
          const Icon = category.icon;

          return (
            <Paper
              key={category.value}
              elevation={0}
              onClick={() => router.push(`/events?category=${category.value}`)}
              sx={(theme) => ({
                width: 180,
                height: 180,
                cursor: 'pointer',
                borderRadius: theme.custom.shape.radius.lg,
                background: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                transition: theme.custom.transitions.normal,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: theme.custom.shadows.hover,
                },
              })}
            >
              <Stack
                spacing={2}
                sx={{
                  alignItems: 'center',
                }}
              >
                <Icon
                  color='primary'
                  sx={{
                    fontSize: 48,
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {category.label}
                </Typography>
              </Stack>
            </Paper>
          );
        })}
      </Stack>
    </Container>
  );
}
