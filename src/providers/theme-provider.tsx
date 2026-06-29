'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { bookMyVibeTheme } from '../theme';

type Props = {
  children: React.ReactNode;
};

export default function AppThemeProvider({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={bookMyVibeTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
