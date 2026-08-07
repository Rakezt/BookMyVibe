'use client';

import { useState } from 'react';
import { Box, Grid, Typography, CircularProgress } from '@mui/material';

import { useEvents } from '@/src/features/events/hooks/use-events';
import EventCard from '@/src/components/common/cards/EventCard';
import EventFilters from '@/src/components/events/EventFilters';
import EventSearch from '@/src/components/events/EventSearch';
import LoadMoreTrigger from '@/src/components/events/LoadMoreTrigger';
import { useDebounce } from 'use-debounce';
import EmptyState from '@/src/components/common/EmptyState/EmptyState';

export default function EventsPage() {
  const [searchInput, setSearchInput] = useState('');
  // const [search, setSearch] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [search] = useDebounce(searchInput, 500);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useEvents({
      limit: 10,
      search,
      city,
      category,
    });

  if (isLoading && !data) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const events = data?.pages.flatMap((page) => page.data.events) ?? [];
  const filters = data?.pages[0]?.data.filters;

  return (
    <Box
      sx={{
        maxWidth: 1400,
        mx: 'auto',
        px: 3,
        py: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Box>
          <Typography
            variant='h3'
            sx={{
              mb: 1,
            }}
          >
            Search Events
          </Typography>

          <Typography
            variant='body1'
            sx={{
              color: 'text.secondary',
            }}
          >
            {data?.pages[0]?.data.pagination.total ?? 0} Events Found
          </Typography>
        </Box>
      </Box>

      <EventSearch value={searchInput} onChange={setSearchInput} />

      <EventFilters
        city={city}
        category={category}
        cities={filters?.cities ?? []}
        categories={filters?.categories ?? []}
        onCityChange={setCity}
        onCategoryChange={setCategory}
      />

      <Grid
        container
        spacing={3}
        sx={{
          mt: 2,
        }}
      >
        {events.map((event) => (
          <Grid
            key={event._id}
            size={{
              xs: 12,
              sm: 6,
              lg: 4,
            }}
          >
            <EventCard event={event} />
          </Grid>
        ))}

        <EmptyState
          title='No Events Found'
          description='Try changing the search or filters.'
        />
      </Grid>

      <LoadMoreTrigger
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />

      {isFetchingNextPage && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            py: 4,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}
