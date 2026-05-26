import express from 'express';
import authMiddleware from '../../middleware/auth.middleware';
import authorizeRoles from '../../middleware/role.middleware';
import validate from '../../middleware/validate.middleware';
import { createEventSchema, updateEventSchema } from './event.validation';
import {
  bulkUploadEvents,
  createEvent,
  deleteEvent,
  getEvents,
  getSingleEvent,
  updateEvent,
} from './event.controller';
import upload from '../../config/multer';

const router = express.Router();

router.post(
  '/',
  authMiddleware,
  authorizeRoles('ORGANIZER'),
  validate(createEventSchema),
  createEvent,
);

router.patch(
  '/:id',
  authMiddleware,
  authorizeRoles('ORGANIZER'),
  validate(updateEventSchema),
  updateEvent,
);

router.delete('/:id', authMiddleware, authorizeRoles('ORGANIZER'), deleteEvent);

router.get('/', getEvents);

router.get('/:id', getSingleEvent);

router.post(
  '/bulk-upload',
  authMiddleware,
  authorizeRoles('ORGANIZER'),
  upload.single('file'),
  bulkUploadEvents,
);

export default router;
