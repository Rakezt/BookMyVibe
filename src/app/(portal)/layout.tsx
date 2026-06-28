import AppShell from '@/src/components/layout/AppShell';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const navigation = [
  {
    label: 'Dashboard',
    href: '/organizer/dashboard',
    icon: DashboardRoundedIcon,
  },
  {
    label: 'Events',
    href: '/organizer/events',
    icon: EventRoundedIcon,
  },
  {
    label: 'Profile',
    href: '/organizer/profile',
    icon: PersonRoundedIcon,
  },
];

type Props = {
  children: React.ReactNode;
};

export default function PortalLayout({ children }: Props) {
  return <AppShell navigation={navigation}>{children}</AppShell>;
}
