import { Request, Response } from 'express';
import { AuthRequest } from '../../middleware/auth.middleware';
import asyncHandler from '../../utils/asyncHandler';
import {
  bulkUploadEventsService,
  createEventService,
  deleteEventService,
  getEventsService,
  getSingleEventService,
  updateEventService,
} from './event.service';

interface EventParams {
  id: string;
}

export const createEvent = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const result = await createEventService(req.body, req.user.userId);
    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      data: result,
    });
  },
);

export const updateEvent = asyncHandler(
  async (req: AuthRequest & Request<EventParams>, res: Response) => {
    const result = await updateEventService(
      req.params.id,
      req.body,
      req.user.userId,
    );

    res.status(200).json({
      success: true,
      message: 'Event updated successfully',
      data: result,
    });
  },
);

export const deleteEvent = asyncHandler(
  async (req: AuthRequest & Request<EventParams>, res: Response) => {
    await deleteEventService(req.params.id, req.user.userId);

    res.status(200).json({
      success: true,
      message: 'Event deleted successfully',
    });
  },
);

export const getEvents = asyncHandler(async (req: Request, res: Response) => {
  const result = await getEventsService(req.query);

  res.status(200).json({
    success: true,
    data: result,
  });
});

export const getSingleEvent = asyncHandler(
  async (req: Request & Request<EventParams>, res: Response) => {
    const result = await getSingleEventService(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Event data',
      data: result,
    });
  },
);

export const bulkUploadEvents = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'File required',
      });
    }

    const result = await bulkUploadEventsService(
      req.file.path,
      req.user.userId,
    );

    res.status(201).json({
      success: true,
      message: 'Bulk events uploaded successfully',
      count: result.length,
    });
  },
);
