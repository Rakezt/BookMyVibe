'use client';
import { Box } from '@mui/material';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';

type Props = {
  children: React.ReactNode;
};
export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Sidebar />
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
