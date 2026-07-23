'use client';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { EventSearchProps } from '@/src/features/events/types/event.types';

export default function EventSearch({ value, onChange }: EventSearchProps) {
  return (
    <TextField
      name='search'
      fullWidth
      placeholder='Search events...'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        mb: 3,
      }}
    />
  );
}
