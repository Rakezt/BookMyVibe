import { useInfiniteQuery } from '@tanstack/react-query';
import { getEvents } from '../api/events.service';
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
