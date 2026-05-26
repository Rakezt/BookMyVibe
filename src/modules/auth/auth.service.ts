import bcrypt from 'bcrypt';
import { createUser, findUserByEmail } from './auth.repository';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from '../../utils/jwt';
import { STATUS_CODES } from '../../constants/statusCodes';
import ApiError from '../../utils/ApiError';
import { env } from '../../config/env';
import User from '../models/user.model';

export const registerUser = async (payload: any) => {
  const existingUser = await findUserByEmail(payload.email);

  if (existingUser) {
    throw new ApiError(STATUS_CODES.BAD_REQUEST, 'User already exists');
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);
  const user = await createUser({ ...payload, password: hashedPassword });
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};

export const loginUser = async (payload: any) => {
  const user = await findUserByEmail(payload.email);
  if (!user) {
    throw new ApiError(STATUS_CODES.UNAUTHORIZED, 'Invalid credentials');
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password,
  );
  if (!isPasswordMatched) {
    throw new ApiError(STATUS_CODES.UNAUTHORIZED, 'Invalid credentials');
  }

  const accessToken = generateAccessToken({
    userId: user._id,
    role: user.role,
  });
  const refreshToken = generateRefreshToken({ userId: user._id });
  user.refreshToken = refreshToken;
  await user.save();
  return { accessToken, refreshToken };
};

export const refreshTokenService = async (refreshToken: string) => {
  if (!refreshToken) {
    throw new ApiError(STATUS_CODES.UNAUTHORIZED, 'Refresh token missing');
  }

  let decoded: any;

  try {
    decoded = verifyToken(refreshToken, env.JWT_REFRESH_SECRET);
  } catch (error) {
    throw new ApiError(STATUS_CODES.UNAUTHORIZED, 'Invalid refresh token');
  }

  const user = await User.findById(decoded.userId);

  if (!user) {
    throw new ApiError(STATUS_CODES.NOT_FOUND, 'User not found');
  }

  if (user.refreshToken !== refreshToken) {
    throw new ApiError(STATUS_CODES.UNAUTHORIZED, 'Refresh token mismatch');
  }

  const newAccessToken = generateAccessToken({
    userId: user._id,
    role: user.role,
  });

  const newRefreshToken = generateRefreshToken({
    userId: user._id,
  });

  user.refreshToken = newRefreshToken;

  await user.save();

  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
  };
};

export const logoutService = async (userId: string) => {
  await User.findByIdAndUpdate(userId, {
    refreshToken: null,
  });

  return {
    message: 'Logged out successfully',
  };
};
