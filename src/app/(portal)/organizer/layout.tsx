import AppShell from '@/src/components/layout/AppShell';
import ProtectedRoute from '@/src/components/auth/ProtectedRoute';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { NavigationItem } from '@/src/components/layout/Sidebar';

const navigation: NavigationItem[] = [
  {
    label: 'Dashboard',
    href: '/organizer/dashboard',
    icon: DashboardRoundedIcon,
  },
  {
    label: 'My Events',
    href: '/organizer/events',
    icon: EventRoundedIcon,
  },
  {
    label: 'Create Event',
    href: '/organizer/events/create',
    icon: AddCircleRoundedIcon,
  },
  {
    label: 'Bookings',
    href: '/organizer/bookings',
    icon: ConfirmationNumberRoundedIcon,
  },
  {
    label: 'Reports',
    href: '/organizer/reports',
    icon: AssessmentRoundedIcon,
  },
  {
    label: 'Profile',
    href: '/organizer/profile',
    icon: PersonRoundedIcon,
  },
  {
    label: 'Change Password',
    href: '/organizer/change-password',
    icon: LockRoundedIcon,
  },
];

type Props = {
  children: React.ReactNode;
};

export default function OrganizerLayout({ children }: Props) {
  return (
    <ProtectedRoute roles={['ORGANIZER']}>
      <AppShell navigation={navigation}>{children}</AppShell>
    </ProtectedRoute>
  );
}
