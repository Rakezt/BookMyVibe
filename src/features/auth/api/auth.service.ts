import { api } from '@/src/services/api';
import {
  LoginRequest,
  LoginResponse,
  ProfileResponse,
} from '../types/auth.types';

export const login = async (payload: LoginRequest): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>('/auth/login', payload);

  return data;
};

export const getProfile = async (): Promise<ProfileResponse> => {
  const { data } = await api.get<ProfileResponse>('/auth/profile');

  return data;
};
