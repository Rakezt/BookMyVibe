'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useProfile } from '@/src/features/auth/hooks/use-profile';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { clearUser, initialize, setUser } from '@/src/store/slices/authSlice';
import AppLoader from '../components/common/AppLoader/AppLoader';

type Props = {
  children: React.ReactNode;
};

const PUBLIC_ROUTES = [
  '/login',
  '/register',
  '/forgot-password',
  '/verify-otp',
  '/reset-password',
];

export default function AuthProvider({ children }: Props) {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  const isInitialized = useAppSelector((state) => state.auth.isInitialized);

  const { data, isSuccess, isError } = useProfile(!isPublicRoute);

  useEffect(() => {
    if (isPublicRoute) {
      dispatch(initialize());
      return;
    }

    if (isSuccess && data) {
      dispatch(setUser(data.data));
      dispatch(initialize());
    }

    if (isError) {
      dispatch(clearUser());
      dispatch(initialize());
    }
  }, [pathname, isPublicRoute, isSuccess, isError, data, dispatch]);

  if (!isInitialized) {
    return <AppLoader />;
  }

  return children;
}
