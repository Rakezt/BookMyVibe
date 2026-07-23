'use client';

import { EventFiltersProps } from '@/src/features/events/types/event.types';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

export default function EventFilters({
  city,
  category,
  cities,
  categories,
  onCityChange,
  onCategoryChange,
}: EventFiltersProps) {
  const handleCityChange = (event: SelectChangeEvent) => {
    onCityChange(event.target.value);
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    onCategoryChange(event.target.value);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        mb: 4,
      }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>

          <Select
            label='Category'
            value={category}
            onChange={handleCategoryChange}
          >
            <MenuItem value=''>All Categories</MenuItem>

            {categories.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl fullWidth>
          <InputLabel>City</InputLabel>

          <Select label='City' value={city} onChange={handleCityChange}>
            <MenuItem value=''>All Cities</MenuItem>

            {cities.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
