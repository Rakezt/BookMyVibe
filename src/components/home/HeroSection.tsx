'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import {
  Box,
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    const query = search.trim();

    if (!query) {
      router.push('/events');
      return;
    }

    router.push(`/events?search=${encodeURIComponent(query)}`);
  };

  return (
    <Box
      sx={(theme) => ({
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.custom.gradients.surface,
        overflow: 'hidden',
      })}
    >
      <Container maxWidth='xl'>
        <Stack
          spacing={8}
          direction={{ xs: 'column', lg: 'row' }}
          sx={{
            'justifyContent ': 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Left Section */}

          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            sx={{
              flex: 1,
              maxWidth: 650,
            }}
          >
            <Typography
              variant='h1'
              sx={{
                mb: 3,
                fontWeight: 800,
              }}
            >
              Discover Amazing
              <Box
                component='span'
                sx={(theme) => ({
                  display: 'block',
                  background: theme.custom.gradients.primary,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                })}
              >
                Events Near You
              </Box>
            </Typography>

            <Typography
              variant='h6'
              sx={{
                color: 'text.secondary',
                mb: 5,
                lineHeight: 1.8,
              }}
            >
              Discover concerts, workshops, business conferences, sporting
              events and unforgettable experiences with BookMyVibe.
            </Typography>

            <TextField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search events...'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchRoundedIcon />
                    </InputAdornment>
                  ),
                },
              }}
              sx={(theme) => ({
                mb: 4,

                '& .MuiOutlinedInput-root': {
                  height: 64,
                  borderRadius: theme.custom.shape.radius.pill,
                  background: theme.palette.background.paper,
                },
              })}
            />

            <Stack direction='row' spacing={2}>
              <Button
                variant='contained'
                endIcon={<ArrowForwardRoundedIcon />}
                onClick={handleSearch}
                sx={{
                  px: 4,
                }}
              >
                Explore Events
              </Button>

              <Button
                variant='outlined'
                sx={{
                  px: 4,
                }}
                onClick={() => router.push('/register')}
              >
                Become Organizer
              </Button>
            </Stack>
          </Box>

          {/* Right Section */}

          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Temporary Illustration */}

            <Box
              sx={(theme) => ({
                width: 520,
                height: 520,
                borderRadius: theme.custom.shape.radius.xl,
                background: theme.custom.gradients.primary,
                boxShadow: theme.custom.shadows.primary,
                opacity: 0.9,
              })}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
