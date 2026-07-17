import { api } from '@/src/services/api';
import {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  LoginResponse,
  ProfileResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
} from '../types/auth.types';

export const login = async (payload: LoginRequest): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>('/auth/login', payload);

  return data;
};

export const getProfile = async (): Promise<ProfileResponse> => {
  const { data } = await api.get<ProfileResponse>('/auth/profile');

  return data;
};

export const register = async (
  payload: RegisterRequest,
): Promise<RegisterResponse> => {
  const { data } = await api.post<RegisterResponse>('/auth/register', payload);

  return data;
};

export const forgotPassword = async (
  payload: ForgotPasswordRequest,
): Promise<ForgotPasswordResponse> => {
  const { data } = await api.post<ForgotPasswordResponse>(
    '/auth/forgot-password',
    payload,
  );

  return data;
};

export const verifyOtp = async (
  payload: VerifyOtpRequest,
): Promise<VerifyOtpResponse> => {
  const { data } = await api.post<VerifyOtpResponse>(
    '/auth/verify-otp',
    payload,
  );

  return data;
};

export const resetPassword = async (
  payload: ResetPasswordRequest,
): Promise<ResetPasswordResponse> => {
  const { data } = await api.post<ResetPasswordResponse>(
    '/auth/reset-password',
    payload,
  );

  return data;
};
