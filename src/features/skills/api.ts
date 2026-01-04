import { TechStack, TechStackSchema } from '@/types/schemas';
import { z } from 'zod';

export const fetchTechStack = async (): Promise<TechStack[]> => {
  const response = await fetch(`${import.meta.env.BASE_URL}data/tech-stack.json`);
  if (!response.ok) throw new Error('Failed to fetch tech stack');
  const data = await response.json();
  const stack = z.array(TechStackSchema).parse(data);
  
  return stack.map(s => ({
    ...s,
    level: s.level ?? 80 // Default level if missing
  }));
};
