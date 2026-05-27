import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';
import ApiError from '../utils/ApiError';
import { STATUS_CODES } from '../constants/statusCodes';

export interface AuthRequest extends Request {
  user?: any;
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.accessToken;

  if (!token) {
    throw new ApiError(STATUS_CODES.UNAUTHORIZED, 'Access denied');
  }

  try {
    const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    throw new ApiError(STATUS_CODES.UNAUTHORIZED, 'Invalid token');
  }
};

export default authMiddleware;
