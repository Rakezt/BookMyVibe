import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth.middleware';
import ApiError from '../utils/ApiError';
import { STATUS_CODES } from '../constants/statusCodes';

const authorizeRoles =
  (...roles: string[]) =>
  (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new ApiError(STATUS_CODES.UNAUTHORIZED, 'Unauthorized');
    }

    if (!roles.includes(req.user.role)) {
      throw new ApiError(STATUS_CODES.FORBIDDEN, 'Forbidden');
    }

    next();
  };

export default authorizeRoles;
