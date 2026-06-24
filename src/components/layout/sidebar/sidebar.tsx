'use client';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';

const menuItems = ['Dashboard', 'My Events', 'Bookings', 'Reports', 'Profile'];

export default function Sidebar() {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: 260,
        flexShrink: 0,

        '& .MuiDrawer-paper': {
          width: 260,
          backgroundColor: '#121A2E',
          borderRight: '1px solid #1E293B',
        },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItemButton key={item}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
