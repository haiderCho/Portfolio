import { Project, ProjectSchema } from '@/types/schemas';
import { z } from 'zod';

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${import.meta.env.BASE_URL}data/projects.json`);
  if (!response.ok) throw new Error('Failed to fetch projects');
  const data = await response.json();
  const projects = z.array(ProjectSchema).parse(data);
  
  // Normalize fields for the UI
  return projects.map(p => ({
    ...p,
    tech: p.tech || p.techStack || [],
    repoUrl: p.repoUrl || p.github || '',
    demoUrl: p.demoUrl || p.demo || ''
  }));
};
