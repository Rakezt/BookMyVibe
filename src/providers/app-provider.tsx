'use client';
import AuthProvider from './auth-provider';
import QueryProvider from './query-provider';
import ReduxProvider from './redux-provider';
import AppThemeProvider from './theme-provider';

type Props = {
  children: React.ReactNode;
};
export default function AppProvider({ children }: Props) {
  return (
    <ReduxProvider>
      <QueryProvider>
        <AuthProvider>
          <AppThemeProvider>{children}</AppThemeProvider>
        </AuthProvider>
      </QueryProvider>
    </ReduxProvider>
  );
}
