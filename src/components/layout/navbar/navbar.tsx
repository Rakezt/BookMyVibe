'use client';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  return (
    <AppBar
      position='sticky'
      elevation={0}
      sx={{
        background: '#121A2E',
        borderBottom: '1px solid #1E293B',
      }}
    >
      <Toolbar>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 700,
            color: 'primary.main',
          }}
        >
          BookMyVibe
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <TextField
          size='small'
          placeholder='Search events...'
          sx={{ width: 321, mr: 3 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>

        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>

        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
