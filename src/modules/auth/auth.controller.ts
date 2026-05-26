import { Request, Response } from 'express';
import {
  loginUser,
  logoutService,
  refreshTokenService,
  registerUser,
} from './auth.service';
import asyncHandler from '../../utils/asyncHandler';
import { AuthRequest } from '../../middleware/auth.middleware';

export const register = asyncHandler(async (req: Request, res: Response) => {
  const result = await registerUser(req.body);
  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const result = await loginUser(req.body);
  res
    .status(200)
    .json({ success: true, message: 'Login successful', data: result });
});

export const refreshToken = asyncHandler(
  async (req: Request, res: Response) => {
    const { refreshToken } = req.body;

    const result = await refreshTokenService(refreshToken);

    res.status(200).json({
      success: true,
      data: result,
    });
  },
);
export const logout = asyncHandler(async (req: AuthRequest, res: Response) => {
  const result = await logoutService(req.user.userId);

  res.status(200).json({
    success: true,
    data: result,
  });
});
