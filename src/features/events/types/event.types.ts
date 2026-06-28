export enum EventCategory {
  CONCERT = 'CONCERT',
  SPORTS = 'SPORTS',
  TECHNOLOGY = 'TECHNOLOGY',
  BUSINESS = 'BUSINESS',
  WORKSHOP = 'WORKSHOP',
  OTHER = 'OTHER',
}

export enum EventStatus {
  UPCOMING = 'UPCOMING',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export interface Venue {
  name: string;
  city: string;
  address: string;
}

export interface Organizer {
  _id: string;
  name: string;
}

export interface Event {
  _id: string;
  title: string;
  description: string;
  category:
    | 'CONCERT'
    | 'SPORTS'
    | 'TECHNOLOGY'
    | 'BUSINESS'
    | 'WORKSHOP'
    | 'OTHER';
  image: string;
  venue: Venue;
  date: string;
  ticketPrice: number;
  totalTickets: number;
  availableTickets: number;
  organizer: Organizer;
  attendees: number;
  ticketsSold: number;
  occupancyRate: number;
  status: string;
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
export interface GetEventsParams {
  page?: number;
  limit?: number;
  search?: string;
  city?: string;
}
export interface GetEventsResponse {
  success: boolean;
  data: {
    events: Event[];
    total: number;
    pagination: Pagination;
  };
}
