import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getEventById, getEvents } from '../api/events.service';
import { GetEventsParams } from '../types/event.types';
import { queryKeys } from '@/src/lib/queryKeys';

export const useEvents = (params: Omit<GetEventsParams, 'page'>) => {
  return useInfiniteQuery({
    queryKey: queryKeys.events.list(params),
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getEvents({
        ...params,
        page: Number(pageParam),
      }),

    getNextPageParam: (lastPage) => {
      return lastPage.data.pagination.hasNextPage
        ? lastPage.data.pagination.page + 1
        : undefined;
    },
  });
};

export const useEvent = (id: string) => {
  return useQuery({
    queryKey: queryKeys.events.detail(id),
    queryFn: () => getEventById(id),
    enabled: !!id,
  });
};
