import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

export const organizerNavigation = [
  {
    label: 'Dashboard',
    href: '/portal/organizer/dashboard',
    icon: DashboardRoundedIcon,
  },
  {
    label: 'My Events',
    href: '/portal/organizer/events',
    icon: EventRoundedIcon,
  },
  {
    label: 'Bookings',
    href: '/portal/organizer/bookings',
    icon: ConfirmationNumberRoundedIcon,
  },
  {
    label: 'Reports',
    href: '/portal/organizer/reports',
    icon: AssessmentRoundedIcon,
  },
  {
    label: 'Chat',
    href: '/portal/organizer/chat',
    icon: ChatRoundedIcon,
  },
  {
    label: 'Profile',
    href: '/portal/organizer/profile',
    icon: PersonRoundedIcon,
  },
  {
    label: 'Change Password',
    href: '/portal/organizer/change-password',
    icon: LockRoundedIcon,
  },
];

export const customerNavigation = [
  {
    label: 'Dashboard',
    href: '/portal/customer/dashboard',
    icon: DashboardRoundedIcon,
  },
  {
    label: 'My Bookings',
    href: '/portal/customer/bookings',
    icon: ConfirmationNumberRoundedIcon,
  },
  {
    label: 'Chat',
    href: '/portal/customer/chat',
    icon: ChatRoundedIcon,
  },
  {
    label: 'Profile',
    href: '/portal/customer/profile',
    icon: PersonRoundedIcon,
  },
  {
    label: 'Change Password',
    href: '/portal/customer/change-password',
    icon: LockRoundedIcon,
  },
];
