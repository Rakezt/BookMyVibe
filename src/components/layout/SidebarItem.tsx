'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';

type SidebarItemProps = {
  label: string;
  href: string;
  icon: React.ElementType;
  collapsed: boolean;
};

const StyledItem = styled(ListItemButton)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  borderRadius: theme.custom.shape.radius.md,
  transition: theme.custom.transitions.normal,
  '&.active': {
    background: theme.custom.gradients.primary,
    color: theme.palette.common.white,
    '& .MuiListItemIcon-root': {
      color: theme.palette.common.white,
    },
  },

  '&:hover': {
    background: theme.palette.action.hover,
  },
}));

export default function SidebarItem({
  label,
  href,
  icon: Icon,
  collapsed,
}: SidebarItemProps) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <StyledItem className={active ? 'active' : ''}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>

        {!collapsed && <ListItemText primary={label} />}
      </StyledItem>
    </Link>
  );
}
