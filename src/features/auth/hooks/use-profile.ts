import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../api/auth.service';
import { queryKeys } from '@/src/lib/queryKeys';

export const useProfile = () => {
  return useQuery({
    queryKey: queryKeys.profile.all,
    queryFn: getProfile,
    retry: false,
  });
};
