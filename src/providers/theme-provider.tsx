'use client';
import { ThemeProvider } from '@mui/material/styles';
import { bookMyVibeTheme } from '../theme';
import CssBaseline from '@mui/material/CssBaseline';

type Props = {
  children: React.ReactNode;
};

export default function AppThemeProvider({ children }: Props) {
  return (
    <ThemeProvider theme={bookMyVibeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
