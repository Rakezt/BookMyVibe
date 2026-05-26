import Event from './event.model';

export const createEventRepository = async (payload: any) => {
  return Event.create(payload);
};

export const findEventByIdRepository = async (eventId: string) => {
  return Event.findById(eventId);
};

export const updateEventRepository = async (eventId: string, payload: any) => {
  return Event.findByIdAndUpdate(eventId, payload, {
    new: true,
  });
};

export const deleteEventRepository = async (eventId: string) => {
  return Event.findByIdAndDelete(eventId);
};

export const getEventsRepository = async (filters: any, options: any) => {
  const { page = 1, limit = 10, search, location } = filters;

  const query: any = {};

  if (search) {
    query.title = {
      $regex: search,
      $options: 'i',
    };
  }

  if (location) {
    query.location = location;
  }

  const skip = (page - 1) * limit;

  const events = await Event.find(query).skip(skip).limit(limit).sort({
    createdAt: -1,
  });

  const total = await Event.countDocuments(query);

  return {
    events,
    total,
    page,
    limit,
  };
};

export const bulkCreateEventsRepository = async (events: any[]) => {
  return Event.insertMany(events);
};
