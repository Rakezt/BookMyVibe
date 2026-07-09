import { api } from '@/src/services/api';
import {
  GetEventByIdResponse,
  GetEventsParams,
  GetEventsResponse,
} from '../types/event.types';

export const getEvents = async (
  params: GetEventsParams,
): Promise<GetEventsResponse> => {
  const { data } = await api.get<GetEventsResponse>('/events', {
    params,
  });

  return data;
};

export const getEventById = async (
  id: string,
): Promise<GetEventByIdResponse> => {
  const { data } = await api.get<GetEventByIdResponse>(`/events/${id}`);

  return data;
};
