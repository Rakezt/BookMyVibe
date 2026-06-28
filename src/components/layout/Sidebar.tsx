'use client';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Box, IconButton, List, styled } from '@mui/material';
import SidebarItem from './SidebarItem';
import { LAYOUT } from './layout.constants';
import { SvgIconComponent } from '@mui/icons-material';

export type NavigationItem = {
  label: string;
  href: string;
  icon: SvgIconComponent;
};

type SidebarProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
  navigation: NavigationItem[];
};
const Root = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<{
  collapsed: boolean;
}>(({ theme, collapsed }) => ({
  position: 'fixed',
  top: LAYOUT.navbar.height,
  left: 0,
  width: collapsed ? LAYOUT.sidebar.collapsedWidth : LAYOUT.sidebar.width,
  height: `calc(100vh - ${LAYOUT.navbar.height}px)`,
  background: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.custom.transitions.normal,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));

const NavigationList = styled(List)(({ theme }) => ({
  padding: theme.spacing(2),
  flex: 1,
  overflowY: 'auto',
}));

const CollapseContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export default function Sidebar({
  collapsed,
  onToggleCollapse,
  navigation,
}: SidebarProps) {
  return (
    <Root collapsed={collapsed}>
      <NavigationList>
        {navigation.map((item) => (
          <SidebarItem key={item.href} {...item} collapsed={collapsed} />
        ))}
      </NavigationList>

      <CollapseContainer>
        <IconButton onClick={onToggleCollapse}>
          {collapsed ? <ChevronRightRoundedIcon /> : <ChevronLeftRoundedIcon />}
        </IconButton>
      </CollapseContainer>
    </Root>
  );
}
