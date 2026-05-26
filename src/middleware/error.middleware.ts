import { Request, Response, NextFunction } from 'express';
import { STATUS_CODES } from '../constants/statusCodes';
import ApiError from '../utils/ApiError';

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = STATUS_CODES.INTERNAL_SERVER_ERROR;

  let message = 'Something went wrong';

  if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    error,
    stack: error.stack,
  });
};

export default globalErrorHandler;
