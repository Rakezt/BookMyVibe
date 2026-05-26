import { STATUS_CODES } from '../../constants/statusCodes';
import eventBus from '../../jobs/eventBus';
import ApiError from '../../utils/ApiError';
import { parseExcelFile } from '../../utils/excel';
import {
  bulkCreateEventsRepository,
  createEventRepository,
  deleteEventRepository,
  findEventByIdRepository,
  getEventsRepository,
  updateEventRepository,
} from './event.repository';

export const createEventService = async (payload: any, organizerId: string) => {
  return createEventRepository({
    ...payload,
    organizerId,
    availableTickets: payload.totalTickets,
  });
};

export const updateEventService = async (
  eventId: string,
  payload: any,
  userId: string,
) => {
  const event = await findEventByIdRepository(eventId);

  if (!event) {
    throw new ApiError(STATUS_CODES.NOT_FOUND, 'Event not found');
  }

  if (event.organizerId.toString() !== userId) {
    throw new ApiError(STATUS_CODES.FORBIDDEN, 'You cannot update this event');
  }
  eventBus.emit('event.updated', {
    eventId,
  });

  return updateEventRepository(eventId, payload);
};

export const deleteEventService = async (eventId: string, userId: string) => {
  const event = await findEventByIdRepository(eventId);

  if (!event) {
    throw new ApiError(STATUS_CODES.NOT_FOUND, 'Event not found');
  }

  if (event.organizerId.toString() !== userId) {
    throw new ApiError(STATUS_CODES.FORBIDDEN, 'You cannot delete this event');
  }

  await deleteEventRepository(eventId);
};

export const getEventsService = async (query: any) => {
  return getEventsRepository(query, {});
};

export const getSingleEventService = async (eventId: string) => {
  const event = await findEventByIdRepository(eventId);

  if (!event) {
    throw new ApiError(STATUS_CODES.NOT_FOUND, 'Event not found');
  }

  return event;
};

export const bulkUploadEventsService = async (
  filePath: string,
  organizerId: string,
) => {
  const rows = parseExcelFile(filePath);

  if (!rows.length) {
    throw new ApiError(STATUS_CODES.BAD_REQUEST, 'Excel file is empty');
  }

  const formattedEvents = rows.map((row: any) => ({
    title: row.title,
    description: row.description,
    location: row.location,
    date: new Date(row.date),
    totalTickets: Number(row.totalTickets),
    availableTickets: Number(row.totalTickets),
    organizerId,
  }));

  return bulkCreateEventsRepository(formattedEvents);
};
