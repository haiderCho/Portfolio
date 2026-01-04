import { z } from 'zod';

// --- Shared Schemas ---
export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  longDescription: z.string().optional(),
  tech: z.array(z.string()).optional(), // Made optional to handle mapping
  techStack: z.array(z.string()).optional(), // Support legacy name
  repoUrl: z.string().url().optional(),
  github: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  demo: z.string().url().optional(),
  image: z.string().optional(), // Made optional since it's missing in JSON
  category: z.string(), // Loosened from enum to handle variations
  featured: z.boolean().default(false),
  variant: z.enum(['hero', 'showcase', 'writing', 'standard']).default('standard'),
  stars: z.number().default(0),
  forks: z.number().default(0),
});

export const TechStackSchema = z.object({
  name: z.string(),
  level: z.number().min(0).max(100).optional(), // Some entries missing level
  category: z.string(),
  icon: z.string().optional(),
  color: z.string().optional(),
  glowColor: z.string().optional(),
});

// --- Derived Types ---
export type Project = z.infer<typeof ProjectSchema>;
export type TechStack = z.infer<typeof TechStackSchema>;

// --- Other Types ---
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

export interface ProgrammingLanguage extends TechStack {
  color?: string;
  glowColor?: string;
}
