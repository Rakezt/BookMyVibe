'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAppSelector } from '@/src/store/hooks';

type Props = {
  children: React.ReactNode;
  roles?: ('CUSTOMER' | 'ORGANIZER')[];
};

export default function ProtectedRoute({ children, roles }: Props) {
  const router = useRouter();

  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
      return;
    }

    if (roles && user && !roles.includes(user.role)) {
      router.replace('/');
    }
  }, [isAuthenticated, roles, router, user]);

  if (!isAuthenticated) {
    return null;
  }

  if (roles && user && !roles.includes(user.role)) {
    return null;
  }

  return children;
}
