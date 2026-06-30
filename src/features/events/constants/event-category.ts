import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import { EventCategory } from '../types/event.types';

export const EVENT_CATEGORIES = [
  {
    label: 'Concerts',
    value: EventCategory.CONCERT,
    icon: CelebrationRoundedIcon,
  },
  {
    label: 'Sports',
    value: EventCategory.SPORTS,
    icon: SportsEsportsRoundedIcon,
  },
  {
    label: 'Technology',
    value: EventCategory.TECHNOLOGY,
    icon: ComputerRoundedIcon,
  },
  {
    label: 'Business',
    value: EventCategory.BUSINESS,
    icon: BusinessCenterRoundedIcon,
  },
  {
    label: 'Workshops',
    value: EventCategory.WORKSHOP,
    icon: SchoolRoundedIcon,
  },
  {
    label: 'Others',
    value: EventCategory.OTHER,
    icon: ExploreRoundedIcon,
  },
];

export const getStatusColor = (
  status: string,
): 'success' | 'warning' | 'default' | 'error' => {
  switch (status) {
    case 'UPCOMING':
      return 'success';

    case 'ONGOING':
      return 'warning';

    case 'COMPLETED':
      return 'default';

    case 'CANCELLED':
      return 'error';

    default:
      return 'default';
  }
};

export const getOccupancyColor = (occupancy: number) => {
  if (occupancy >= 80) return 'error';
  if (occupancy >= 50) return 'warning';
  return 'success';
};
