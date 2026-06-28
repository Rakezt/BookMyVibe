export const queryKeys = {
  events: {
    all: ['events'] as const,
    list: (params?: Record<string, unknown>) =>
      [...queryKeys.events.all, 'list', params] as const,
    detail: (id: string) => [...queryKeys.events.all, 'detail', id] as const,
  },

  bookings: {
    all: ['bookings'] as const,
  },

  dashboard: {
    all: ['dashboard'] as const,
  },

  reports: {
    all: ['reports'] as const,
  },

  profile: {
    all: ['profile'] as const,
  },
};
