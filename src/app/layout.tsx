import type { Metadata } from 'next';
import './globals.css';
import AppProvider from '../providers/app-provider';

export const metadata: Metadata = {
  title: 'Event Booking',
  description: 'Event Booking Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <AppProvider>{children} </AppProvider>
      </body>
    </html>
  );
}
