import AppShell from '@/src/components/layout/AppShell';
import ProtectedRoute from '@/src/components/auth/ProtectedRoute';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

import { NavigationItem } from '@/src/components/layout/Sidebar';

const navigation: NavigationItem[] = [
  {
    label: 'Dashboard',
    href: '/customer/dashboard',
    icon: DashboardRoundedIcon,
  },
  {
    label: 'My Bookings',
    href: '/customer/bookings',
    icon: ConfirmationNumberRoundedIcon,
  },
  {
    label: 'Profile',
    href: '/customer/profile',
    icon: PersonRoundedIcon,
  },
  {
    label: 'Change Password',
    href: '/customer/change-password',
    icon: LockRoundedIcon,
  },
];

type Props = {
  children: React.ReactNode;
};

export default function CustomerLayout({ children }: Props) {
  return (
    <ProtectedRoute roles={['CUSTOMER']}>
      <AppShell navigation={navigation}>{children}</AppShell>
    </ProtectedRoute>
  );
}
