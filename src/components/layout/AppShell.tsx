'use client';

import { Box, styled } from '@mui/material';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar, { NavigationItem } from './Sidebar';
import { LAYOUT } from './layout.constants';
import { useState } from 'react';

type AppShellProps = {
  children: React.ReactNode;
  navigation: NavigationItem[];
};

const Root = styled(Box)({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
});

const ContentWrapper = styled(Box)({
  display: 'flex',
  flex: 1,
});

const Main = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<{ collapsed: boolean }>(({ theme, collapsed }) => ({
  flex: 1,
  background: theme.palette.background.default,
  padding: theme.spacing(4),
  marginTop: LAYOUT.navbar.height,
  marginLeft: collapsed ? LAYOUT.sidebar.collapsedWidth : LAYOUT.sidebar.width,
  transition: `margin-left ${theme.custom.transitions.normal}`,
  minHeight: `calc(100vh - ${LAYOUT.navbar.height}px)`,
}));

export default function AppShell({ children, navigation }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Root>
      <Navbar />
      <ContentWrapper>
        <Sidebar
          navigation={navigation}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((prev) => !prev)}
        />
        <Main collapsed={collapsed}>{children}</Main>
      </ContentWrapper>
      <Footer />
    </Root>
  );
}
