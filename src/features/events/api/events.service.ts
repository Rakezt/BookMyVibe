import { api } from '@/src/services/api';
import { GetEventsParams, GetEventsResponse } from '../types/event.types';

export const getEvents = async (
  params: GetEventsParams,
): Promise<GetEventsResponse> => {
  const { data } = await api.get<GetEventsResponse>('/events', {
    params,
  });

  return data;
};
