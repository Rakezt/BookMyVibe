'use client';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  Toolbar,
  styled,
  TextField,
  Typography,
  Stack,
} from '@mui/material';

import { LAYOUT } from './layout.constants';
import Logo from '../common/logo/logo';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.paper,
  backdropFilter: 'blur(18px)',
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.custom.shadows.card,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: LAYOUT.navbar.height,
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
}));

const SearchBox = styled(TextField)(({ theme }) => ({
  width: 420,

  '& .MuiOutlinedInput-root': {
    borderRadius: theme.custom.shape.radius.pill,

    background: theme.palette.background.default,
  },
}));

export default function Navbar() {
  return (
    <StyledAppBar position='sticky' elevation={0}>
      <StyledToolbar>
        <Stack sx={{ direction: 'row', alignItems: 'center', spacing: 2 }}>
          <IconButton color='inherit'>
            <MenuRoundedIcon />
          </IconButton>
          <Logo />
        </Stack>
        <SearchBox
          placeholder='Search events...'
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
            },
          }}
        />

        <Stack sx={{ direction: 'row', alignItems: 'center', spacing: 2 }}>
          <IconButton color='inherit'>
            <NotificationsNoneRoundedIcon />
          </IconButton>
          <Avatar>R</Avatar>
          <Box>
            <Typography sx={{ fontWeight: 600 }}>Rakesh</Typography>
            <Typography variant='body2' color='text.secondary'>
              Organizer
            </Typography>
          </Box>
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
}
