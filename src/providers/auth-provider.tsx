'use client';

import { useEffect } from 'react';
import { useProfile } from '@/src/features/auth/hooks/use-profile';
import { useAppDispatch } from '@/src/store/hooks';
import { clearUser, setUser, initialize } from '@/src/store/slices/authSlice';
import { useAppSelector } from '@/src/store/hooks';
import AppLoader from '../components/common/AppLoader/AppLoader';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const dispatch = useAppDispatch();
  const { data, isSuccess, isError } = useProfile();
  const isInitialized = useAppSelector((state) => state.auth.isInitialized);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data.data));
      dispatch(initialize());
    }

    if (isError) {
      dispatch(clearUser());
      dispatch(initialize());
    }
  }, [isSuccess, isError, data, dispatch]);

  if (!isInitialized) {
    return <AppLoader />;
  }
  return children;
}
