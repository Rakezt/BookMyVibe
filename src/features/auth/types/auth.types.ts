export type UserRole = 'CUSTOMER' | 'ORGANIZER';

export interface User {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
  };
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: User;
}

export interface ProfileResponse {
  success: boolean;
  data: User;
}
