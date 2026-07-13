'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAppSelector } from '@/src/store/hooks';

type Props = {
  children: React.ReactNode;
};

export default function GuestRoute({ children }: Props) {
  const router = useRouter();

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      return;
    }

    if (user.role === 'ORGANIZER') {
      router.replace('/organizer/dashboard');
    } else {
      router.replace('/customer/dashboard');
    }
  }, [isAuthenticated, router, user]);

  if (isAuthenticated) {
    return null;
  }

  return children;
}
