import { useQuery } from '@tanstack/react-query';
import { fetchTechStack } from './api';

export const useSkills = () => {
  return useQuery({
    queryKey: ['skills'],
    queryFn: fetchTechStack,
  });
};
